'use client';
import { getUser, verifyUserWorkshop } from "@/app/api/user/call";
import SideBarComponent from "@/components/panel/sidebar"
import { UserModel } from "@/models/user.model";
import IonIcon from "@reacticons/ionicons"
import { useRouter } from "next/navigation";
import {useRef, useState, useEffect, FunctionComponent } from "react";
import '../home/index.css';
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import './index.css';
import Link from "next/link";
import { ValuesDataGridLocale } from "../inspections/layoutview";
import { OrderWorkshopModel } from "@/models/workshops/orders.model";
import { getAllOrderServices } from "@/app/api/workshop/orders/call";
import { NewTableComponentType } from "../clients/layoutview";
import { ReturnUnifiedStringDateTime } from "@/utils/hooks";
import { ExportJsonCsv } from 'react-export-json-csv';
import generatePDF from 'react-to-pdf';
import dynamic from "next/dynamic";
const ViewPDFOrderPage = dynamic(
    () => import('./pdf/component'),
    { ssr: false }
)
export function getOrderServiceTextState (state: string){
    switch(state){
        case 'pending': return 'Pendiente'; break;
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
    const targetRef = useRef();
    const [selectIndexPdf, setSelectedIndexPdf] = useState<number>(0);

    const headers = [
        {
            key: 'ammount',
            name: 'Monto total',
        },
        {
            key: 'vehicle',
            name: 'Vehículo',
        },
        {
            key: 'date',
            name: 'Fecha'
        },
        {
            key: 'plate',
            name: 'Placa',
        },
        {
            key: 'state',
            name: 'Estado'
        }
    ];
    const router = useRouter();
    const [open, setOpen] = useState<boolean>();
    const [user, setUser] = useState<UserModel>(null);
    const [realOrders, setRealOrders] = useState<OrderWorkshopModel[]>([]);
    const [orders, setOrders] = useState<OrderWorkshopModel[]>([]);
    const [month, selectMonth] = useState<number>(0);
    const [search, setSearch] = useState<string>('');
    const toUser = async () => {
        const userr = await getUser();
        var ownerid = String(userr?._id);
        if(!verifyUserWorkshop(userr, router, '/workshop/orders')) {
            return;
        }
        if(userr?.role !== 'owner'){
            ownerid = userr?.owner;
        }
        const response = await getAllOrderServices(ownerid);
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
            setOrders(realOrderss.reverse() ?? []);
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
        setOrders(ordersFilter.reverse() ?? []);
        selectMonth(month);
    }  
    
    return <div>
        <div style={{transform: 'translateX(-1000%)', position: 'absolute', width: '100vw'}}>
            <div ref={targetRef}> <ViewPDFOrderPage indexLength={realOrders?.length} index={selectIndexPdf}   tasks={orders[selectIndexPdf]?.tasks} user={user} inspection={orders[selectIndexPdf]}/> </div>
        </div>
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
                                
                                <input style={{border: '1px solid #3662E3'}} onChange={(e) => setSearch(e?.target?.value)} placeholder="Busca por vehículo"/>
                                <div>
                                    <IonIcon name="search-outline"/>
                                </div>
                            </div>
                            <ExportJsonCsv fileTitle="ordenes-stockeado"  className="ml1 selectHomeWorkshopblue flex" headers={headers} items={[
                                ...orders?.map((e, index: number) => {
                                    return {
                                        ammount: 's/. ' + (e?.totalPrice === '' ? '0' : e?.totalPrice),
                                        vehicle: e?.vehicle?.brand + ' ' + e?.vehicle?.model,
                                        date: ReturnUnifiedStringDateTime(e?.dateStart),
                                        plate: e?.vehicle?.plate,
                                        state: getOrderServiceTextState(e?.state),
                                    };
                                })
                            ]}><IonIcon style={{fontSize: '1.2rem', backgroundColor: 'white'}} className="mr1 mt05" name="cloud-download-outline"/> <span style={{marginTop: '.3rem'}}>Exportar</span></ExportJsonCsv >
                                                    
                            <select value={month} onChange={(e) => filterMonth(Number(e.target.value), realOrders)} className="selectHomeWorkshopblue ml1">
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
                        <TableComponent setSelectedIndexPdf={setSelectedIndexPdf} rows={[
                            ...orders?.map((e, index: number) => {
                                return {
                                    id: index,
                                    ammount: 's/. ' + (e?.totalPrice === '' ? '0' : e?.totalPrice),
                                    vehicle: e?.vehicle?.brand + ' ' + e?.vehicle?.model,
                                    date: ReturnUnifiedStringDateTime(e?.createdAt),
                                    plate: e?.vehicle?.plate,
                                    state: e?.state,
                                    action: e?._id
                                };
                            })
                        ]?.filter((item) => (item?.vehicle).toLowerCase().includes(search?.toLowerCase()))} targetRef={targetRef}/>
                    </div>
                </div>
            }/>
        }
    </div>
}


