'use client';
import { getUser, verifyUserWorkshop } from "@/app/api/user/call";
import SideBarComponent from "@/components/panel/sidebar"
import { UserModel } from "@/models/user.model";
import IonIcon from "@reacticons/ionicons"
import { useRouter } from "next/navigation";
import { useState, useEffect, FunctionComponent, useRef} from "react";
import '../home/index.css';
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Link from "next/link";
import { InspectionsModel } from "@/models/workshops/inspections.model";
import { getAllInspections } from "@/app/api/workshop/inspections/call";
import { NewTableComponentType } from "../clients/layoutview";
import { ReturnUnifiedStringDateTime } from "@/utils/hooks";
import { ExportJsonCsv } from 'react-export-json-csv';
import ViewPDFPageInspection from "./pdf/component";
import generatePDF from "react-to-pdf";
import LoadPage from "@/components/general/loadPage";
import { getApiImage } from "@/app/api/images/call";

const LayoutViewInspectionsWorkShop = ( ) => {
    const targetRef = useRef();
    const [selectIndexPdf, setSelectedIndexPdf] = useState<number>(0);
    const [image1, setImage1] = useState('');
    const [image2, setImage2] = useState('');
    const [image3, setImage3] = useState('');
    const [image4, setImage4] = useState('');
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
        <div style={{transform: 'translateX(-99999%)', position: 'absolute', width: '100%', minWidth: '1500px'}}>
            <div ref={targetRef}> <ViewPDFPageInspection image1={image1} image2={image2} image3={image3} image4={image4} indexLength={realInspections?.length} index={selectIndexPdf}  user={user} inspection={inspections[selectIndexPdf]}/> </div>
        </div>
        {user === null ? <LoadPage/> :
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
                        <TableComponent setImage1={setImage1} setImage2={setImage2} setImage3={setImage3} setImage4={setImage4} targetRef={targetRef} setSelectedIndexPdf={setSelectedIndexPdf} rows={
                            [...inspections?.map((e, index: number) => {
                                return {
                                    id: index,
                                    name: e?.client?.name,
                                    lastname: e?.client?.lastname,
                                    vehicle: e?.vehicle?.brand + ' ' + e?.vehicle?.model,
                                    date: ReturnUnifiedStringDateTime(e?.createdAt),
                                    plate: e?.vehicle?.plate,
                                    state: e?.state,
                                    action: e?._id,
                                    imageList: e?.imageList
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
async function getImageData(id: any){
    return id?.data;
}
const TableComponent: FunctionComponent<NewTableComponentType> = ({rows, targetRef, setSelectedIndexPdf, setImage1, setImage2, setImage3, setImage4}) => {
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
            minWidth: 200,
            align: 'center',
            type:'actions',
            flex: 2,
            headerClassName: 'color-table-header',
            renderCell: (params) => 
            <div>
                <Link href={'/workshop/inspections/view?id=' + params?.value} className="btn mt05">
                    <IonIcon style={{fontSize: '1.5rem', color: "#3662E3"}} name='eye-outline'/>
                </Link>
                <button className="btn" onClick={async () => {
                    setSelectedIndexPdf(params.id);
                    setImage1(await getImageData(params.row?.imageList[0] ?? ''));
                    setImage2(await getImageData(params.row?.imageList[1] ?? ''));
                    setImage3(await getImageData(params.row?.imageList[2] ?? ''));
                    setImage4(await getImageData(params.row?.imageList[3] ?? ''));
                    setTimeout(() => {
                        generatePDF(targetRef, {filename: 'inspection.pdf'});

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