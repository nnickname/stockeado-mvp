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
import { ValuesDataGridLocale } from "../inspections/layoutview";
import { toast } from "react-toastify";
import { createWorkShopUser, deleteWorkShopUser, getAllWorkShopUsers, getOneWorkShopOwner } from "@/app/api/workshop/users/call";
import './index.css';
import { ReturnUnifiedStringDateTime } from "@/utils/hooks";
export function getUserWorkshopRoleName (state: string){
    switch(state){
        case 'administrator': return 'Administrador'; break;
        case 'worker': return 'Mecanico'; break;
        case 'helper': return 'Ayudante'; break;
    }
}
export function getUserWorkshopRoleClassname (state: string){
    switch(state){
        case 'administrator': return 'btn-role-administrator'; break;
        case 'worker': return 'btn-role-worker'; break;
        case 'helper': return 'btn-role-helper'; break;
        
    }
}
const UsersWorkshopLayoutPage = ( ) => {
    const router = useRouter();
    const [open, setOpen] = useState<boolean>();
    const [user, setUser] = useState<UserModel>(null);
    const [realUsers, setRealUsers] = useState<UserModel[]>(null);
    const [users, setUsers] = useState<UserModel[]>(null);

    const [search, setSearch] = useState("");
    const [role, setRole] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [lastname, setLastName] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [formError, setErrorForm] = useState<string>('');
    const [month, selectMonth] = useState<number>(0);
    const [disabledButton, setDisabledButton] = useState<boolean>(false);
    const toUser = async () => {
        const userr = await getUser();
        var ownerid = userr?._id;
        if(userr === undefined || userr === null){
            router.push('/');
            return;
        }
        if(userr?.type !== 'workshop'){
            router.push('/provider/home');
            return;
        }
        if(userr?.role === 'owner' || userr?.role === 'administrator'){
            console.log('Configure')
        } else {
            router.push('/workshop/home');
            return;
        }
        if(userr?.role !== 'owner'){
            ownerid = userr?.owner;
        }
        const userss = await getAllWorkShopUsers(ownerid) ?? [];
        setUser(userr);
        setRealUsers(userss?.reverse());
        filterMonth(0, userss);
    }
    const buildForm = async() => {
        if(name !== '' && lastname !== '' && password !== '' && email !== '' && role !== ''){
            const body = {
                name,
                lastname: lastname,
                nameShop: user?.nameShop,
                phone: '',
                image: user?.image,
                imageLogo: user?.imageLogo,
                direction: user?.direction,
                password,
                email,
                visits: 0,
                type: 'workshop',
                accessories: user?.accesories,
                owner: String(user?._id),
                role
              }
            setDisabledButton(true);
            const response = await createWorkShopUser(body);
            if(response){
                toast.success('Usuario añadido')
                const usersss = await getAllWorkShopUsers(String(user?._id)) ?? [];
                setUsers(usersss?.reverse());
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
    

    const filterMonth = (month: number, realUserss: UserModel[]) => {
        const currentDate = new Date();
        if(month === 0){
            setUsers(realUserss ?? []);
            selectMonth(0);
            return;
        }
        const usersFilter: UserModel[] = [];
        realUserss?.map((e) => {
            const date = new Date(e?.createdAt);
            if(currentDate.getFullYear() === date?.getFullYear()){
                if(month === Number(date?.getMonth() +1)){
                    usersFilter.push(e);
                }
            }
        });
        setUsers(realUserss ?? []);
        selectMonth(month);
    }  
    
    return <div>
        {user === null ? <IonIcon name='chevron-collapse-outline' className="rotateItem" color='#1366D9' style={{fontSize: '1.5rem', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}/> :
            <SideBarComponent user={user} route='/workshop/users' frameContennt={
                <div>
                    <h1 className="headerSideBar"> Usuarios</h1>
                    <div className="p1">
                        <div className="flex between">
                            <div>
                                <p className="subtitle mt2">Usuarios recientes</p>
                            </div>
                            <div>
                                <button onClick={() => setOpen(true)} className="btn-gradient-secondary mt1"><IonIcon className="mr1" name="person-add-outline" style={{fontSize: '1.1rem'}}/> <span style={{fontSize: '1rem'}}>Nuevo usuario</span></button>
                            </div>
                        </div>
                        
                        <div className="flex w100 mt1">
                            <div className="inputRightIcon">
                                
                                <input style={{border: '1px solid #3662E3'}} onChange={(e) => setSearch(e?.target?.value)} placeholder="Busca por nombre de usuario"/>
                                <div>
                                    <IonIcon name="search-outline"/>
                                </div>
                            </div>
                            <button className="ml1 selectHomeWorkshopblue flex"><IonIcon style={{fontSize: '1.2rem', backgroundColor: 'white'}} className="mr1 mt05" name="cloud-download-outline"/> <span style={{marginTop: '.3rem'}}>Exportar</span></button>

                            <select value={month} onChange={(e) => filterMonth(Number(e.target.value), realUsers)} className="selectHomeWorkshopblue ml1">
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
                            [...users?.map((e, index: number) => {
                                
                                return {
                                    id: index,
                                    name: e?.name,
                                    lastname: e?.lastname,
                                    email: e?.email,
                                    createdat: ReturnUnifiedStringDateTime(e?.createdAt),
                                    role: e?.role,
                                    action: e?._id,
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
                <h1 className="title">Nuevo usuario</h1>
                <h2 className="subtitle mt1">Usuario #{users?.length + 1}</h2>
                <div className="flex between mt1">
                    <p className="formTitle">Nombre</p>
                    <input className="inputForm" onChange={(e) => setName(e.target.value)} type="text" placeholder=""/>
                </div>
                <div className="flex between mt1">
                    <p className="formTitle">Apellido</p>
                    <input className="inputForm ml1" onChange={(e) => setLastName(e.target.value)} type="text" placeholder=""/>
                </div>
                <div className="flex between mt1">
                    <p className="formTitle">Correo</p>
                    <input className="inputForm ml1" onChange={(e) => setEmail(e.target.value)} type="text" placeholder=""/>
                </div>
                <div className="flex between mt1">
                    <p className="formTitle">Contraseña</p>
                    <input className="inputForm ml1" type='password' onChange={(e) => setPassword(e.target.value)} placeholder=""/>
                </div>
                <div className="flex between mt1">
                    <p className="formTitle">Rol</p>
                    <select onChange={(e) => setRole(e?.target?.value)} className="inputForm ml1">
                        <option value="">Seleccionar</option>
                        <option value="administrator">Administrador</option>
                        <option value="worker">Mecanico</option>
                        <option value="helper">Ayudante</option>

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
          width: 200,
          valueGetter: (value, row) => `${row.name || ''} ${row.lastname || ''}`,
          headerClassName: 'color-table-header'
        },
        { field: 'email', headerName: 'Correo', width: 200, headerClassName: 'color-table-header'},
        { field: 'createdat', headerName: 'Fecha de creación', width: 250, headerClassName: 'color-table-header'},
        {
            field: 'role',
            headerName: 'Rol',
            sortable: false,
            width: 200,
            align: 'left',
            headerClassName: 'color-table-header',
            renderCell: (params) => <span className={getUserWorkshopRoleClassname(params?.value) + ' m1 small-btn'}>
               {getUserWorkshopRoleName(params?.value)}
            </span>
        },
        {
            field: 'action',
            headerName: 'Eliminar',
            sortable: false,
            width: 160,
            type: 'actions',
            align: 'center',
            headerClassName: 'color-table-header',
            renderCell: (params) => <button onClick={async () => {
                toast.warning('Estamos eliminando tu usuario');
                const response = await deleteWorkShopUser(String(params.value));
                if(response){
                    window.location.reload();
                }
            }} className="btn mt05">
                <IonIcon style={{fontSize: '1.2rem', color: "tomato"}} name='trash-outline'/>
            </button>
        },

    ];
          
    return <div className="mt1" style={{ background: 'white', width: '100%'}}>
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