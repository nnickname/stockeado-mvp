'use client';
import InventoryResume from "@/components/panel/inventoryresume";
import SideBarComponent from "@/components/panel/sidebar";
import { UserModel } from "@/models/userModel";
import { CompactTable } from '@table-library/react-table-library/compact';
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { getUser } from "../api/user/call";
import { usePagination } from "@table-library/react-table-library/pagination";
import { OrderModel, OrderStates, getOrderState } from "@/models/ordersModel";
import { getTotalPrice } from "@/components/marketplace/header";
import './index.css';
import { getOrders } from "../api/orderss/call";
import SellResume from "@/components/panel/sellresume";
import IonIcon from "@reacticons/ionicons";
import Link from "next/link";
import Modal from "react-responsive-modal";
import EditModalOrder from './editModal';
const OrdersLayoutPage = () => {
    const router = useRouter();
    const [user, setUser] = useState<UserModel>();
    const [open, setOpen] = useState<boolean>();
    const [orderSelected, setOrderSelected] = useState<OrderModel>();

    const [ordersData, setOrderData] = useState<OrderModel[]>([]);
    const [realOrdersData, setRealOrderData] = useState<[]>([]);
    const [search, setSearch] = useState("");
    const pagination = usePagination({nodes: [...ordersData ?? []]}, {
      state: {
        page: 0,
        size: 12,
      },
    });
      
    const COLUMNS = [
        { label: 'Nombre', renderCell: (item) => <p>{item?.name + ' ' + item?.lastname}</p> },
        
        { label: 'Dirección', renderCell: (item) => <p>{item?.direction}</p> },
        {
          label: 'Total',
          renderCell: (item) => <p>{'s/. ' + getTotalPrice(item?.items)}</p>,
        },
        { label: 'Fecha maxima', renderCell: (item) => <p>{new Date(item.maxDate).getDay()}/
        {new Date(item.maxDate).getMonth()}/
        {new Date(item.maxDate).getFullYear()} <span style={{color: 'red'}}>{item.state < 2 ? <IonIcon name="alert-outline"/>: ''}</span> 
        </p>},
        {
          label: '',
          renderCell: (item) => <div style={{display: 'flex'}}>
            <div onClick={() => {
            //setItemSelected(item._id);
            //setOpenEdit(true);
            
          }} style={{cursor: 'pointer', marginRight: '.5rem'}}>
            <Link style={{fontSize: '1rem', color: '#3662E3', marginLeft: '.5rem'}} href={'https://stockeado-mvp.vercel.app/marketplace/order?id=' + item?._id}><IonIcon name='eye-outline'/></Link>

          </div><div onClick={() => {
            setOrderSelected(item);
            setOpen(true);
            
          }} style={{color: 'orange', cursor: 'pointer'}}>
                <IonIcon name="pencil-outline"/>

          </div>
          </div>
        }
        
        
      ];
      const toUser = async () => {
          const userr = await getUser();
          if(userr === undefined || user === null){
              router.push('/');
          }
          const ordersCast = await getOrders(userr?._id);
          console.log(ordersCast);
          setOrderData(ordersCast);
          setUser(userr);
      }
      useEffect(() => {
          toUser();
      }, []);
      const handleSearch = () => {

      }
      return <>  
        <SideBarComponent user={user} route='orders' frameContennt={
            <div className="resume" style={{overflow: 'hidden'}}>
                <div>
                    <SellResume orders={ordersData} user={user}/>
                    <div style={{padding: '1rem'}}>
                      <div style={{width: '100%', display: 'flex', justifyContent: 'space-between'}}>
                          <h1 style={{marginBottom: '1rem', marginTop: '.5rem', fontSize: '1rem', fontWeight: '500'}}>Ordenes finales</h1>
                          <div style={{display: 'flex'}}>
                            <button style={{fontSize: '.8rem', border: '1px solid grey', borderRadius: '.5rem', padding: '.2rem', paddingLeft: '1rem', paddingRight: '1rem', backgroundColor: 'transparent', color: 'grey'}}>Crear manual</button>
                          </div>
                      </div>
                      <div className="input-search" style={{marginTop: '1rem', marginBottom: '1rem'}}>
                        <div className="iconinput">
                          <IonIcon name="search-outline"/>

                        </div>
                        <input placeholder="Busca por nombre de cliente" type='text' value={search} onChange={handleSearch} />
                        <button >
                          Buscar
                        </button>


                      </div>
                      <CompactTable  pagination={pagination} columns={COLUMNS} data={{nodes: ordersData?.filter((item) =>
                          item?.name.toLowerCase().includes(search.toLowerCase())
                          
                      )}} />
                      <div style={{ display: "flex", justifyContent: "space-between" }}>
                          <span style={{margin: '.5rem'}}>Paginas: {pagination.state.getTotalPages(ordersData ?? [])}</span>

                          <span>
                          Actual:{"  "}
                          {pagination.state.getPages(ordersData ?? []).map((_, index) => (
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
                  </div>
                </div>
                
  
            </div>
          }/>;
          <Modal closeIcon={<IonIcon name="close"/>} styles={{
              modal : {borderRadius: '1rem', minWidth: '500px', padding: '0rem'},
              closeIcon: {color: 'white !important'},
              overlay: {backgroundColor: 'rgba(220, 217, 217, 0.5)'}
            }}  open={open} center onClose={() => setOpen(false) }>
              <div style={{padding: '1rem'}}>
                <EditModalOrder order={orderSelected} />

              </div>
          </Modal>
          
        </>
  }
export default OrdersLayoutPage;


