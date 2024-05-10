'use client';
import { getUser } from "@/app/api/userr/call";
import SideBarComponent from "@/components/panel/sidebar"
import { UserModel } from "@/models/user.model";
import IonIcon from "@reacticons/ionicons"
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import '../home/index.css';
import { DataGrid, GridColDef } from "@mui/x-data-grid";
const LayoutViewInspectionsWorkShop = ( ) => {
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
            <SideBarComponent user={user} route='/workshop/inspections' frameContennt={
                <div className="">
                    <h1 className="headerSideBar"> Inspecciones</h1>
                    <div className="p1">
                        <div className="flex between">
                            <div>
                                <h1 className="subtitle mt2">Inspecciones recientes</h1>
                            </div>
                            <div>
                                <button onClick={() => router.push('/workshop/inspections/create')} className="btn-gradient-secondary mt1"><IonIcon className="" name="search-outline" style={{fontSize: '1.1rem'}}/> <span style={{fontSize: '1rem'}}>Nueva inspección</span></button>
                            </div>
                        </div>
                        <div className="flex w100 mt1">
                            <div className="inputRightIcon">
                                
                                <input placeholder="Busca por cliente, vehículo, placa o fecha"/>
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
        
        
        {
          field: 'fullName',
          headerName: 'Cliente',
          sortable: false,
          width: 160,
          valueGetter: (value, row) => `${row.name || ''} ${row.lastname || ''}`,
          headerClassName: 'color-table-header'
        },
        { field: 'vehicle', headerName: 'Vehículo', width: 200, headerClassName: 'color-table-header'},
        { field: 'plate', headerName: 'Placa', width: 160, headerClassName: 'color-table-header'},
        { sortable: false, field: 'date', headerName: 'Fecha', width: 200, headerClassName: 'color-table-header'},
        {
            field: 'state',
            headerName: 'Estado',
            sortable: false,
            width: 130,
            align: 'left',
            headerClassName: 'color-table-header',
            renderCell: (params) => <div>
                <button className={params.value === 0 ? 'btn-confirmed-secondary small-btn' : 'btn-disabled-secondary small-btn'}>{params.value === 0 ? 'Confirmado' : 'Sin confirmar'}</button>
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
            renderCell: (params) => <button className="btn mt05">
                <IonIcon style={{fontSize: '1.5rem', color: "#3662E3"}} name='eye-outline'/>
            </button>
        },
        {
            field: 'action1',
            headerName: 'Descargar',
            sortable: false,
            filterable: false,
            width: 130,
            align: 'left',
            headerClassName: 'color-table-header',
            renderCell: (params) => <button onClick={() => {}} className="btn mt05">
                <IonIcon style={{fontSize: '1.5rem', color: "#E15147"}} name='cloud-download-outline'/>
            </button>
        },
    ];
    const rows = [
        {
            id: 0,
            name: 'Jorge',
            lastname: 'Perez',
            vehicle: 'BMW 325i',
            date: '12-04-24',
            plate: 'C5S-287',
            state: 1,
            action: ''
        },
        {
            id: 1,
            name: 'Jorge',
            lastname: 'Perez',
            vehicle: 'BMW 325i',
            date: '12-04-24',
            plate: 'C5S-287',
            state: 1,
            action: ''
        },
        {
            id: 2,
            name: 'Jorge',
            lastname: 'Perez',
            vehicle: 'BMW 325i',
            date: '12-04-24',
            plate: 'C5S-287',
            state: 1,
            action: ''
        },
        {
            id: 3,
            name: 'Jorge',
            lastname: 'Perez',
            vehicle: 'BMW 325i',
            date: '12-04-24',
            plate: 'C5S-287',
            state: 0,
            action: ''
        },
        {
            id: 4,
            name: 'Jorge',
            lastname: 'Perez',
            vehicle: 'BMW 325i',
            date: '12-04-24',
            plate: 'C5S-287',
            state: 1,
            action: ''
        }
    ];      
    return <div className="mt1" style={{minHeight: 500, width: '100%'}}>
        <DataGrid
        
        autoPageSize={true}
        autoHeight={true}
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
export default LayoutViewInspectionsWorkShop;