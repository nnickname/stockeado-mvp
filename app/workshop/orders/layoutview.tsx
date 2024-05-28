'use client';
import { getUser } from "@/app/api/user/call";
import SideBarComponent from "@/components/panel/sidebar"
import { UserModel } from "@/models/user.model";
import IonIcon from "@reacticons/ionicons"
import { useRouter } from "next/navigation";
import { useState, useEffect, FunctionComponent } from "react";
import '../home/index.css';
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import './index.css';
import Link from "next/link";
import { ValuesDataGridLocale } from "../inspections/layoutview";
import { OrderWorkshopModel } from "@/models/workshops/orders.model";
import { getAllOrderServices } from "@/app/api/workshop/orders/call";
import { NewTableComponentType } from "../clients/layoutview";
export function getOrderServiceTextState (state: string){
    switch(state){
        case 'pending': return 'Sin confirmar'; break;
        case 'confirmed': return 'Confirmado'; break;
        case 'payed': return 'Pagado'; break;
        case 'process': return 'En proceso'; break;
        case 'deliveried': return 'Entregado'; break;
    }
}
export function getOrderServiceClassNameState (state: string){
    switch(state){
        case 'pending': return 'btn-disabled-secondary'; break;
        case 'confirmed': return 'btn-confirmed-secondary'; break;
        case 'payed': return 'btn-payed'; break;
        case 'process': return 'btn-process'; break;
        case 'deliveried': return 'btn-deliveried'; break;
    }
}
const LayoutViewOrdersWorkShop = ( ) => {
    const router = useRouter();
    const [open, setOpen] = useState<boolean>();
    const [user, setUser] = useState<UserModel>(null);
    const [realOrders, setRealOrders] = useState<OrderWorkshopModel[]>([]);
    const [orders, setOrders] = useState<OrderWorkshopModel[]>([]);
    const [month, selectMonth] = useState<number>(0);
    const [search, setSearch] = useState<string>('');
    const toUser = async () => {
        const userr = await getUser();
        if(userr === undefined || userr === null){
              router.push('/');
        }
        if(userr?.type !== 'workshop'){
            router.push('/provider/home');
        }
        const response = await getAllOrderServices(userr?._id);
        filterMonth(0, response);
        setRealOrders(response ?? []);
        setUser(userr);
      }
    useEffect(() => {
        toUser();
    }, []);
    const filterMonth = (month: number, realOrderss: OrderWorkshopModel[]) => {
        const currentDate = new Date();
        if(month === 0){
            setOrders(realOrderss ?? []);
            selectMonth(0);
            return;
        }
        const ordersFilter: OrderWorkshopModel[] = [];
        realOrderss?.map((e) => {
            const date = new Date(e?.createdAt);
            if(currentDate.getFullYear() === date?.getFullYear()){
                if(month === Number(date?.getMonth() +1)){
                    ordersFilter.push(e);
                }
            }
        });
        setOrders(ordersFilter ?? []);
        selectMonth(month);
    }  
    
    return <div>
        {user === null ? <IonIcon name='chevron-collapse-outline' className="rotateItem" color='#1366D9' style={{fontSize: '1.5rem', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}/> :
            <SideBarComponent user={user} route='/workshop/orders' frameContennt={
                <div className="">
                    <h1 className="headerSideBar"> Órdenes de servicio</h1>
                    <div className="p1">
                        <div className="flex between">
                            <div>
                                <h1 className="subtitle mt2">Órdenes de servicio recientes</h1>
                            </div>
                            <div>
                                <button onClick={() => router.push('/workshop/orders/create')} className="btn-gradient-secondary mt1"><IonIcon className="mr1" name="bag-outline" style={{fontSize: '1.1rem'}}/> <span style={{fontSize: '1rem'}}>Nuevo servicio</span></button>
                            </div>
                        </div>
                        <div className="flex w100 mt1">
                            <div className="inputRightIcon">
                                
                                <input onChange={(e) => setSearch(e?.target?.value)} placeholder="Busca por vehículo"/>
                                <div>
                                    <IonIcon name="search-outline"/>
                                </div>
                            </div>
                            <select value={month} onChange={(e) => filterMonth(Number(e.target.value), realOrders)} className="selectHomeWorkshop ml1">
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
                        <TableComponent rows={[
                            ...orders?.map((e, index: number) => {
                                return {
                                    id: index,
                                    ammount: 's/. ' + (e?.totalPrice === '' ? '0' : e?.totalPrice),
                                    vehicle: e?.vehicle?.brand + ' ' + e?.vehicle?.model,
                                    date: e?.dateStart,
                                    plate: e?.vehicle?.plate,
                                    state: e?.state,
                                    action: e?._id
                                };
                            })
                        ]?.filter((item) => (item?.vehicle).toLowerCase().includes(search?.toLowerCase()))
                        }/>
                    </div>
                </div>
            }/>
        }
    </div>
}

const TableComponent: FunctionComponent<NewTableComponentType> = ({rows}) => {
    const columns: GridColDef[] = [ 
        { field: 'vehicle', headerName: 'Vehículo', width: 200, headerClassName: 'color-table-header'},
        { field: 'plate', headerName: 'Placa', width: 160, headerClassName: 'color-table-header'},
        { field: 'ammount', headerName: 'Monto', width: 200, headerClassName: 'color-table-header'},
        { sortable: false, field: 'date', headerName: 'Fecha', width: 150, headerClassName: 'color-table-header'},
        {
            field: 'state',
            headerName: 'Estado',
            sortable: false,
            width: 150,
            align: 'left',
            headerClassName: 'color-table-header',
            renderCell: (params) => <div className={getOrderServiceClassNameState(params.value) + ' w100 br0'}>
                {getOrderServiceTextState(params.value)}
            </div>
        },
        {
            field: 'action',
            headerName: 'Ver/Editar',
            sortable: false,
            filterable: false,
            width: 130,
            type: 'actions',
            align: 'center',
            headerClassName: 'color-table-header',
            renderCell: (params) => <Link href={'/workshop/orders/view?id='+ params?.value} className="btn mt05">
                <IonIcon style={{fontSize: '1.5rem', color: "#3662E3"}} name='eye-outline'/>
            </Link>
        },
        
    ];
       
    return <div className="mt1" style={{minHeight: 500, height: '100%', background: 'white', width: '100%'}}>
        <DataGrid
        localeText={ValuesDataGridLocale}
        autoHeight
        rows={rows}
        rowSelection={false}
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
export default LayoutViewOrdersWorkShop;