'use client';

import InventoryResume from "@/components/panel/inventoryresume";


import SideBarComponent from "@/components/panel/sidebar";;
import IonIcon from "@reacticons/ionicons";
import { useEffect, useRef, useState } from "react";
import Modal from "react-responsive-modal";
import 'react-responsive-modal/styles.css';
import { TypeBrands, TypeCategories } from "@/models/brands";
import Link from "next/link";
import { UserModel } from "@/models/userModel";
import Cookie from 'universal-cookie';
import { useRouter } from "next/navigation";
import { getInventory } from "../api/inventory/call";
import { getUser } from "../api/user/call";
import { usePagination } from "@table-library/react-table-library/pagination";
import { CompactTable } from '@table-library/react-table-library/compact';
import './index.css';
import '../../components/marketplace/header/index.css';
export type InventoryTableModel = {
    id: number;
    _id: string;
    sku: string;
    name: string;
    ammount: number;
    sellings: number;
    price: string;
};
const COLUMNS = [
  { label: 'SKU', renderCell: (item) => item.sku },
  /*{
    label: 'Deadline',
    renderCell: (item) =>
      item.deadline.toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      }),
  },*/
  { label: 'Nombre Producto', renderCell: (item) => item.name },
  {
    label: 'Cantidad',
    renderCell: (item) => item.ammount,
  },
  { label: 'Ventas', renderCell: (item) => item.sellings },
  { label: 'Precio', renderCell: (item) => item.price },
  { label: '', pinRigth: true , renderCell: (item) =>     
    <div style={{display: 'flex', fontSize: '1.2rem'}}>
      <div style={{color: 'tomato', marginRight: '.5rem', cursor: 'pointer'}} onClick={() => {
      //handleUpdate(event.target.value, item.action, "name")
      }}>
        <IonIcon name="trash-outline"/>

      </div>
      <div style={{color: 'orange', cursor: 'pointer'}} onClick={() => {
      //handleUpdate(event.target.value, item.action, "name")
      }}>
        <IonIcon name="pencil-outline"/>

      </div>
      
    </div>
  }
];
  

const TableRow = () => {
  
    const [inventoryData, setInventory] = useState<InventoryTableModel[]>([]);
    const pagination = usePagination({nodes: [...inventoryData ?? []]}, {
      state: {
        page: 0,
        size: 12,
      },
    });
    const MakeData = async () => {
      const inventoryCast = await getInventory();
      const inventoryy: InventoryTableModel[] = inventoryCast as InventoryTableModel[];
      inventoryy?.map((e: InventoryTableModel, index) => {
        inventoryy[index].id = index;
        inventoryy[index].sellings = inventoryCast[index]?.sellings?.length ?? 0;
      }) 
      setInventory(inventoryy !== null ? inventoryy : []);
    }
    useEffect(() => {
      MakeData();
      
    }, []);
    
   const [open, setOpen] = useState<boolean>(false);
   const [search, setSearch] = useState("");

    const handleSearch = (event) => {
      setSearch(event.target.value);
    };
   
    return <>
      <div className="input-search" style={{marginTop: '1rem', marginBottom: '1rem'}}>
        <div className="iconinput">
          <IonIcon name="search-outline"/>

        </div>
        <input placeholder="Busca por nombre de producto" type='text' value={search} onChange={handleSearch} />
        <button >
          Buscar
        </button>


      </div>
      <CompactTable  pagination={pagination} columns={COLUMNS} data={{nodes: inventoryData?.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase()) || item.sku.toLowerCase().includes(search.toLowerCase())
        
      )}} />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span style={{margin: '.5rem'}}>Paginas: {pagination.state.getTotalPages(inventoryData ?? [])}</span>

        <span>
          Actual:{"  "}
          {pagination.state.getPages(inventoryData ?? []).map((_, index) => (
            <button
              key={index}
              type="button"
              style={{

                fontWeight: pagination.state.page === index ? "bold" : "normal",
                color: pagination.state.page === index ? "#3662E3" : "black",
                margin: '.5rem'
              }}
              onClick={() => pagination.fns.onSetPage(index)}
            >
              {index + 1} {'  '}
            </button>
          ))}
        </span>
      </div>

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

              {TypeBrands.map((e, index) => <option key={index} value={index+1}>{e}</option>)}

            </select>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
              <input placeholder="Precio"  className="border-stroke dark:text-body-color-dark dark:shadow-two  w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none" style={{background: 'transparent'}}></input>
              <select className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border  px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none" style={{background: 'transparent'}}>
                <option value={-1}>Categoria</option>
                {TypeCategories.map((e, index) => <option key={index} value={index+1}>{e}</option>)}
              </select>            
            </div>
            
            <div style={{display: 'flex', margin: '.5rem'}}>
              <input type='checkbox' style={{marginRight: '.5rem'}}/>
              <p>Publicar en marketplace</p>
              
            </div>
          </div>
          <div style={{width: '100%', textAlign: 'right'}}>
            <button
                      className="inline-block rounded-sm bg-black px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/5"
                      style={{color: '#3662E3', background: 'transparent', fontWeight: '400', fontSize: '1rem'}}
                    >
                      Añadir
            </button>
          </div>
            
          
        </div>
      </Modal>
    </>;
};
const LayoutHubInventoryPage = () => {
  const router = useRouter();
    const [user, setUser] = useState<UserModel>();
    const toUser = async () => {
        const userr = await getUser();
        const inventory = await getInventory();
        if(userr === undefined || user === null){
            router.push('/');
        }
        setUser(userr);
    }
    useEffect(() => {
        toUser();
    }, []);
    return <>
      <SideBarComponent user={user} route='inventory' frameContennt={
          <div className="resume" style={{overflow: 'hidden'}}>
              <InventoryResume></InventoryResume>
              <div style={{padding: '1rem'}}>
                <h1 style={{marginBottom: '1rem', marginTop: '.5rem', fontSize: '1rem', fontWeight: '500'}}>Productos en MarketPlace <Link style={{fontSize: '1rem', color: '#3662E3', marginLeft: '.5rem'}} href={'http://localhost:3000/marketplace/' + user?._id}>Mi URL<IonIcon name='open-outline'/></Link></h1>
                <TableRow />
              </div>
              

          </div>
        }/>;
        
      </>
}

export default LayoutHubInventoryPage;