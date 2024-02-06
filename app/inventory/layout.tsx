'use client';

import InventoryResume from "@/components/panel/inventoryresume";
import {
  MaterialReactTable,
  createMRTColumnHelper,
  useMaterialReactTable,
} from 'material-react-table';
import { Box, Button } from '@mui/material';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { jsPDF } from 'jspdf'; //or use your library of choice here
import autoTable from 'jspdf-autotable';
import SideBarComponent from "@/components/panel/sidebar";;
import { data } from "./makeData";
import IonIcon from "@reacticons/ionicons";
import { useState } from "react";
import Modal from "react-responsive-modal";
import 'react-responsive-modal/styles.css';
import { TypeBrands, TypeCategories } from "@/models/brands";
import Link from "next/link";



const columnHelper = createMRTColumnHelper();
  
const columns = [
    columnHelper.accessor('id', {
      header: 'SKU',
    }),
    columnHelper.accessor('firstName', {
      header: 'Nombre producto',
    }),
    columnHelper.accessor('lastName', {
      header: 'Cantidad',
    }),
    columnHelper.accessor('company', {
      header: 'Ventas',
    }),
    columnHelper.accessor('city', {
      header: 'Disponibilidad',
    }),
    columnHelper.accessor('country', {
      header: 'Editar producto',
    }),
  ];
  
const Example = () => {
   const [open, setOpen] = useState<boolean>(false);

    const handleExportRows = (rows) => {
      const doc = new jsPDF();
      const tableData = rows.map((row) => Object.values(row.original));
      const tableHeaders = columns.map((c) => c.header);
  
      autoTable(doc, {
        head: [tableHeaders],
        body: tableData,
      });
  
      doc.save('document.pdf');
    };
  
    const table = useMaterialReactTable({
      columns,
      data,
      enableRowSelection: true,
      columnFilterDisplayMode: 'popover',
      paginationDisplayMode: 'pages',
      positionToolbarAlertBanner: 'bottom',
      renderTopToolbarCustomActions: ({ table }) => (
        <Box
          sx={{
            display: 'flex',
            gap: '8px',
            padding: '0px',
            flexWrap: 'wrap',
          }}
        >
          <Button
            disabled={table.getPrePaginationRowModel().rows.length === 0}
            //export all rows, including from the next page, (still respects filtering and sorting)
            onClick={() =>
              setOpen(true)
            }
            startIcon={<IonIcon name="add-outline" />}
          >
            Cargar inventario
          </Button>
          <Button
            disabled={table.getRowModel().rows.length === 0}
            //export all rows as seen on the screen (respects pagination, sorting, filtering, etc.)
            onClick={() => handleExportRows(table.getRowModel().rows)}
            startIcon={<FileDownloadIcon />}
          >
            Descargar
          </Button>
          <Button
            disabled={
              !table.getIsSomeRowsSelected() && !table.getIsAllRowsSelected()
            }
            //only export selected rows
            onClick={() => handleExportRows(table.getSelectedRowModel().rows)}
            startIcon={<FileDownloadIcon />}
          >
            Exportar seleccionado
          </Button>
        </Box>
      ),
    });
  
    return <>
      <MaterialReactTable   table={table} />
      <Modal closeIcon={<IonIcon name="close"/>} styles={{
        modal : {borderRadius: '1rem', minWidth: '300px', padding: '0rem'},
        closeIcon: {color: 'white !important'},
        overlay: {backgroundColor: 'rgba(220, 217, 217, 0.5)'}
      }}  open={open} center onClose={() => setOpen(false) }>
        <p style={{background: 'linear-gradient(89deg, var(--token-dc60c65c-2692-4b09-8d77-49a86f7aedee, rgb(24, 36, 61)) /* {"name":"Azul prinicipal"} */ 0%, var(--token-1632e6e1-d1e5-427f-b435-20cb1e67f695, rgb(54, 98, 227)) /* {"name":"Azul claro"} */ 123.5068681091516%)', width: '100%', padding: '1rem', color:'white'}}>Cargar Inventario</p>
        <div style={{margin: '2rem'}}>
          <p style={{color: 'grey'}}>Carga tu inventario desde un .csv <Link style={{fontSize: '1rem', color: '#3662E3', marginLeft: '.5rem'}} href="">Convertir<IonIcon name='open-outline'/></Link></p>
          <input style={{margin: '1rem'}} placeholder="Upload" type="file"/>
          <div style={{width: '100%', textAlign: 'center'}}>
            <p style={{color: 'grey'}}> o cargalo manualmente</p>
            <div style={{width: '1px', height: '33px', background: 'rgba(10, 10, 10, 0.2)', marginRight: 'auto', marginLeft: 'auto'}}></div>

            <div style={{marginTop: '4rem'}}></div>
            <label htmlFor="image" style={{width: '100%',
              padding: '4rem',
              margin: '0px',
              background: 'rgba(195, 195, 195, 0.5)', cursor: 'pointer'}}>Subir Imagen</label>

            <input id="image" type='file' placeholder='Subir archivo' style={{
              visibility: 'hidden', display: 'none'
              
            }}/>
            <div style={{marginTop: '4rem'}}>
              <input placeholder="Nombre de producto" className="border-stroke dark:text-body-color-dark dark:shadow-two  w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none" style={{background: 'transparent'}}></input>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
              <input placeholder="SKU"  className="border-stroke dark:text-body-color-dark dark:shadow-two  w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none" style={{background: 'transparent'}}></input>
              <input placeholder="Cantidad" type='number' className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border  px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none" style={{background: 'transparent'}}></input>
            </div>
            <select className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border  px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none" style={{background: 'transparent'}}>
              <option value={-1}>Marca</option>

              {TypeBrands.map((e, index) => <option value={index+1}>{e}</option>)}

            </select>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
              <input placeholder="Precio"  className="border-stroke dark:text-body-color-dark dark:shadow-two  w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none" style={{background: 'transparent'}}></input>
              <select className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border  px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none" style={{background: 'transparent'}}>
                <option value={-1}>Categoria</option>
                {TypeCategories.map((e, index) => <option value={index+1}>{e}</option>)}
              </select>            
            </div>
            
            <div style={{display: 'flex', margin: '.5rem'}}>
              <input type='checkbox' style={{marginRight: '.5rem'}}/>
              <p>Publicar en marketplace</p>
              
            </div>
          </div>
          <div style={{width: '100%', textAlign: 'right'}}>
            <Button
                      href="https://github.com/NextJSTemplates/startup-nextjs"
                      className="inline-block rounded-sm bg-black px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/5"
                      style={{color: '#3662E3', background: 'transparent', fontWeight: '400', fontSize: '1rem'}}
                    >
                      Añadir
            </Button>
          </div>
            
          
        </div>
      </Modal>
    </>;
};
const LayoutHubInventoryPage = () => {
    return <>
      <SideBarComponent route='inventory' frameContennt={
          <div className="resume" style={{overflow: 'hidden'}}>
              <InventoryResume></InventoryResume>
              <div style={{padding: '1rem'}}>
                <h1 style={{marginBottom: '1rem', marginTop: '.5rem', fontSize: '1rem', fontWeight: '500'}}>Productos en MarketPlace <span style={{color: 'blue', marginLeft: '1rem'}}> Compartir url</span></h1>
                <Example/>
              </div>
              

          </div>
        }/>;
        
      </>
}

export default LayoutHubInventoryPage;