'use client';
import { getUser, verifyUserWorkshop } from "@/app/api/user/call";
import SideBarComponent from "@/components/panel/sidebar";
import { UserModel } from "@/models/user.model";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import IonIcon from "@reacticons/ionicons";
import { useRouter } from "next/navigation";
import { useState, useEffect, FunctionComponent } from "react";
import '../home/index.css';
import Modal from "react-responsive-modal";
import 'react-responsive-modal/styles.css';
import Select from "react-dropdown-select";
import Link from "next/link";
import { ValuesDataGridLocale } from "../inspections/layoutview";
import { createVehicle, getAllVehicles } from "@/app/api/workshop/vehicles/call";
import { VehiclesModel } from "@/models/workshops/vehicles/vehicles.model";
import { toast } from "react-toastify";
import { NewTableComponentType } from "../clients/layoutview";
import { OrderWorkshopModel } from "@/models/workshops/orders.model";
import { ClientsModel } from "@/models/workshops/clients.model";
import { getAllClients } from "@/app/api/workshop/clients/call";
import { getAllOrderServices } from "@/app/api/workshop/orders/call";
import { getAllCalendars } from "@/app/api/workshop/calendars/call";
import { CalendarsModel } from "@/models/workshops/calendars.model";
import Cars from '@/json/cars.json';
import { ReturnUnifiedStringDateTime } from "@/utils/hooks";
import { ExportJsonCsv } from 'react-export-json-csv';
import LoadPage from "@/components/general/loadPage";

