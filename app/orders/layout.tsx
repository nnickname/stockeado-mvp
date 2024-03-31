'use client';
import InventoryResume from "@/components/panel/inventoryresume";
import SideBarComponent from "@/components/panel/sidebar";
import { UserModel } from "@/models/userModel";
import { CompactTable } from '@table-library/react-table-library/compact';
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { getUser } from "../api/userr/call";
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
import { useTheme } from "@table-library/react-table-library/theme";
import { getTheme } from "@table-library/react-table-library/baseline";
const OrdersLayoutPage = () => {
    const router = useRouter();
    const [user, setUser] = useState<UserModel>(null);
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
          renderCell: (item) => <p>{'s/. ' + Number(getTotalPrice(item?.items, true)).toFixed(2)}</p>,
        },
        { label: 'Fecha maxima', renderCell: (item) => <p>{new Date(item.maxDate).getDay()}/
        {new Date(item.maxDate).getMonth()}/
        {new Date(item.maxDate).getFullYear()} <span style={{color: 'red'}}>{item.state < 4 ? <IonIcon name="alert-outline"/>: ''}</span> 
        </p>},
        {
          label: '',
          renderCell: (item) => <div style={{display: 'flex'}}>
            <div onClick={() => {
            //setItemSelected(item._id);
            //setOpenEdit(true);
            
          }} style={{cursor: 'pointer', marginRight: '.5rem'}}>
            <Link target='_blank' style={{fontSize: '1rem', color: '#3662E3', marginLeft: '.5rem'}} href={'/marketplace/order?id=' + item?._id}><IonIcon name='eye-outline'/></Link>

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
          if(userr === undefined || userr === null){
              router.push('/');
          }
          const ordersCast = await getOrders(userr?._id);
          console.log(ordersCast);
          setOrderData(ordersCast);
          setUser(userr);
      }

      const [width, setWidth] = useState(0)
      const handleResize = () => setWidth(window.innerWidth)
      useEffect(() => {
          toUser();
          handleResize()
         window.addEventListener('resize', handleResize)
          return () => window.removeEventListener('resize', handleResize);
      }, []);
      const handleSearch = (event: any) => {
        setSearch(event.target.value);
      }
      const theme = useTheme([
        getTheme(),
        {
          Table: `
            --data-table-library_grid-template-columns: 100px 200px 100px 100px 100px 100px 100px
          `,
        },
      ]);
      
      return <>  
        {user === null ? <IonIcon name='chevron-collapse-outline' className="rotateItem" color='#1366D9' style={{fontSize: '1.5rem', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}/> :
        <SideBarComponent user={user} route='orders' frameContennt={
          <div className="resume" style={{overflow: 'hidden'}}>
              <div>
                  <SellResume orders={ordersData} user={user}/>
                  <div style={{padding: '1rem'}}>
                    <div style={{width: '100%', display: 'flex', justifyContent: 'space-between'}}>
                        <h1 style={{marginBottom: '1rem', marginTop: '.5rem', fontSize: '1rem', fontWeight: '500'}}>Ordenes finales</h1>
                        <div style={{display: 'flex'}}>
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
                    <CompactTable  theme={theme} layout={{ custom: true, horizontalScroll: true }}  pagination={pagination} columns={COLUMNS} data={{nodes: ordersData?.filter((item) =>
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
        }/>
        }
        
          <Modal closeIcon={<IonIcon name="close"/>} styles={{
              modal : {borderRadius: '1rem', padding: '0rem', maxWidth: width < 921 ? '90%' : '600px'},
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