const TableComponent: FunctionComponent<NewTableComponentType> = ({rows, targetRef, setSelectedIndexPdf}) => {
    const columns: GridColDef[] = [ 
        { field: 'vehicle', headerName: 'Vehículo', width: 200, headerClassName: 'color-table-header'},
        { field: 'plate', headerName: 'Placa', width: 160, headerClassName: 'color-table-header'},
        { field: 'ammount', headerName: 'Monto', width: 200, headerClassName: 'color-table-header'},
        { sortable: false, field: 'date', headerName: 'Fecha', width: 200, headerClassName: 'color-table-header'},
        {
            field: 'state',
            headerName: 'Estado',
            sortable: false,
            width: 150,
            align: 'left',
            headerClassName: 'color-table-header',
            renderCell: (params) => <span className={getOrderServiceClassNameState(params.value) + ' br05 m1'}>
                {getOrderServiceTextState(params.value)}
            </span>
        },
        {
            field: 'action',
            headerName: 'Ver/Editar',
            sortable: false,
            filterable: false,
            minWidth: 200,
            type: 'actions',
            align: 'center',
            flex: 2,
            headerClassName: 'color-table-header',
            renderCell: (params) => <div className="flex">
                <Link href={'/workshop/orders/view?id='+ params?.value} className="btn mt05">
                    <IonIcon style={{fontSize: '1.5rem', color: "#3662E3"}} name='eye-outline'/>
                </Link>
                <button className="btn" onClick={() => {
                    setSelectedIndexPdf(params.id);
                    setTimeout(() => {
                        generatePDF(targetRef, {filename: 'order.pdf'})

                    }, 1500);

                }}>
                    <svg  className="ml1" width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H19C19.2652 3 19.5196 3.10536 19.7071 3.29289L26.7071 10.2929C26.8946 10.4804 27 10.7348 27 11V16C27 16.5523 26.5523 17 26 17C25.4477 17 25 16.5523 25 16V11.4142L18.5858 5L7 5L7 16C7 16.5523 6.55228 17 6 17C5.44772 17 5 16.5523 5 16V5C5 4.46957 5.21071 3.96086 5.58579 3.58579Z" fill="#E15147"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M19 3C19.5523 3 20 3.44772 20 4V10H26C26.5523 10 27 10.4477 27 11C27 11.5523 26.5523 12 26 12H19C18.4477 12 18 11.5523 18 11V4C18 3.44772 18.4477 3 19 3Z" fill="#E15147"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5 21C5 20.4477 5.44772 20 6 20H8C8.79565 20 9.55871 20.3161 10.1213 20.8787C10.6839 21.4413 11 22.2043 11 23C11 23.7957 10.6839 24.5587 10.1213 25.1213C9.55871 25.6839 8.79565 26 8 26H7V27C7 27.5523 6.55228 28 6 28C5.44772 28 5 27.5523 5 27V21ZM7 24H8C8.26522 24 8.51957 23.8946 8.70711 23.7071C8.89464 23.5196 9 23.2652 9 23C9 22.7348 8.89464 22.4804 8.70711 22.2929C8.51957 22.1054 8.26522 22 8 22H7V24Z" fill="#E15147"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M22.5 21C22.5 20.4477 22.9477 20 23.5 20H27C27.5523 20 28 20.4477 28 21C28 21.5523 27.5523 22 27 22H24.5V27C24.5 27.5523 24.0523 28 23.5 28C22.9477 28 22.5 27.5523 22.5 27V21Z" fill="#E15147"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M22.5 24.5C22.5 23.9477 22.9477 23.5 23.5 23.5H26.5C27.0523 23.5 27.5 23.9477 27.5 24.5C27.5 25.0523 27.0523 25.5 26.5 25.5H23.5C22.9477 25.5 22.5 25.0523 22.5 24.5Z" fill="#E15147"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.25 21C13.25 20.4477 13.6977 20 14.25 20H16C17.0609 20 18.0783 20.4214 18.8284 21.1716C19.5786 21.9217 20 22.9391 20 24C20 25.0609 19.5786 26.0783 18.8284 26.8284C18.0783 27.5786 17.0609 28 16 28H14.25C13.6977 28 13.25 27.5523 13.25 27V21ZM15.25 22V26H16C16.5304 26 17.0391 25.7893 17.4142 25.4142C17.7893 25.0391 18 24.5304 18 24C18 23.4696 17.7893 22.9609 17.4142 22.5858C17.0391 22.2107 16.5304 22 16 22H15.25Z" fill="#E15147"/>
                    </svg>
                </button>
            </div>
        },
        
    ];
       
    return <div className="mt1" style={{height: '100%', background: 'white', width: '100%'}}>
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