const VehiclesWorkshopLayoutPage = ( ) => {
    const headers = [
        {
            key: 'client',
            name: 'Clientes',
        },
        {
            key: 'plate',
            name: 'Placa'
        },
        {
            key: 'vehicle',
            name: 'Vehículo'
        },
        {
            key: 'lastService',
            name: 'Ultimo servicio'
        },
        {
            key: 'calendars',
            name: 'Calendarios'
        }
        
    ];
    
    const router = useRouter();
    const [user, setUser] = useState<UserModel>(null);
    const [open, setOpen] = useState<boolean>();
    const [width, setWidth] = useState(0);
    const [vehicles, setVehicles] = useState<VehiclesModel[]>([]);
    const [clients, setClients] = useState<ClientsModel[]>([]);
    const [orders, setOrders] = useState<OrderWorkshopModel[]>([]);
    const [realVehicles, setRealVehicles] = useState<VehiclesModel[]>([]);

    const [brand, setBrand] = useState<string>('');
    const [model, setModel] = useState<string>('');
    const [year, setYear] = useState<string>('');
    const [plate, setPlate] = useState<string>('');
    const [vin, setVin] = useState<string>('');
    const [formError, setErrorForm] = useState<string>('');
    const [calendars, setCalendars] = useState<CalendarsModel[]>([]);
    const [month, selectMonth] = useState<number>(0);
    const [disabledButton, setDisabledButton] = useState<boolean>(false);
    const [carSelected, setCarSelected]  = useState<Array<any>>([]);
    const handleResize = () => setWidth(window.innerWidth);
    const [search, setSearch] = useState<string>('');
    const toUser = async () => {
        const userr = await getUser();
        var ownerid = String(userr?._id);
        if(!verifyUserWorkshop(userr, router, '/workshop/vehicles')) {
            return;
        }
        if(userr?.role !== 'owner'){
            ownerid = userr?.owner;
        }
        const clientss = await getAllClients(ownerid) ?? [];
        const vehicless = await getAllVehicles(ownerid) ?? [];
        const ordersCast = await getAllOrderServices(ownerid);
        const calendarsCast = await getAllCalendars(ownerid);
        setOrders(ordersCast?.reverse() ?? []);
        setUser(userr);
        setClients(clientss ?? []);
        setRealVehicles(vehicless ?? []);
        setCalendars(calendarsCast ?? []);
        filterMonth(0, vehicless);
    }
    const filterMonth = (month: number, realVehicless: VehiclesModel[]) => {
        const currentDate = new Date();
        if(month === 0){
            setVehicles(realVehicless.reverse() ?? []);
            selectMonth(0);
            return;
        }
        const vehiclesFilter: VehiclesModel[] = [];
        realVehicless?.map((e) => {
            const date = new Date(e?.createdAt);
            if(currentDate.getFullYear() === date?.getFullYear()){
                if(month === Number(date?.getMonth() +1)){
                    vehiclesFilter.push(e);
                }
            }
        });
        setVehicles(vehiclesFilter.reverse() ?? []);
        selectMonth(month);
    }
    const buildForm = async() => {
        if(brand !== '' && model !== '' && year !== '' && plate !== '' && vin !== ''){
            const body = {
                brand, model, year, plate, vin, 
                owner: user?.role === 'owner' ? user?._id : user?.owner,
                createdBy: user?.name + ' ' + user?.lastname
            };
            setDisabledButton(true);
            const response = await createVehicle(body);
            if(response){
                toast.success('Vehículo añadido')
                const vehicless = await getAllVehicles(String(user?._id)) ?? [];
                setVehicles(vehicless);
                setDisabledButton(false);
                setOpen(false);
            } else setErrorForm('* Ocurrio un problema');
        } else setErrorForm('* Encontramos errores en el formulario');
    }
    useEffect(() => {
        toUser();
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return <div>
        {user === null ? <LoadPage/> :
            <SideBarComponent user={user} route='/workshop/vehicles' frameContennt={
                <div>
                    <h1 className="headerSideBar"> Vehículos</h1>
                    <div className="p1">
                        <div className="flex between">
                            <div>
                                <p className="subtitle mt2">Vehículos registrados recientes</p>
                            </div>
                            <div>
                                <button onClick={() => setOpen(true)} className="btn-gradient-secondary mt1"><IonIcon className="mr1" name="car-outline" style={{fontSize: '1.1rem'}}/> <span style={{fontSize: '1rem'}}>Nuevo vehículo</span></button>
                            </div>
                        </div>
                        
                        <div className="flex w100 mt1">
                            <div className="inputRightIcon">
                                
                                <input style={{border: '1px solid #3662E3'}} onChange={(e) => setSearch(e?.target?.value)} placeholder="Busca por vehículo"/>
                                <div>
                                    <IonIcon name="search-outline"/>
                                </div>
                            </div>
                            <ExportJsonCsv fileTitle="vehiculos-stockeado"  className="ml1 selectHomeWorkshopblue flex" headers={headers} items={[
                                ...vehicles?.map((e, index: number) => {
                                    var calendarsCount:number = 0;
                                    calendars?.map((a) => {
                                        if(e?._id === a?.vehicle) calendarsCount++;
                                    })
                                    return {
                                        client: clients?.map((t) => {
                                            var items = [];
                                            t?.vehicles?.map((a) =>{
                                                if(String(e?._id) === a){
                                                    items.push(' ' + t?.name + ' ' + t?.lastname);
                                                };
                                            });
                                            if(items?.length > 0) return items;
                                        }).filter(s => s !== undefined) ,
                                        plate: e?.plate,
                                        vehicle: e?.brand + ' ' + e.model,
                                        lastService: orders?.map((a, index: number) => {
                                            if(a?.vehicle?._id === e?._id){
                                             return ' ' + ReturnUnifiedStringDateTime(a?.dateStart);
                                            }
                                            ;
                                        }).filter(s => s !== undefined),
                                        calendars: String(calendarsCount),
                                    }
                                })
                            ]}><IonIcon style={{fontSize: '1.2rem', backgroundColor: 'white'}} className="mr1 mt05" name="cloud-download-outline"/> <span style={{marginTop: '.3rem'}}>Exportar</span></ExportJsonCsv >
                             <select value={month} onChange={(e) => filterMonth(Number(e.target.value), realVehicles)} className="selectHomeWorkshopblue ml1">
                                    <option value={0}>Todo</option>
                                    <option value={1}>Enero</option>
                                    <option value={2}>Febrero</option>
                                    <option value={3}>Marzo</option>
                                    <option value={4}>Abril</option>
                                    <option value={5}>Mayo</option>
                                    <option value={6}>Junio</option>
                                    <option value={7}>Julio</option>
                                    <option value={8}>Agosto</option>
                                    <option value={9}>Septiembre</option>
                                    <option value={10}>Octubre</option>
                                    <option value={11}>Noviembre</option>
                                    <option value={12}>Diciembre</option>
                            </select>
                        </div>
                        <TableComponent rows={
                            [...vehicles?.map((e, index: number) => {
                                var calendarsCount:number = 0;
                                calendars?.map((a) => {
                                    if(e?._id === a?.vehicle) calendarsCount++;
                                })
                                return {
                                    id: index,
                                    client: clients?.map((t) => {
                                        var items = [];
                                        t?.vehicles?.map((a) =>{
                                            if(String(e?._id) === a){
                                                items.push(' ' + t?.name + ' ' + t?.lastname);
                                            };
                                        });
                                        if(items?.length > 0) return items;
                                    }).filter(s => s !== undefined) ,
                                    plate: e?.plate,
                                    vehicle: e?.brand + ' ' + e.model,
                                    lastService: orders?.map((a, index: number) => {
                                        if(a?.vehicle?._id === e?._id){
                                         return ' ' + ReturnUnifiedStringDateTime(a?.dateStart);
                                        }
                                        ;
                                    }).filter(s => s !== undefined),
                                    calendars: String(calendarsCount),
                                    action: e?._id
                                }
                            })]?.filter((item) => (item?.vehicle).toLowerCase().includes(search?.toLowerCase()))
                        }/>
                    </div>
                </div>
            }
            />
        }

<Modal closeIcon={<IonIcon name="close"/>} styles={{
              modal : {borderRadius: '.5rem', width: '100%', padding: '0rem', maxWidth: width < 921 ? '80%' : '600px'},
              closeIcon: {color: 'white !important'},
              overlay: {backgroundColor: 'rgba(220, 217, 217, 0.5)'}
            }}  open={open} center onClose={() => setOpen(false) }>
              <div style={{padding: '1rem'}}>
                <h1 className="title">Nuevo vehículo</h1>
                <h2 className="subtitle mt1">Vehículo #{vehicles?.length+1}</h2>
                <div className="flex between displayBlockResponsive mt1">
                    <p className="formTitle mr1">Marca</p>
                    <Select
                        closeOnClickInput
                        style={{color: '#8C95A3', backgroundColor: '#F2F3F5', minWidth: '150px'}}
                        options={[
                            
                            ...Cars?.map((e) => {
                                return {
                                    label: e?.brand,
                                    value: e?.brand
                                }
                            })]}
                            separator
                            placeholder="Seleccionar/Buscar"
                            className="inputForm"
                            onChange={(values) => {
                                if(values[0]?.value !== 'other') {
                                    setBrand(values[0]?.value);
                                    setCarSelected(Cars?.find((e) => e?.brand === values[0]?.value)?.models);
                                    return;
                                }
                        } } values={[{value: brand, label: brand === '' ? 'Seleccionar/buscar' : '# ' + brand }]}                                     />
                </div>
                <div className="flex between displayBlockResponsive mt1">
                    <p className="formTitle mr1">Modelo</p>
                    <Select
                        closeOnClickInput
                        disabled={carSelected?.length === 0 ? true : false}
                        style={{color: '#8C95A3', backgroundColor: '#F2F3F5', minWidth: '150px'}}
                        options={
                            carSelected?.length > 0 ? [...carSelected?.map((e) => {
                                return {
                                    label: String(e?.title),
                                    value: String(e?.title)

                                }
                            })] : [{label: 'No encontrado', value: 'other'}]}
                            separator
                            placeholder="Seleccionar/Buscar"
                            className="inputForm"
                            onChange={(values) => {
                                if(values[0]?.value !== 'other') {
                                    setModel(values[0]?.value);
                                    return;
                                }
                        } } values={[{value: model, label: model === '' ? 'Seleccionar/buscar' : '# ' + model }]}                                     />
                
                </div>
                <div className="flex between displayBlockResponsive mt1">
                    <p className="formTitle mr1">Año</p>
                    <Select
                        closeOnClickInput
                        disabled={carSelected?.length === 0 ? true : false}
                        style={{color: '#8C95A3', backgroundColor: '#F2F3F5', minWidth: '150px'}}
                        options={[ ...new Array(74).fill(null).map((_, i) => {
                                return {
                                    value: (1950 + (i+1)).toString(),
                                    label: (1950 + (i+1)).toString(),
                                }
                                })
                            ]}
                            separator
                            placeholder="Seleccionar/Buscar"
                            className="inputForm"
                            onChange={(values) => {
                                if(values[0]?.value !== 'other') {
                                    setYear(values[0]?.value);
                                    return;
                                }
                        } } values={[{value: year, label: year === '' ? 'Seleccionar/buscar' : '# ' + year }]}                                     />
                
                </div>
                <div className="flex between displayBlockResponsive mt1">
                    <p  className="formTitle mr1">Placa</p>
                    <input onChange={(e) => setPlate(e.target.value)} className="inputForm" type="text" placeholder=""/>
                </div>
                <div className="flex between displayBlockResponsive mt1">
                    <p className="formTitle mr1">VIN</p>
                    <input onChange={(e) => setVin(e.target.value)} className="inputForm " type="text" placeholder=""/>
                </div>
               
                {formError === '' ? <p></p> : <p className="subsubtitle color-trash">{formError}</p>}

                <div className="center w100 mt2">
                    <button disabled={disabledButton} className="btn-gradient-primary" onClick={() => buildForm()}>{
                    disabledButton ? <IonIcon name='chevron-collapse-outline' className="rotateItem" color='grey' style={{fontSize: '1rem' }}/> : 'Guardar vehículo'}</button>
                </div>
              </div>
          </Modal>
          
    </div>
}



const TableComponent: FunctionComponent<NewTableComponentType> = ({rows}) => {
    console.log(rows);
    const router = useRouter();
    const columns: GridColDef[] = [
        
        
        
        { field: 'vehicle', headerName: 'Vehículo', width: 200, headerClassName: 'color-table-header'},
        { field: 'plate', headerName: 'Placa', width: 150, headerClassName: 'color-table-header'},
        { field: 'client', headerName: 'Clientes', width: 200, headerClassName: 'color-table-header'},
        { field: 'lastService', headerName: 'Últimos servicios', width: 220, headerClassName: 'color-table-header'},
        { field: 'calendars', headerName: 'Recordatorios', width: 100, headerClassName: 'color-table-header'},
        {
            field: 'action',
            headerName: 'Ver/Editar',
            sortable: false,
            width: 160,
            type: 'actions',
            align: 'center',
            flex: 2,
            headerClassName: 'color-table-header',
            renderCell: (params) => <Link href={'/workshop/vehicles/view?id=' + params?.value} className="btn mt05">
                <IonIcon style={{fontSize: '1.5rem', color: "#3662E3"}} name='eye-outline'/>
            </Link>
        },

    ];
          
    return <div className="mt1" style={{width: '100%', background: 'white'}}>
        <DataGrid
            rowSelection={false}
            autoHeight
            localeText={ValuesDataGridLocale}
            rows={rows}
            columns={columns}
            initialState={{
                pagination: {
                paginationModel: { page: 0, pageSize: 10 },
                },
            }}
            pageSizeOptions={[5, 10, 50]}
        
        
        />
  </div>
}
export default VehiclesWorkshopLayoutPage;
