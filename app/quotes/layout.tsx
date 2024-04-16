'use client';
import SideBarComponent from "@/components/panel/sidebar";
import { UserModel } from "@/models/userModel";
import { CompactTable } from '@table-library/react-table-library/compact';
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { getUser } from "../api/userr/call";
import { usePagination } from "@table-library/react-table-library/pagination";
import IonIcon from "@reacticons/ionicons";
import Link from "next/link";
import { useTheme } from "@table-library/react-table-library/theme";
import { getTheme } from "@table-library/react-table-library/baseline";
import '../orders/index.css';
import { deleteQuote, getQuotes } from "../api/quotess/call";
import './index.css';
function getTextState(quote: any){
  if(quote.state === 'Confirmed') return 'Confirmado';
  if(quote.quotes?.length > 0) return 'Cotizado';
  if(quote.state === 'Pending') return 'Pendiente'
}
function geTexttColor(quote: any){
  if(quote.state === 'Confirmed') return '#00771B';
  if(quote.quotes?.length > 0) return '#FF9017';
  if(quote.state === 'Pending') return '#666666';
}
const QuoutesLayoutPage = () => {
    const router = useRouter();
    const [user, setUser] = useState<UserModel>(null);

    const [ordersData, setOrderData] = useState([]);
    const [search, setSearch] = useState("");
    const pagination = usePagination({nodes: ordersData ?? []}, {
      state: {
        page: 0,
        size: 12,
      },
    });
      
    const COLUMNS = [
        { label: 'Vehículo', renderCell: (item) => <p>{item?.vehicle}</p> },
        
        { label: 'Placa', renderCell: (item) => <p>{item?.plate}</p> },
        {
          label: 'Productos',
          renderCell: (item) => <p>{item?.products?.length}</p>,
        },
        { label: 'Fecha de creación', renderCell: (item) => <p>{new Date(item.date).getDay()}/
        {new Date(item.date).getMonth()}/
        {new Date(item.date).getFullYear()}
        </p>},
        {
          label: 'Estado',
          renderCell: (item) => <p style={{color: geTexttColor(item)}}>{getTextState(item)}</p>,
        },
        {
          label: '',
          renderCell: (item) => <div style={{display: 'flex'}}>
            <div style={{cursor: 'pointer', marginRight: '.5rem'}}>
            <Link target='_blank' style={{fontSize: '1rem', color: '#3662E3', marginLeft: '.5rem'}} href={'/editquote?id=' + item?._id}><IonIcon name='eye-outline'/></Link>

            </div>
            <IonIcon onClick={async () => {
              const response = await deleteQuote(item?._id);
              if(response) window.location.reload();
            }} name="trash-outline" style={{fontSize: '1rem', color: '#EE4B2B', cursor: 'pointer'}}/>
          </div>
        }
      ];
      const toUser = async () => {
          const userr = await getUser();
          if(userr === undefined || userr === null){
              router.push('/');
              return;
          }
          if(userr?.type !== 'workshop'){
            return router.push('/hub')
          }
          const quotesCast = await getQuotes(userr?._id);
          if(quotesCast !== null){
            const finalQuotesCast = quotesCast?.map((e) => {
              return {
                _id: e?._id,
                vehicle: e?.vehicle,
                plate: e?.plate,
                products: e?.requirements,
                quotes: e?.sendedQuotes,
                date: e?.date,
                state: e?.state ?? 'Pending',
                action: '',
              }
            });
            setOrderData(finalQuotesCast);
          }
          
          
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
          
        },
      ]);
      
      return <>  
        {user === null ? <IonIcon name='chevron-collapse-outline' className="rotateItem" color='#1366D9' style={{fontSize: '1.5rem', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}/> :
        <SideBarComponent user={user} route='quotes' frameContennt={
          <div className="resume" style={{overflow: 'hidden'}}>
              <div>
                  
                  <div style={{padding: '1rem'}}>
                    <div style={{width: '100%', marginBottom: '2rem', display: 'flex'}}>
                        <h1 style={{marginRight: '1rem', marginTop: '0rem', fontSize: '1.2rem', fontWeight: '500'}}>Cotizaciones</h1>
                        <button className="buttonsWithouthPadding" onClick={() => router.push('/createquote')} style={{fontSize: '.8rem', borderRadius: '.5rem', padding: '.2rem', paddingLeft: '1rem', paddingRight: '1rem', marginRight: '1rem', backgroundColor: 'transparent', color: '#1366D9', border: '1px solid #1366D9'}}>Crear</button>

                    </div>
                    
                    <CompactTable  theme={theme} layout={{ custom: true, horizontalScroll: true }}  pagination={pagination} columns={COLUMNS} data={{nodes: ordersData?.filter((item) =>
                        item?.vehicle.toLowerCase().includes(search.toLowerCase())
                        
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
        
        
          
        </>
  }
export default QuoutesLayoutPage;


