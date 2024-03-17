'use client';
import HeaderMarketPlace from "@/components/marketplace/header";
import 'react-responsive-modal/styles.css';
import Image from "next/image";
import BackgroundImage from "@/components/marketplace/background/background";
import { TypeBrands, TypeCategories, TypeOfPiece } from "@/models/brands";
import '../index.css';
import { useEffect, useState } from "react";
import { InventoryModel } from "@/models/inventoryModel";
import { CartProps } from "@/models/ordersModel";
import { useSearchParams } from "next/navigation";
import { findProduct } from "../../api/marketplacee/call";
import CardMarketPlace from "@/components/marketplace/item";
import { Popover } from "react-tiny-popover";
import IonIcon from "@reacticons/ionicons";
import Pagination from "@/components/marketplace/pagination";
import Footer from "@/components/dashboard/Footer";


const LayoutMarketPlaceFindItem = () => {
    const [realItems, setRealItems] = useState<InventoryModel[]>([]);
    const [items, setItems] = useState<InventoryModel[]>(null);
    const [cart, setCart] = useState<CartProps[]>([]);
    const search = useSearchParams();
    const name = search.get('name');
    const [ammountItem, setAmmountItem] = useState<number>(0);
    const findStaticProducts = async() => {
      if(name?.length > 3) {
        const response = await findProduct(name);
        if(response !== null) setItems(response ?? []);
        if(response !== null) setRealItems(response);
      }
    }
    const filterByBrand = (brand: number, checked: boolean) => {
      if(checked)
      setItems(realItems.filter((item) => Number(item.brand === brand)))
    }
    const filterByType = (type: number, checked: boolean) => {
      if(checked)
      setItems(realItems.filter((item) => Number(item.type === type)))
    }
    const filterByCategorie = (categorie: number, checked: boolean) => {
      if(checked)
      setItems(realItems.filter((item) => Number(item.categorie === categorie)))
    }
    useEffect(() => {
        const cartCast = JSON.parse(sessionStorage.getItem("cart"));
        if(cartCast !== undefined) setCart(cartCast ?? []);
        findStaticProducts();
    }, [name]);
    const [keywordFind, setKeyword] = useState<string>('');
    const findProductAndSet = async () => {
      if(keywordFind?.length > 1){
        const response = await findProduct(keywordFind);
        setItems(response ?? []);
      } else setItems(realItems ?? []);
    }
    const [isPopoverOpenBrand, setPopoverOpenBrand] = useState<boolean>(false);
    const [isPopoverOpenCategorie, setPopoverOpenCategorie] = useState<boolean>(false);
    const [isPopoverOpenType, setPopoverOpenType] = useState<boolean>(false);
    const [currentPage, setCurrentPage] = useState(1);
    const postPerPage = 18;
    return <div>
      {items === null ? <IonIcon name='chevron-collapse-outline' className="rotateItem" color='#1366D9' style={{fontSize: '1.5rem', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}/> :
      <div>
        <HeaderMarketPlace cartItems={cart} setCart={setCart}/>
        <BackgroundImage/>
         <div className="marketplace displayBlockResponsive">


         <div className="sidebarM hideResponsive">
          <div style={{display: 'flex'}}>
            <div>
              <input
                      style={{
                        marginTop: 'auto',
                        width: '100%',
                        padding: '1.1rem',
                        height: '40px',
                        border: '1px solid grey'
                      }}
                      onChange={(e) => setKeyword(e.target.value)}
                      type="text"
                      name="email"
                      placeholder="Buscar por número de parte"
                      value={keywordFind ?? ''}
                    />
            </div>
          <div>
              <button style={{
                        
                        height: '40px',
                        paddingLeft: '1rem',
                        paddingRight: '1rem',
                        border: '1px solid grey'
                      }} onClick={() => findProductAndSet()}>
                    Buscar
              </button>
              </div>
              </div>


          <h1 style={{marginTop: '1rem'}}>Categorias</h1>
          {TypeCategories.map((e, index) => {
            return <div key={index} style={{display: 'flex', marginTop: '.4rem'}}>
              <input onChange={(e) => filterByCategorie(index, e.target.checked)} type='checkbox' style={{marginRight: '.5rem'}}/>
              <p>{e}</p>
              
            </div>
          })}
          <div style={{marginTop:'.5rem', marginBottom: '.5rem', width: '100%', height: '1px', background: 'rgba(0,0,0, 0.2)'}}></div>

          <h1>Tipo de pieza</h1>
          {TypeOfPiece.map((e, index) => {
            return <div key={index} style={{display: 'flex', marginTop: '.4rem'}}>
              <input onChange={(e) => filterByType(index, e.target.checked)} type='checkbox' style={{marginRight: '.5rem'}}/>
              <p>{e}</p>
              
            </div>
          })}

          <div style={{marginTop:'.5rem', marginBottom: '.5rem', width: '100%', height: '1px', background: 'rgba(0,0,0, 0.2)'}}></div>
        
          <h1>Marcas</h1>
          <form>
          {TypeBrands.map((e, index) => {
            return <div key={index} style={{display: 'flex', marginTop: '.4rem'}}>
              <input name="colors" onChange={(e) => filterByBrand(index, e.target.checked)} type='checkbox' id='colors' style={{marginRight: '.5rem'}}/>
              <p>{e}</p>
              
            </div>
          })}
          </form>
        
        </div>
        <div className="sidebarM showResponsive" style={{display: 'none'}}>
          <div style={{display: 'flex'}}>
              <div>
                <input
                        style={{
                          marginTop: 'auto',
                          width: '100%',
                          padding: '1.1rem',
                          height: '40px',
                          border: '1px solid grey'
                        }}
                        onChange={(e) => setKeyword(e.target.value)}
                        type="text"
                        name="email"
                        placeholder="Número de parte"
                        value={keywordFind ?? ''}
                      />
              </div>
            <div>
                <button style={{
                          
                          height: '40px',
                          paddingLeft: '1rem',
                          paddingRight: '1rem',
                          border: '1px solid grey'
                        }} onClick={() => findProductAndSet()}>
                      Buscar
                </button>
                </div>
            </div>
          <div className="displayFlexResponsive" style={{marginTop: '2rem'}}>
            


            
            <Popover
              onClickOutside={()=> setPopoverOpenCategorie(false)}
              containerStyle={{
                backgroundColor: 'white',
                padding: '1.3rem',
                border: '1px solid rgba(0, 0, 0, 0.2)',
                borderRadius: '.5rem'
              }}
              isOpen={isPopoverOpenCategorie}
              positions={['bottom', 'top', 'left', 'right']} // preferred positions by priority
              content={
                <form>
                  {TypeCategories.map((e, index) => {
                    return <div onClick={()=> setPopoverOpenCategorie(false)} key={index} style={{cursor: 'pointer', display: 'flex', marginTop: '.4rem'}}>
                      <input onChange={(e) => filterByCategorie(index, e.target.checked)} type='checkbox' style={{marginRight: '.5rem'}}/>
                      <p>{e}</p>
                      
                    </div>
                  })}
                </form>
              }>
                <h1 style={{cursor: 'pointer'}} onClick={()=> setPopoverOpenCategorie(true)}>Categorias</h1>
            </Popover>
            <Popover
              onClickOutside={()=> setPopoverOpenType(false)}
              containerStyle={{
                backgroundColor: 'white',
                padding: '1.3rem',
                border: '1px solid rgba(0, 0, 0, 0.2)',
                borderRadius: '.5rem'
              }}
              isOpen={isPopoverOpenType}
              positions={['bottom', 'top', 'left', 'right']} // preferred positions by priority
              content={
                <form>
                  {TypeOfPiece.map((e, index) => {
                    return <div onClick={()=> setPopoverOpenType(false)} key={index} style={{cursor: 'pointer', display: 'flex', marginTop: '.4rem'}}>
                      <input onChange={(e) => filterByType(index, e.target.checked)} type='checkbox' style={{marginRight: '.5rem'}}/>
                      <p>{e}</p>
                      
                    </div>
                  })}
                </form>
              }>
                <h1 style={{cursor: 'pointer'}} onClick={()=> setPopoverOpenType(true)}>Tipo de pieza</h1>
            </Popover>
            <Popover
              onClickOutside={()=> setPopoverOpenBrand(false)}
              containerStyle={{
                backgroundColor: 'white',
                padding: '1.3rem',
                border: '1px solid rgba(0, 0, 0, 0.2)',
                borderRadius: '.5rem'
              }}
              isOpen={isPopoverOpenBrand}
              positions={['bottom', 'top', 'left', 'right']} // preferred positions by priority
              content={
                <form>
                  {TypeBrands.map((e, index) => {
                    return <div onClick={()=> setPopoverOpenBrand(false)}  key={index} style={{cursor: 'pointer', display: 'flex', marginTop: '.4rem'}}>
                      <input name="colors" onChange={(e) => filterByBrand(index, e.target.checked)} type='checkbox' id='colors' style={{marginRight: '.5rem'}}/>
                      <p>{e}</p>
                      
                    </div>
                  })}
                </form>
              }>
                <h1 style={{cursor: 'pointer'}} onClick={()=> setPopoverOpenBrand(true)}>Marcas</h1>
            </Popover>
          </div>
        </div>


        <div className="contentM">
          <div style={{marginTop: '0rem', padding: '.6rem', width: '100%', borderRadius: '.5rem', border: '1px solid rgba(0, 0, 0, 0.2)'}}>
            <p>Se encontraron <span style={{fontWeight: '700'}}>{items?.length ?? 0} productos</span></p>
          </div>
          {items?.length > 0 ? <div>
            <div className="gridItems">
            {items?.slice(
                  currentPage * postPerPage - postPerPage,
                  currentPage * postPerPage
            ).map((e, index) => <CardMarketPlace key={index} item={e} setCart={setCart} setAmmountItem={setAmmountItem} ammountItem={ammountItem} cart={cart}/>)}

          </div>
          <Pagination
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
              postPerPage={postPerPage}
              postData={items ?? []}
            />
            </div>
          : <div> </div>}
        </div>
      </div>
      <Footer/>
      </div>}
        
    </div>
}
export default LayoutMarketPlaceFindItem;




