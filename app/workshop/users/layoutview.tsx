'use client';
import { getUser } from "@/app/api/user/call";
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

const UsersWorkshopLayoutPage = ( ) => {
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
        if(userr === undefined || userr === null){
              router.push('/');
        }
        if(userr?.type !== 'workshop'){
            router.push('/provider/home');
        }
        const clientss = await getAllClients(userr?._id) ?? [];
        const vehicless = await getAllVehicles(String(userr?._id)) ?? [];
        const ordersCast = await getAllOrderServices(String(userr?._id));
        const calendarsCast = await getAllCalendars(String(userr?._id));
        setOrders(ordersCast?.reverse() ?? []);
        setUser(userr);
        setRealClient(clientss ?? []);
        setVehiclesOptions(vehicless ?? []);
        setCalendars(calendarsCast ?? []);
        filterMonth(0, clientss);
    }
    const buildForm = async() => {
        if(name !== '' && lastname !== '' && phone !== '' && email !== ''){
            const body = {
                name, lastname, phone, email, vehicles, owner: String(user._id)
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
            setClients(realClientss ?? []);
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
        setClients(clientsFilter ?? []);
        selectMonth(month);
    }  
    
    return <div>
        {user === null ? <IonIcon name='chevron-collapse-outline' className="rotateItem" color='#1366D9' style={{fontSize: '1.5rem', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}/> :
            <SideBarComponent user={user} route='/workshop/users' frameContennt={
                <div>
                    <h1 className="headerSideBar"> Disponible 3 Junio</h1>
                    
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
                <h1 className="title">Nuevo usuario</h1>
                <h2 className="subtitle mt1">Usuario #{clients?.length + 1}</h2>
                <div className="flex between mt1">
                    <p className="formTitle">Nombre</p>
                    <input className="inputForm" onChange={(e) => setName(e.target.value)} type="text" placeholder=""/>
                </div>
                <div className="flex between mt1">
                    <p className="formTitle">Apellido</p>
                    <input className="inputForm ml1" onChange={(e) => setLastName(e.target.value)} type="text" placeholder=""/>
                </div>
                <div className="flex between mt1">
                    <p className="formTitle">Celular</p>
                    <input className="inputForm ml1" onChange={(e) => setPhone(e.target.value)} type="text" placeholder=""/>
                </div>
                <div className="flex between mt1">
                    <p className="formTitle">Correo</p>
                    <input className="inputForm ml1" onChange={(e) => setEmail(e.target.value)} type="text" placeholder=""/>
                </div>
                <div className="flex between mt1">
                    <p className="formTitle">Rol</p>
                    <select>
                        <option>Admninistrador</option>
                        <option>Mecanico</option>
                        <option>Ayudante</option>

                    </select>
                </div>
                {formError === '' ? <p></p> : <p className="subsubtitle color-trash">{formError}</p>}

                <div className="center w100 mt2">
                    <button disabled={disabledButton} className="btn-gradient-primary" onClick={() => buildForm()}>{
                    disabledButton ? <IonIcon name='chevron-collapse-outline' className="rotateItem" color='grey' style={{fontSize: '1rem' }}/> : 'Crear usuario'}</button>
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
            headerClassName: 'color-table-header',
            renderCell: (params) => <button onClick={() => router.push('/workshop/clients/view?id=' + params?.value)} className="btn mt05">
                <IonIcon style={{fontSize: '1.5rem', color: "#3662E3"}} name='eye-outline'/>
            </button>
        },

    ];
          
    return <div className="mt1" style={{minHeight: 500, background: 'white', width: '100%'}}>
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
export default UsersWorkshopLayoutPage;