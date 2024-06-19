'use client';
import { getUser, verifyUserWorkshop } from "@/app/api/user/call";
import SideBarComponent from "@/components/panel/sidebar"
import { UserModel } from "@/models/user.model";
import IonIcon from "@reacticons/ionicons"
import { useRouter } from "next/navigation";
import { useState, useEffect, FunctionComponent } from "react";
import '../home/index.css';
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Link from "next/link";
import { InspectionsModel } from "@/models/workshops/inspections.model";
import { getAllInspections } from "@/app/api/workshop/inspections/call";
import { NewTableComponentType } from "../clients/layoutview";
import { ReturnUnifiedStringDateTime } from "@/utils/hooks";
import { ExportJsonCsv } from 'react-export-json-csv';

const LayoutViewInspectionsWorkShop = ( ) => {
    const router = useRouter();
    const [open, setOpen] = useState<boolean>();
    const [user, setUser] = useState<UserModel>(null);
    const [inspections, setInspections] = useState<InspectionsModel[]>([]);
    const [realInspections, setRealInspections] = useState<InspectionsModel[]>([]);
    const [month, selectMonth] = useState<number>(0);
    const [search, setSearch] = useState<string>('');
    const headers = [
        {
            key: 'fullname',
            name: 'Nombre completo',
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
   
    const toUser = async () => {
        const userr = await getUser();
        var ownerid = String(userr?._id);
        if(!verifyUserWorkshop(userr, router, '/workshop/inspections')) {
            return;
        }
        if(userr?.role !== 'owner'){
            ownerid = userr?.owner;
        }
        const inspectionsCast = await getAllInspections(ownerid) ?? [];
        setUser(userr);
        setRealInspections(inspectionsCast.reverse());
        filterMonth(0, inspectionsCast.reverse(), inspectionsCast.reverse());
      }
    useEffect(() => {
        toUser();
    }, []);
    const filterMonth = (month: number, inspectionss: InspectionsModel[], realInspectionss: InspectionsModel[]) => {
        const currentDate = new Date();
        if(month === 0){
            setInspections(realInspectionss ?? []);
            selectMonth(0);
            return;
        }
        const inspectionsFilter: InspectionsModel[] = [];
        realInspections?.map((e) => {
            const date = new Date(e?.createdAt);
            if(currentDate.getFullYear() === date?.getFullYear()){
                if(month === Number(date?.getMonth() +1)){
                    inspectionsFilter.push(e);
                }
            }
        });
        setInspections(inspectionsFilter ?? []);
        selectMonth(month);
    }   
    return <div className="w100">
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
                                <button onClick={() => router.push('/workshop/inspections/create')} className="btn-gradient-secondary mt1"><IonIcon className="mr1" name="search-outline" style={{fontSize: '1.1rem'}}/> <span style={{fontSize: '1rem'}}>Nueva inspección</span></button>
                            </div>
                        </div>
                        <div className="flex w100 mt1">
                            <div className="inputRightIcon">
                                
                                <input style={{border: '1px solid #3662E3'}} onChange={(e) => setSearch(e?.target.value)} placeholder="Busca por nombre de cliente"/>
                                <div>
                                    <IonIcon name="search-outline"/>
                                </div>
                            </div>
                            <ExportJsonCsv fileTitle="inspecciones-stockeado"  className="ml1 selectHomeWorkshopblue flex" headers={headers} items={[...inspections?.map((e, index: number) => {
                                return {
                                    fullname: e?.client?.name + ' ' + e?.client.lastname,
                                    vehicle: e?.vehicle?.brand + ' ' + e?.vehicle?.model,
                                    date: ReturnUnifiedStringDateTime(e?.dateStart),
                                    plate: e?.vehicle?.plate,
                                    state: e.state === 1 ? 'Confirmado' : 'Sin confirmar',
                                }
                            })]}><IonIcon style={{fontSize: '1.2rem', backgroundColor: 'white'}} className="mr1 mt05" name="cloud-download-outline"/> <span style={{marginTop: '.3rem'}}>Exportar</span></ExportJsonCsv >
                            <select value={month} onChange={(e) => filterMonth(Number(e.target.value), inspections, realInspections)} className="selectHomeWorkshopblue ml1">
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
                        <div className="w100">
                        <TableComponent rows={
                            [...inspections?.map((e, index: number) => {
                                return {
                                    id: index,
                                    name: e?.client?.name,
                                    lastname: e?.client?.lastname,
                                    vehicle: e?.vehicle?.brand + ' ' + e?.vehicle?.model,
                                    date: ReturnUnifiedStringDateTime(e?.createdAt),
                                    plate: e?.vehicle?.plate,
                                    state: e?.state,
                                    action: e?._id
                                }
                            })]?.filter((item) => (item?.name + ' ' + item?.lastname).toLowerCase().includes(search?.toLowerCase()))
                        } />
                        </div>
                    </div>
                </div>
            }/>
        }
    </div>
}

