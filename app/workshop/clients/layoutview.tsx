'use client';
import { getUser, verifyUserWorkshop } from "@/app/api/user/call";
import SideBarComponent from "@/components/panel/sidebar";
import { UserModel } from "@/models/user.model";
import IonIcon from "@reacticons/ionicons";
import { useRouter } from "next/navigation";
import { useState, useEffect, FunctionComponent } from "react";
import '../../../components/marketplace/header/index.css';
import '../home/index.css';
import Modal from "react-responsive-modal";
import 'react-responsive-modal/styles.css';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Select from "react-dropdown-select";
import { ValuesDataGridLocale } from "../inspections/layoutview";
import { createClient, getAllClients } from "@/app/api/workshop/clients/call";
import { ClientsModel } from "@/models/workshops/clients.model";
import { toast } from "react-toastify";
import { VehiclesModel } from "@/models/workshops/vehicles.model";
import { getAllVehicles } from "@/app/api/workshop/vehicles/call";
import { getAllOrderServices } from "@/app/api/workshop/orders/call";
import { OrderWorkshopModel } from "@/models/workshops/orders.model";
import { CalendarsModel } from "@/models/workshops/calendars.model";
import { getAllCalendars } from "@/app/api/workshop/calendars/call";
import { ReturnUnifiedStringDateTime } from "@/utils/hooks";
import { ExportJsonCsv } from 'react-export-json-csv';

