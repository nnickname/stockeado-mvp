'use client';

import InventoryResume from "@/components/panel/inventoryresume";

import SideBarComponent from "@/components/panel/sidebar";;
import IonIcon from "@reacticons/ionicons";
import { FunctionComponent, useEffect, useRef, useState } from "react";
import Modal from "react-responsive-modal";
import 'react-responsive-modal/styles.css';
import { TypeBrands, TypeCategories, TypeOfPiece } from "@/models/brands";
import Link from "next/link";
import { UserModel } from "@/models/userModel";
import Cookie from 'universal-cookie';
import { useRouter } from "next/navigation";
import { createInventory, deleteInventory, editInventory, getInventory } from "../api/inventory/call";
import { getUser } from "../api/user/call";
import { usePagination } from "@table-library/react-table-library/pagination";
import { CompactTable } from '@table-library/react-table-library/compact';
import './index.css';
import '../../components/marketplace/header/index.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import { InventoryModel } from "@/models/inventoryModel";

export type InventoryTableModel = {
    id: number;
    _id: string;
    sku: string;
    name: string;
    ammount: number;
    sellings: number;
    price: string;
};

  

type TableRowParams = {
  user: UserModel,
  
}
type EditRowParams = {
  user: UserModel,
  item: InventoryModel,
  makeData: any
}
const ModalEditProduct: FunctionComponent<EditRowParams> = ({user, item, makeData}) => {
  const [name, setName] = useState(item.name);
  const [image, setImage] = useState(null);
  const [sku, setSku] = useState(item.sku);    
    const [ammount, setAmmount] = useState(String(item.ammount));    
    const [price, setPrice] = useState(item.price);    
    const [brand, setBrand] = useState(item.brand);    
    const [categorie, setCategorie] = useState(item.categorie);    
    const [onMP, setOnMP] = useState(null);    
    const [model, setModel] = useState(item.model);    
    const [type, setType] = useState(item.type);    
    const validateForm = async () => {
      const imageToBuild = image === null ? item.image : image;
      var inMP;
      if(onMP === null){
        inMP = onMP === 'on' ? true : false;
      } else inMP = item.inMP;
          item.name = name;
          item.image = imageToBuild;
          item.sku = sku;
          item.ammount = Number(ammount);
          item.price = price;
          item.brand = brand;
          item.categorie = categorie;
          item.inMP = inMP;
          item.model = model;
          item.type = type;
          item._id = String(item._id);
          const response = await editInventory(item);
          if(response){
             NotificationManager.success('Editaste un item.', 'Success');
             await makeData(true);
          } else NotificationManager.error('Ocurrio un error', 'Error');
  }
  const onChangeImage = async (event) => {
    const file = event.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      setImage(fileReader.result);
    };
    fileReader.onerror = (error) => {
      console.log(error);
    };


  }
  return <div>
    <p style={{background: 'linear-gradient(89deg, var(--token-dc60c65c-2692-4b09-8d77-49a86f7aedee, rgb(24, 36, 61)) /* {"name":"Azul prinicipal"} */ 0%, var(--token-1632e6e1-d1e5-427f-b435-20cb1e67f695, rgb(54, 98, 227)) /* {"name":"Azul claro"} */ 123.5068681091516%)', width: '100%', padding: '1rem', color:'white'}}>Editar producto</p>
    <div style={{margin: '2rem'}}>
      
      <div style={{width: '100%', textAlign: 'center'}}>
        <div style={{marginTop: '1rem'}}></div>
        <label htmlFor="image" style={{width: '100%',
          padding: '4rem',
          margin: '0px',
          backgroundSize: '100%',
          backgroundImage: image !== null ? image : 'rgba(0,0,0, 0.2)', cursor: 'pointer'}}><img height='400px' src={image === null ? item.image : image}/></label>

        <input accept="image" id="image" onChange={onChangeImage} type='file' placeholder='Subir archivo' style={{
          visibility: 'hidden', display: 'none'
          
        }}/>
        
        <div style={{marginTop: '4rem'}}>
          <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Nombre de producto" className="border-stroke dark:text-body-color-dark dark:shadow-two  w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none" style={{background: 'transparent'}}></input>
        </div>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <input value={sku} onChange={(e) => setSku(e.target.value)} placeholder="SKU"  className="border-stroke dark:text-body-color-dark dark:shadow-two  w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none" style={{background: 'transparent'}}></input>
          <input value={ammount} onChange={(e) => setAmmount(e.target.value)} placeholder="Cantidad" type='number' className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border  px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none" style={{background: 'transparent'}}></input>
        </div>
        <select value={brand} onChange={(e) => setBrand(Number(e.target.value))} className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border  px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none" style={{background: 'transparent'}}>
          <option value={-1}>Marca</option>

          {TypeBrands.map((e, index) => <option key={index} value={index+1}>{e}</option>)}

        </select>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <input value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Precio"  className="border-stroke dark:text-body-color-dark dark:shadow-two  w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none" style={{background: 'transparent'}}></input>
          <select value={categorie} onChange={(e) => setCategorie(Number(e.target.value))} className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border  px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none" style={{background: 'transparent'}}>
            <option value={-1}>Categoria</option>
            {TypeCategories.map((e, index) => <option key={index} value={index+1}>{e}</option>)}
          </select>            
        </div>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <input value={model} onChange={(e) => setModel(e.target.value)} placeholder="Modelo de auto" className="border-stroke dark:text-body-color-dark dark:shadow-two  w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none" style={{background: 'transparent'}}></input>
          <select value={type} onChange={(e) => setType(Number(e.target.value))} className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border  px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none" style={{background: 'transparent'}}>
            <option value={-1}>Tipo de pieza</option>
            {TypeOfPiece.map((e, index) => <option key={index} value={index+1}>{e}</option>)}
          </select>            
        </div>

        <div style={{width: '100%', textAlign: 'left', margin: '.5rem', marginBottom: '0rem'}}>
          <p style={{fontSize: '.9rem', color: 'grey'}}>Actual: {item.inMP === true ? 'Publicado' : 'No esta publicado'}</p>

        </div>
        <div style={{display: 'flex', margin: '.5rem', marginTop: '0rem'}}>
          <input value={onMP} onChange={(e) => {setOnMP(e.target.value), console.log(e.target.value)}} type='checkbox' style={{marginRight: '.5rem'}}/>
          <p>Publicar en marketplace</p>
          
        </div>
      </div>
      <div style={{width: '100%', textAlign: 'right'}}>
        <button
                  onClick={() => validateForm()}
                  className="inline-block rounded-sm bg-black px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/5"
                  style={{color: '#3662E3', background: 'transparent', fontWeight: '400', fontSize: '1rem'}}
                >
                  Editar
        </button>
      </div>
        
      
    </div>
  </div>
}
const TableRow: FunctionComponent<TableRowParams> = ({user}) =>{
  
    const [inventoryData, setInventory] = useState<InventoryTableModel[]>([]);
    const [realInventoryData, setRealInventoryData] = useState<InventoryModel[]>([]);
    const pagination = usePagination({nodes: [...inventoryData ?? []]}, {
      state: {
        page: 0,
        size: 12,
      },
    });
    const MakeData = async (putOpen: boolean) => {
      const inventoryCast = await getInventory();
      await setRealInventoryData(inventoryCast);
      const inventoryy: InventoryTableModel[] = inventoryCast as InventoryTableModel[];
      inventoryy?.map((e: InventoryTableModel, index) => {
        inventoryy[index].id = index;
        inventoryy[index].sellings = inventoryCast[index]?.sellings?.length ?? 0;
      }) 
      setInventory(inventoryy !== null ? inventoryy : []);
      if(putOpen) {
        setOpen(false);
        setOpenEdit(false);
      }
    }
    useEffect(() => {
      MakeData(false);
      
    }, []); 
    
    const [itemSelected, setItemSelected] = useState<string>('');
    const [openDelete, setOpenDelete] = useState<boolean>(false);
    const [openEdit, setOpenEdit] = useState<boolean>(false);
    const [open, setOpen] = useState<boolean>(false);
    const [name, setName] = useState("");
    const [search, setSearch] = useState("");
    const [image, setImage] = useState(null);
    const [sku, setSku] = useState(null);    
    const [ammount, setAmmount] = useState(null);    
    const [price, setPrice] = useState(null);    
    const [brand, setBrand] = useState(-1);    
    const [categorie, setCategorie] = useState(-1);    
    const [onMP, setOnMP] = useState(null);    
    const [model, setModel] = useState(null);    
    const [type, setType] = useState(-1);    
    const COLUMNS = [
      { label: 'SKU', renderCell: (item) => item.sku },
      
      { label: 'Nombre Producto', renderCell: (item) => item.name },
      {
        label: 'Cantidad',
        renderCell: (item) => <p style={{color: item.ammount < 4 ? 'tomato' : 'black'}}>{item.ammount}</p> ,
      },
      { label: 'Ventas', renderCell: (item) => item.sellings},
      { label: 'Precio', renderCell: (item) => 's/.' + item.price },
      { label: '', pinRigth: true , renderCell: (item) =>     
        <div style={{display: 'flex', fontSize: '1.2rem'}}>
          <div style={{color: 'tomato', marginRight: '.5rem', cursor: 'pointer'}} onClick={() => {
            setItemSelected(item._id);
            setOpenDelete(true);
            
          }}>
            <IonIcon name="trash-outline"/>
    
          </div>
          <div onClick={() => {
            setItemSelected(item._id);
            setOpenEdit(true);
            
          }} style={{color: 'orange', cursor: 'pointer'}}>
            <IonIcon name="pencil-outline"/>
    
          </div>
          
        </div>
      }
    ];


    const handleSearch = (event) => {
      setSearch(event.target.value);
    };
    const onChangeImage = async (event) => {
      const file = event.target.files[0];
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        setImage(fileReader.result);
      };
      fileReader.onerror = (error) => {
        console.log(error);
      };


    }
    const deleteVisualInventory = async () => {
      if(await deleteInventory(itemSelected)){
        setOpenDelete(false);
        NotificationManager.success('Eliminaste el item', 'Success');
        window.location.reload();
      } else NotificationManager.error('Ocurrio un error', 'Error');
    }
    const validateForm = async () => {
      if(onMP === null ){
        await setOnMP('in');
      }
      const buildBody = {
        name,
        image,
        sku,
        ammount,
        price,
        brand,
        categorie,
        inMP : onMP === 'on' ? true : false,
        model,
        stars: 0,
        type,
        owner_id: user._id
      }
      if(name !== "" && image !== null && sku !== null && ammount !== null && price !== null && brand !== -1 && categorie !== -1 && model !== null && type !== -1){
          const response = await createInventory(buildBody);
          if(response){
             NotificationManager.success('Añadiste un item.', 'Success');
             window.location.reload();
          } else NotificationManager.error('Ocurrio un error', 'Error');
        } else NotificationManager.error('Completa el formulario.', 'Error');
    }
    return <>
      <div style={{width: '100%', display: 'flex', justifyContent: 'space-between'}}>
        <h1 style={{marginBottom: '1rem', marginTop: '.5rem', fontSize: '1rem', fontWeight: '500'}}>Productos en MarketPlace <Link style={{fontSize: '1rem', color: '#3662E3', marginLeft: '.5rem'}} href={'https://stockeado-mvp.vercel.app/marketplace/shop?id=' + user?._id}>Mi URL<IonIcon name='open-outline'/></Link></h1>
        <div style={{display: 'flex'}}>
          <button onClick={() => setOpen(true)} style={{fontSize: '.8rem', borderRadius: '.5rem', padding: '.2rem', paddingLeft: '1rem', paddingRight: '1rem', marginRight: '1rem', backgroundColor: '#1366D9', color: 'white'}}>Cargar productos</button>
          <button style={{fontSize: '.8rem', border: '1px solid grey', borderRadius: '.5rem', padding: '.2rem', paddingLeft: '1rem', paddingRight: '1rem', backgroundColor: 'transparent', color: 'grey'}}>Descargar todo</button>
        </div>
      </div>
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
            <div style={{width: '1px', height: '53px', background: 'rgba(10, 10, 10, 0.2)', marginRight: 'auto', marginLeft: 'auto'}}></div>
            <p style={{color: 'grey'}}> o cargalo manualmente</p>

            <div style={{marginTop: '2rem'}}></div>
            <label htmlFor="image" style={{width: '100%',
              padding: '4rem',
              margin: '0px',
              backgroundSize: '100%',
              backgroundImage: image !== null ? image : 'rgba(0,0,0, 0.2)', cursor: 'pointer'}}>
                {
                  image === null ? 'Subir imagen' :
                  <img style={{maxHeight: '400px !important'}} src={image}/>
                }
              </label>

            <input accept="image" id="image" onChange={onChangeImage} type='file' placeholder='Subir archivo' style={{
              visibility: 'hidden', display: 'none'
              
            }}/>
            <div style={{marginTop: '4rem'}}>
              <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Nombre de producto" className="border-stroke dark:text-body-color-dark dark:shadow-two  w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none" style={{background: 'transparent'}}></input>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
              <input value={sku} onChange={(e) => setSku(e.target.value)} placeholder="SKU"  className="border-stroke dark:text-body-color-dark dark:shadow-two  w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none" style={{background: 'transparent'}}></input>
              <input value={ammount} onChange={(e) => setAmmount(e.target.value)} placeholder="Cantidad" type='number' className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border  px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none" style={{background: 'transparent'}}></input>
            </div>
            <select value={brand} onChange={(e) => setBrand(Number(e.target.value))} className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border  px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none" style={{background: 'transparent'}}>
              <option value={-1}>Marca</option>

              {TypeBrands.map((e, index) => <option key={index} value={index+1}>{e}</option>)}

            </select>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
              <input value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Precio"  className="border-stroke dark:text-body-color-dark dark:shadow-two  w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none" style={{background: 'transparent'}}></input>
              <select value={categorie} onChange={(e) => setCategorie(Number(e.target.value))} className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border  px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none" style={{background: 'transparent'}}>
                <option value={-1}>Categoria</option>
                {TypeCategories.map((e, index) => <option key={index} value={index+1}>{e}</option>)}
              </select>            
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
              <input value={model} onChange={(e) => setModel(e.target.value)} placeholder="Modelo de auto" className="border-stroke dark:text-body-color-dark dark:shadow-two  w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none" style={{background: 'transparent'}}></input>
              <select value={type} onChange={(e) => setType(Number(e.target.value))} className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border  px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none" style={{background: 'transparent'}}>
                <option value={-1}>Tipo de pieza</option>
                {TypeOfPiece.map((e, index) => <option key={index} value={index+1}>{e}</option>)}
              </select>            
            </div>

            
            <div style={{display: 'flex', margin: '.5rem'}}>
              <input value={onMP} onChange={(e) => setOnMP(e.target.value)} type='checkbox' style={{marginRight: '.5rem'}}/>
              <p>Publicar en marketplace</p>
              
            </div>
          </div>
          <div style={{width: '100%', textAlign: 'right'}}>
            <button
                      onClick={() => validateForm()}
                      className="inline-block rounded-sm bg-black px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/5"
                      style={{color: '#3662E3', background: 'transparent', fontWeight: '400', fontSize: '1rem'}}
                    >
                      Añadir
            </button>
          </div>
            
          
        </div>
      </Modal>
      <Modal closeIcon={<IonIcon name="close"/>} styles={{
          modal : {borderRadius: '1rem', minWidth: '300px', padding: '0rem'},
          closeIcon: {color: 'white !important'},
          overlay: {backgroundColor: 'rgba(220, 217, 217, 0.5)'}
        }}  open={openEdit} center onClose={() => setOpenEdit(false) }>
          <ModalEditProduct user={user} item={realInventoryData?.find(product => String(product._id) === itemSelected)} makeData={MakeData}/>
      </Modal>
      <Modal closeIcon={<IonIcon name="close"/>} styles={{
          modal : {borderRadius: '1rem', minWidth: '300px', padding: '0rem'},
          closeIcon: {color: 'white !important'},
          overlay: {backgroundColor: 'rgba(220, 217, 217, 0.5)'}
        }}  open={openDelete} center onClose={() => setOpenDelete(false) }>
          <p style={{background: 'linear-gradient(89deg, var(--token-dc60c65c-2692-4b09-8d77-49a86f7aedee, rgb(24, 36, 61)) /* {"name":"Azul prinicipal"} */ 0%, var(--token-1632e6e1-d1e5-427f-b435-20cb1e67f695, rgb(54, 98, 227)) /* {"name":"Azul claro"} */ 123.5068681091516%)', width: '100%', padding: '1rem', color:'white'}}>Eliminar producto</p>
          <div style={{marginTop: '2rem'}}>
            <p> ¿Estas seguro que quieres eliminar el item: {realInventoryData?.find(product => String(product._id) === itemSelected)?.name} ?</p>
            <div style={{display: 'flex', padding: '2rem', textAlign: 'center'}}>
              <button onClick={() => setOpenDelete(false)} style={{width: '100%', fontSize: '1rem', borderRadius: '.5rem', padding: '.2rem', paddingLeft: '1rem', paddingRight: '1rem', marginRight: '1rem', backgroundColor: '#1366D9', color: 'white'}}>Cancelar</button>
              <button onClick={() => {
                deleteVisualInventory();
              }} style={{width: '100%', fontSize: '1rem', borderRadius: '.5rem', padding: '.2rem', paddingLeft: '1rem', paddingRight: '1rem', marginRight: '1rem', backgroundColor: 'tomato', color: 'white'}}>Eliminar</button>

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
        if(userr === undefined || user === null){
            router.push('/');
        }
        setUser(userr);
    }
    useEffect(() => {
        toUser();
    }, []);
    return <>
          <NotificationContainer/>

      <SideBarComponent user={user} route='inventory' frameContennt={
          <div className="resume" style={{overflow: 'hidden'}}>
              <InventoryResume></InventoryResume>
              <div style={{padding: '1rem'}}>
                
                <TableRow user={user}/>
              </div>
              

          </div>
        }/>;
        
      </>
}

export default LayoutHubInventoryPage;