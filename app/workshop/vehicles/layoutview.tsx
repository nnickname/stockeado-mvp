'use client';
import { getUser } from "@/app/api/userr/call";
import SideBarComponent from "@/components/panel/sidebar";
import { UserModel } from "@/models/user.model";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import IonIcon from "@reacticons/ionicons";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import '../home/index.css';
import Modal from "react-responsive-modal";
import 'react-responsive-modal/styles.css';
import Select from "react-dropdown-select";
import Link from "next/link";
import { ValuesDataGridLocale } from "../inspections/layoutview";

const VehiclesWorkshopLayoutPage = ( ) => {
    const router = useRouter();
    const [user, setUser] = useState<UserModel>(null);
    const [open, setOpen] = useState<boolean>();
    const [width, setWidth] = useState(0)
    const handleResize = () => setWidth(window.innerWidth)
    const toUser = async () => {
        const userr = await getUser();
        if(userr === undefined || userr === null){
              router.push('/');
        }
        if(userr?.type !== 'workshop'){
            router.push('/provider/home');
        }
        setUser(userr);
      }
    useEffect(() => {
        toUser();
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return <div>
        {user === null ? <IonIcon name='chevron-collapse-outline' className="rotateItem" color='#1366D9' style={{fontSize: '1.5rem', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}/> :
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
                                
                                <input placeholder="Busca por vehículo, placa o fecha"/>
                                <div>
                                    <IonIcon name="search-outline"/>
                                </div>
                            </div>
                                <select className="selectHomeWorkshop ml1">
                                        <option>Abril</option>
                                        <option>Mayo</option>
                                </select>
                        </div>
                        <TableComponent/>
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
                <h2 className="subtitle mt1">Vehículo #22</h2>
                <div className="flex between mt1">
                    <p className="formTitle">Marca</p>
                    <input className="inputForm" type="text" placeholder=""/>
                </div>
                <div className="flex between mt1">
                    <p className="formTitle">Modelo</p>
                    <input className="inputForm ml1" type="text" placeholder=""/>
                </div>
                <div className="flex between mt1">
                    <p className="formTitle">Año</p>
                    <input className="inputForm ml1" type="text" placeholder=""/>
                </div>
                <div className="flex between mt1">
                    <p className="formTitle">Placa</p>
                    <input className="inputForm ml1" type="text" placeholder=""/>
                </div>
                <div className="flex between mt1">
                    <p className="formTitle">VIN</p>
                    <input className="inputForm ml1" type="text" placeholder=""/>
                </div>
                <div className="flex between mt1">
                    <p className="formTitle">Asociar cliente</p>
                    <Select
                                        multi
                                        options={[
                                            {
                                                label: 'Jorge Perer',
                                                value: '0',
                                            },
                                            {
                                                label: 'Jorge Perez',
                                                value: '1',
                                            },
                                            {
                                                label: 'Mauricio Perez',
                                                value: '2',
                                            },
                                            {
                                                label: 'Jose Perez',
                                                value: '3',
                                            },
                                            {
                                                label: 'Hector Perez',
                                                value: '4',
                                            }
                                        ]}
                                        separator
                                        placeholder="Seleccionar/buscar"
                                        className="inputForm"
                                        onChange={(values) => { } } values={[]}                                    />
                </div>
                <div className="center w100 mt2">
                    <button className="btn-gradient-primary">Guardar vehículo</button>
                </div>
              </div>
          </Modal>
    </div>
}



const TableComponent = () => {
    const router = useRouter();
    const columns: GridColDef[] = [
        
        
        
        { field: 'vehicle', headerName: 'Vehículo', width: 200, headerClassName: 'color-table-header'},
        { field: 'plate', headerName: 'Placa', width: 150, headerClassName: 'color-table-header'},
        { field: 'client', headerName: 'Cliente', width: 200, headerClassName: 'color-table-header'},
        { field: 'lastService', headerName: 'Último servicio', width: 200, headerClassName: 'color-table-header'},
        { field: 'calendars', headerName: 'Recordatorios', width: 200, headerClassName: 'color-table-header'},
        {
            field: 'action',
            headerName: 'Ver/Editar',
            sortable: false,
            width: 160,
            align: 'left',
            headerClassName: 'color-table-header',
            renderCell: (params) => <Link href='/workshop/vehicles/view' className="btn mt05">
                <IonIcon style={{fontSize: '1.5rem', color: "#3662E3"}} name='eye-outline'/>
            </Link>
        },

    ];
    const rows = [
        {
            id: 0,
            client: 'Jorge Perez',
            plate: 'MKY-485',
            vehicle: 'BMEW I30',
            lastService: '23-04/10',
            calendars: '10'
        }
    ];      
    return <div className="mt1" style={{minHeight: 500, width: '100%'}}>
        <DataGrid
        rowSelection={false}
        localeText={ValuesDataGridLocale}
        autoPageSize={true}
        rows={rows}
        columns={columns}
        initialState={{
            pagination: {
            paginationModel: { page: 0, pageSize: 5 },
            },
        }}
        pageSizeOptions={[5, 10]}
        
        
        />
  </div>
}
export default VehiclesWorkshopLayoutPage;
