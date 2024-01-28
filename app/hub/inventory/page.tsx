'use client';
import {
    MaterialReactTable,
    createMRTColumnHelper,
    useMaterialReactTable,
  } from 'material-react-table';
  import { Box, Button } from '@mui/material';
  import FileDownloadIcon from '@mui/icons-material/FileDownload';
  import { jsPDF } from 'jspdf'; //or use your library of choice here
  import autoTable from 'jspdf-autotable';
  import { data } from './makeData';
  import SideBarComponent from "@/components/panel/sidebar";
  import { Metadata, NextPage } from "next";

export const metadata: Metadata = {
    title: "Stockeado - Inventario",
    description: "Mira tu inventario en Stockeado",
    // other metadata
};
import InventoryResume from '@/components/panel/inventoryresume';

  const columnHelper = createMRTColumnHelper();
  
  const columns = [
    columnHelper.accessor('id', {
      header: 'ID',
    }),
    columnHelper.accessor('firstName', {
      header: 'First Name',
    }),
    columnHelper.accessor('lastName', {
      header: 'Last Name',
    }),
    columnHelper.accessor('company', {
      header: 'Company',
    }),
    columnHelper.accessor('city', {
      header: 'City',
    }),
    columnHelper.accessor('country', {
      header: 'Country',
    }),
  ];
  
const Example = () => {
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
            gap: '16px',
            padding: '8px',
            flexWrap: 'wrap',
          }}
        >
          <Button
            disabled={table.getPrePaginationRowModel().rows.length === 0}
            //export all rows, including from the next page, (still respects filtering and sorting)
            onClick={() =>
              handleExportRows(table.getPrePaginationRowModel().rows)
            }
            startIcon={<FileDownloadIcon />}
          >
            Nuevo
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
  
    return <MaterialReactTable   table={table} />;
};



const InventoryPage: NextPage = () => {
  return (
    
      <SideBarComponent route='inventory' frameContennt={
        <div className="resume" style={{overflow: 'hidden', maxWidth: '80%'}}>
            <InventoryResume></InventoryResume>
            <div className="content-frame-container">
              <Example/>
            </div>
            

        </div>
      }/>
    
  );
};

export default InventoryPage;
