'use client';
import { getUser } from "@/app/api/userr/call";
import SideBarComponent from "@/components/panel/sidebar"
import { UserModel } from "@/models/user.model";
import IonIcon from "@reacticons/ionicons"
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import '../home/index.css';
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import './index.css';
import Link from "next/link";
function getOrderServiceTextState (state: string){
    switch(state){
        case 'pending': return 'Sin confirmar'; break;
        case 'confirmed': return 'Confirmado'; break;
        case 'payed': return 'Pagado'; break;
        case 'process': return 'En proceso'; break;
        case 'deliveried': return 'Entregado'; break;
    }
}
function getOrderServiceClassNameState (state: string){
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
    }, []);
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
            }/>
        }
    </div>
}
function getTextState(value: number){
    if(value === 0){
        return 'Sin confirmar';
    } return 'Confirmado';
}
const TableComponent = () => {
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
            align: 'left',
            headerClassName: 'color-table-header',
            renderCell: (params) => <Link href='/workshop/order/view' className="btn mt05">
                <IonIcon style={{fontSize: '1.5rem', color: "#3662E3"}} name='eye-outline'/>
            </Link>
        },
        
    ];
    const rows = [
        {
            id: 0,
            ammount: 's/. 1300',
            vehicle: 'BMW 325i',
            date: '12-04-24',
            plate: 'C5S-287',
            state: 'pending',
            action: ''
        },
        {
            id: 1,
            ammount: 's/. 1300',
            vehicle: 'BMW 325i',
            date: '12-04-24',
            plate: 'C5S-287',
            state: 'confirmed',
            action: ''
        },
        {
            id: 2,
            ammount: 's/. 1300',
            vehicle: 'BMW 325i',
            date: '12-04-24',
            plate: 'C5S-287',
            state: 'payed',
            action: ''
        },
        {
            id: 3,
            ammount: 's/. 1300',
            vehicle: 'BMW 325i',
            date: '12-04-24',
            plate: 'C5S-287',
            state: 'process',
            action: ''
        },
        {
            id: 4,
            ammount: 's/. 1300',
            vehicle: 'BMW 325i',
            date: '12-04-24',
            plate: 'C5S-287',
            state: 'deliveried',
            action: ''
        },
        
    ];      
    return <div className="mt1" style={{minHeight: 500, width: '100%'}}>
        <DataGrid
        
        autoPageSize={true}
        autoHeight={true}
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