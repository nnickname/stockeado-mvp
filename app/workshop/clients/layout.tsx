'use client';
import { getUser } from "@/app/api/userr/call";
import SideBarComponent from "@/components/panel/sidebar";
import { UserModel } from "@/models/user.model";
import IonIcon from "@reacticons/ionicons";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import '../../../components/marketplace/header/index.css';
import '../home/index.css';
import Modal from "react-responsive-modal";
import 'react-responsive-modal/styles.css';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

const ClientsWorkshopLayoutPage = ( ) => {
    
    const router = useRouter();
    const [open, setOpen] = useState<boolean>();
    const [user, setUser] = useState<UserModel>(null);
    const [search, setSearch] = useState("");

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
    const [width, setWidth] = useState(0)
    const handleResize = () => setWidth(window.innerWidth)
    useEffect(() => {
        toUser();
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    const handleSearch = (event: any) => {
        setSearch(event.target.value);
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
                                
                                <input placeholder="Busca por nombre, placa o fecha"/>
                                <div>
                                    <IonIcon name="search-outline"/>
                                </div>
                            </div>
                                <select className="selectHomeWorkshop ml1">
                                        <option>Abril</option>
                                        <option>Mayo</option>
                                </select>
                        </div>
                        <TableComponent />
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
                <h2 className="subtitle mt1">Cliente #22</h2>
                <div className="flex between mt1">
                    <p className="formTitle">Nombre</p>
                    <input className="inputForm" type="text" placeholder=""/>
                </div>
                <div className="flex between mt1">
                    <p className="formTitle">Apellido</p>
                    <input className="inputForm ml1" type="text" placeholder=""/>
                </div>
                <div className="flex between mt1">
                    <p className="formTitle">Celular</p>
                    <input className="inputForm ml1" type="text" placeholder=""/>
                </div>
                <div className="flex between mt1">
                    <p className="formTitle">Correo</p>
                    <input className="inputForm ml1" type="text" placeholder=""/>
                </div>
                <div className="flex between mt1">
                    <p className="formTitle">Asociar vehículos</p>
                    <input className="inputForm ml1" type="text" placeholder=""/>
                </div>
                <div className="center w100 mt2">
                    <button className="btn-gradient-primary">Guardar cliente</button>
                </div>
              </div>
          </Modal>
    </div>
}

const TableComponent = () => {
    const columns: GridColDef[] = [
        
        
        {
          field: 'fullName',
          headerName: 'Nombre',
          sortable: false,
          width: 160,
          valueGetter: (value, row) => `${row.name || ''} ${row.lastname || ''}`,
          headerClassName: 'color-table-header'
        },
        { field: 'vehicle', headerName: 'Vehículo', headerClassName: 'color-table-header'},
        { field: 'phone', headerName: 'Celular', width: 200, headerClassName: 'color-table-header'},
        { field: 'service', headerName: 'Último servicio', width: 200, headerClassName: 'color-table-header'},
        { field: 'calendars', headerName: 'Recordatorios', headerClassName: 'color-table-header'},
        {
            field: 'action',
            headerName: '',
            sortable: false,
            width: 160,
            align: 'center',
            renderCell: (params) => <button className="btn mt05">
                <IonIcon style={{fontSize: '1.5rem', color: "#3662E3"}} name='eye-outline'/>
            </button>
        },

    ];
    const rows = [
        {
            id: 0,
            realid: '19394',
            name: 'Hola',
            lastname: 'Chau',
            phone: '+542050484754',
            vehicle: 'BMEW I30',
            service: '23-04/10',
            calendars: '10'
        }
    ];      
    return <div className="mt1" style={{minHeight: 500}}>
        <DataGrid
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
export default ClientsWorkshopLayoutPage;