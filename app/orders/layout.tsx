'use client';
import InventoryResume from "@/components/panel/inventoryresume";
import SideBarComponent from "@/components/panel/sidebar";
import { UserModel } from "@/models/userModel";
import { CompactTable } from '@table-library/react-table-library/compact';
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { getUser } from "../api/user/call";
import { usePagination } from "@table-library/react-table-library/pagination";
import { OrderModel } from "@/models/ordersModel";
import { getTotalPrice } from "@/components/marketplace/header";
import './index.css';
const OrdersLayoutPage = () => {
    const router = useRouter();
      const [user, setUser] = useState<UserModel>();
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
        { label: 'Nombre', renderCell: (item) => {item.name + ' ' + item.lastname} },
        
        { label: 'Dirección', renderCell: (item) => item.direction },
        {
          label: 'Total',
          renderCell: (item) => {'s/. ' + getTotalPrice(item.items)},
        },
        { label: 'Fecha maxima', renderCell: (item) => item.sellings},
        { label: 'Estado', renderCell: (item) => 's/.' + item.price },
        
      ];
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
        <SideBarComponent user={user} route='orders' frameContennt={
            <div className="resume" style={{overflow: 'hidden'}}>
                <InventoryResume></InventoryResume>
                <div style={{padding: '1rem'}}>

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
          }/>;
          
        </>
  }
export default OrdersLayoutPage;