const TableComponent: FunctionComponent<NewTableComponentType> = ({rows}) => {
    const columns: GridColDef[] = [
        
        
        {
          field: 'fullName',
          headerName: 'Cliente',
          sortable: false,
          width: 200,
          valueGetter: (value, row) => `${row.name || ''} ${row.lastname || ''}`,
          headerClassName: 'color-table-header',
        },
        { field: 'vehicle', headerName: 'Vehículo', width: 200, headerClassName: 'color-table-header'},
        { field: 'plate', headerName: 'Placa', width: 160, headerClassName: 'color-table-header'},
        { sortable: false, field: 'date', headerName: 'Fecha', width: 200, headerClassName: 'color-table-header'},
        {
            field: 'state',
            headerName: 'Estado',
            sortable: false,
            width: 150,
            align: 'left',
            headerClassName: 'color-table-header',
            renderCell: (params) => <span className={params.value === 1 ? 'btn-confirmed-secondary small-btn m1' : 'btn-disabled-secondary small-btn m1'}>
               {params.value === 1 ? 'Confirmado' : 'Sin confirmar'}
            </span>
        },
        {
            field: 'action',
            headerName: 'Ver/Editar',
            sortable: false,
            filterable: false,
            width: 130,
            align: 'center',
            type:'actions',
            flex: 2,
            headerClassName: 'color-table-header',
            renderCell: (params) => <Link href={'/workshop/inspections/view?id=' + params?.value} className="btn mt05">
                <IonIcon style={{fontSize: '1.5rem', color: "#3662E3"}} name='eye-outline'/>
            </Link>
        },
        
    ];
    
    return <div className="mt1" style={{ background: 'white', width: '100%'}}>
        <DataGrid
            localeText={ValuesDataGridLocale}
            autoHeight

            rowSelection={false}
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

export const ValuesDataGridLocale = {
    columnMenuLabel: 'Menu',
    columnMenuShowColumns: 'Mostrar columna',
    columnMenuManageColumns: 'Editar columna',
    columnMenuFilter: 'Filtros',
    columnMenuHideColumn: 'Esconder columna',
    columnMenuUnsort: 'No filtrar',
    columnMenuSortAsc: 'Filtrar por ascendente',
    columnMenuSortDesc: 'Filtrar por descendente',
    filterOperatorContains: 'Tipo',
    filterOperatorEquals: 'Igual',
    filterOperatorStartsWith: 'Empieza como',
    filterOperatorEndsWith: 'Termina como',
    filterOperatorIs: 'Es',
    filterOperatorNot: 'No es',
    filterOperatorAfter: 'Es despues',
    filterOperatorOnOrAfter: 'Es o no despues',
    filterOperatorBefore: 'Es antes',
    filterOperatorOnOrBefore: 'Es o no antes',
    filterOperatorIsEmpty: 'Es vacio',
    filterOperatorIsNotEmpty: 'No es vacio',
    filterOperatorIsAnyOf: 'Es cualquiera de',
  'filterOperator=': 'Igual',
  'filterOperator!=': 'No igual',
  'filterOperator>': 'Mayor que',
  'filterOperator>=': 'Mayor o igual que',
  'filterOperator<': 'Menor que',
  'filterOperator<=': 'Menor o igual que',
  filterPanelAddFilter: 'Añadir filtro',
  filterPanelRemoveAll: 'Remover todo',
  filterPanelDeleteIconLabel: 'Eliminar',
  filterPanelLogicOperator: 'Operador lógico',
  filterPanelOperator: 'Operador',
  filterPanelOperatorAnd: 'Y',
  filterPanelOperatorOr: 'O',
  filterPanelColumns: 'Columas',
  filterPanelInputLabel: 'Valor',
  filterPanelInputPlaceholder: 'Filtrar valor',
};
export default LayoutViewInspectionsWorkShop;