const ClientsWorkshopLayoutPage = ( ) => {
    const headers = [
        {
            key: 'fullname',
            name: 'Nombre completo',
        },
        {
            key: 'phone',
            name: 'Celular'
        },
        {
            key: 'vehicle',
            name: 'Vehículo',
        },
        {
            key: 'service',
            name: 'Ultimo servicio'
        },
        {
            key: 'calendars',
            name: 'Calendarios',
        },
        
    ];
    
    const router = useRouter();
    const [open, setOpen] = useState<boolean>();
    const [user, setUser] = useState<UserModel>(null);
    const [realClients, setRealClient] = useState<ClientsModel[]>(null);
    const [clients, setClients] = useState<ClientsModel[]>(null);

    const [search, setSearch] = useState("");
    const [name, setName] = useState<string>('');
    const [lastname, setLastName] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [vehicles, setVehicles] = useState<string[]>([]);
    const [formError, setErrorForm] = useState<string>('');
    const [vehiclesOptions, setVehiclesOptions] = useState<VehiclesModel[]>([]);
    const [orders, setOrders] = useState<OrderWorkshopModel[]>([]);
    const [calendars, setCalendars] = useState<CalendarsModel[]>([]);
    const [month, selectMonth] = useState<number>(0);
    const [disabledButton, setDisabledButton] = useState<boolean>(false);
    const toUser = async () => {
        const userr = await getUser();
        var ownerid = String(userr?._id);
        if(!verifyUserWorkshop(userr, router, '/workshop/clients')) {
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
        setRealClient(clientss.reverse() ?? []);
        setVehiclesOptions(vehicless.reverse() ?? []);
        setCalendars(calendarsCast.reverse() ?? []);
        filterMonth(0, clientss.reverse());
    }
    const buildForm = async() => {
        if(name !== '' && lastname !== '' && phone !== '' && email !== ''){
            const body = {
                name, lastname, phone, email, vehicles, 
                owner: user?.role === 'owner' ? user?._id : user?.owner,
                createdBy: user?.name + ' ' + user?.lastname
            };
            setDisabledButton(true);
            const response = await createClient(body);
            if(response){
                toast.success('Cliente añadido')
                const clientss = await getAllClients(String(user?._id)) ?? [];
                setClients(clientss);
                setOpen(false);
                setDisabledButton(false);
            } else setErrorForm('* Ocurrio un problema');
        } else setErrorForm('* Encontramos errores en el formulario');
    }
    const [width, setWidth] = useState(0)
    const handleResize = () => setWidth(window.innerWidth)
    useEffect(() => {
        toUser();
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    

    const filterMonth = (month: number, realClientss: ClientsModel[]) => {
        const currentDate = new Date();
        if(month === 0){
            setClients(realClientss.reverse() ?? []);
            selectMonth(0);
            return;
        }
        const clientsFilter: ClientsModel[] = [];
        realClientss?.map((e) => {
            const date = new Date(e?.createdAt);
            if(currentDate.getFullYear() === date?.getFullYear()){
                if(month === Number(date?.getMonth() +1)){
                    clientsFilter.push(e);
                }
            }
        });
        setClients(clientsFilter.reverse() ?? []);
        selectMonth(month);
    }  
    
    return <div>
        {user === null ? <IonIcon name='chevron-collapse-outline' className="rotateItem" color='#1366D9' style={{fontSize: '1.5rem', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}/> :
            <SideBarComponent user={user} route='/workshop/clients' frameContennt={
                <div>
                    <h1 className="headerSideBar"> Clientes</h1>
                    <div className="p1">
                        <div className="flex between">
                            <div>
                                <p className="subtitle mt2">Clientes recientes</p>
                            </div>
                            <div>
                                <button onClick={() => setOpen(true)} className="btn-gradient-secondary mt1"><IonIcon className="mr1" name="person-add-outline" style={{fontSize: '1.1rem'}}/> <span style={{fontSize: '1rem'}}>Nuevo cliente</span></button>
                            </div>
                        </div>
                        
                        <div className="flex w100 mt1">
                            <div className="inputRightIcon">
                                
                                <input style={{border: '1px solid #3662E3'}} onChange={(e) => setSearch(e?.target?.value)} placeholder="Busca por nombre de cliente"/>
                                <div>
                                    <IonIcon name="search-outline"/>
                                </div>
                            </div>
                            <ExportJsonCsv fileTitle="clientes-stockeado"  className="ml1 selectHomeWorkshopblue flex" headers={headers} items={[...clients?.map((e, index: number) => {
                                var calendarsCount:number = 0;
                                calendars?.map((a) => {
                                    if(e?._id === a?.client) calendarsCount++;
                                })
                                return {
                                    fullname: e?.name + ' ' + e?.lastname,
                                    phone: e?.phone,
                                    vehicle: String(e?.vehicles?.map((a) =>{
                                        return ' ' + vehiclesOptions.find((e) =>  String(e?._id) === a).brand + ' ' + vehiclesOptions.find((e) => String(e?._id) === a).model})).substring(0, 25) + '...',
                                    service: orders?.map((a, index: number) => {
                                        if(a?.client?._id === e?._id){
                                         return ' ' + ReturnUnifiedStringDateTime(a?.dateStart);
                                        }
                                        ;
                                    }).filter(s => s !== undefined) ?? 'No encontrado',
                                    calendars: String(calendarsCount)
                                }
                            })]}><IonIcon style={{fontSize: '1.2rem', backgroundColor: 'white'}} className="mr1 mt05" name="cloud-download-outline"/> <span style={{marginTop: '.3rem'}}>Exportar</span></ExportJsonCsv >
                           <select value={month} onChange={(e) => filterMonth(Number(e.target.value), realClients)} className="selectHomeWorkshopblue ml1">
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
                            [...clients?.map((e, index: number) => {
                                var calendarsCount:number = 0;
                                calendars?.map((a) => {
                                    if(e?._id === a?.client) calendarsCount++;
                                })
                                return {
                                    id: index,
                                    realid: e?._id,
                                    name: e?.name,
                                    lastname: e?.lastname,
                                    phone: e?.phone,
                                    vehicle: String(e?.vehicles?.map((a) =>{
                                        return ' ' + vehiclesOptions.find((e) =>  String(e?._id) === a).brand + ' ' + vehiclesOptions.find((e) => String(e?._id) === a).model})).substring(0, 25) + '...',
                                    service: orders?.map((a, index: number) => {
                                        if(a?.client?._id === e?._id){
                                         return ' ' + ReturnUnifiedStringDateTime(a?.dateStart);
                                        }
                                        ;
                                    }).filter(s => s !== undefined) ?? 'No encontrado',
                                    action: e?._id,
                                    calendars: String(calendarsCount)
                                }
                            })]?.filter((item) => (item?.name + ' ' + item?.lastname).toLowerCase().includes(search?.toLowerCase()))
                        } />
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
                <h1 className="title">Nuevo cliente</h1>
                <h2 className="subtitle mt1">Cliente #{clients?.length + 1}</h2>
                <div className="flex between displayBlockResponsive mt1">
                    <p className="formTitle mr1">Nombre</p>
                    <input className="inputForm" onChange={(e) => setName(e.target.value)} type="text" placeholder=""/>
                </div>
                <div className="flex between displayBlockResponsive mt1">
                    <p className="formTitle mr1">Apellido</p>
                    <input className="inputForm" onChange={(e) => setLastName(e.target.value)} type="text" placeholder=""/>
                </div>
                <div className="flex between displayBlockResponsive mt1">
                    <p className="formTitle mr1">Celular</p>
                    <input className="inputForm" onChange={(e) => setPhone(e.target.value)} type="text" placeholder=""/>
                </div>
                <div className="flex between displayBlockResponsive mt1">
                    <p className="formTitle mr1">Correo</p>
                    <input className="inputForm " onChange={(e) => setEmail(e.target.value)} type="text" placeholder=""/>
                </div>
                <div className="flex between mt1 displayBlockResponsive">
                    <p className="formTitle">Asociar vehículos</p>
                    <Select
                        
                        multi
                        options={[...vehiclesOptions?.map((e) => {
                            return {
                                label: e?.brand + ' ' + e?.model,
                                value: String(e?._id)
                            }
                        })]}
                        separator
                        placeholder="Seleccionar varios"
                        className="inputForm"
                        onChange={(values) => {setVehicles([...values?.map((e) => String(e.value))])} } 
                        values={[]}                                    />
                </div>
                {formError === '' ? <p></p> : <p className="subsubtitle color-trash">{formError}</p>}

                <div className="center w100 mt2">
                    <button disabled={disabledButton} className="btn-gradient-primary" onClick={() => buildForm()}>{
                    disabledButton ? <IonIcon name='chevron-collapse-outline' className="rotateItem" color='grey' style={{fontSize: '1rem' }}/> : 'Guardar cliente'}</button>
                </div>
              </div>
          </Modal>
    </div>
}


export type NewTableComponentType = {
    rows: any
}
const TableComponent: FunctionComponent<NewTableComponentType> = ({rows}) => {
    const router = useRouter();
    const columns: GridColDef[] = [
        
        
        {
          field: 'fullName',
          headerName: 'Nombre',
          sortable: false,
          width: 160,
          valueGetter: (value, row) => `${row.name || ''} ${row.lastname || ''}`,
          headerClassName: 'color-table-header'
        },
        { field: 'vehicle', headerName: 'Vehículo', width: 200, headerClassName: 'color-table-header'},
        { field: 'phone', headerName: 'Celular', width: 150, headerClassName: 'color-table-header'},
        { field: 'service', headerName: 'Último servicio', width: 200, headerClassName: 'color-table-header'},
        { field: 'calendars', headerName: 'Recordatorios', width: 200, headerClassName: 'color-table-header'},
        {
            field: 'action',
            headerName: 'Ver/Editar',
            sortable: false,
            width: 160,
            type: 'actions',
            align: 'center',
            flex: 2,
            headerClassName: 'color-table-header',
            renderCell: (params) => <button onClick={() => router.push('/workshop/clients/view?id=' + params?.value)} className="btn mt05">
                <IonIcon style={{fontSize: '1.5rem', color: "#3662E3"}} name='eye-outline'/>
            </button>
        },

    ];
          
    return <div className="mt1" style={{background: 'white', width: '100%'}}>
        <DataGrid
            localeText={ValuesDataGridLocale}
            autoHeight
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
export default ClientsWorkshopLayoutPage;