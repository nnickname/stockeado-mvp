'use client';

import { getCartCookies, getMarketPlace } from "@/app/api/inventory/call";
import { getUser } from "@/app/api/user/call";
import backgroundImage from '../../../public/images/logo/background3.webp';
import CardMarketPlace from "@/components/marketplace/item";
import { TypeCategories, TypeOfPiece, TypeBrands } from "@/models/brands";
import { UserModel } from "@/models/userModel";
import { useState, useEffect } from "react";
import '../index.css';
import HeaderMarketPlace from "@/components/marketplace/header";
import { InventoryModel } from "@/models/inventoryModel";
import '../../../components/marketplace/background/index.css';
import { CartProps } from "@/models/ordersModel";
import { useSearchParams } from 'next/navigation';





const LayoutMarketPlaceShop = () => {
    const search = useSearchParams();
    const id = search.get('id');
    const [user, setUser] = useState<UserModel>();
    const [inventoryRealData, setInventoryRealData] = useState<InventoryModel[]>([]);
    const [inventoryData, setInventoryData] = useState<InventoryModel[]>([]);
    const [cart, setCart] = useState<CartProps[]>([]);
    const [ammountItem, setAmmountItem] = useState<number>(0);

    const toUser = async () => {
        const userr = await getMarketPlace(id);
        setInventoryRealData(userr?.items ?? []);
        setInventoryData(userr?.items ?? []);
        setUser(userr?.user);
    }
    useEffect(() => {
        
        toUser();
        const cartCast = JSON.parse(sessionStorage.getItem("cart"));
        if(cartCast !== undefined) setCart(cartCast ?? []);
    }, []);
    return <>
    <HeaderMarketPlace cartItems={cart} setCart={setCart}/>
    <img alt="Logo" style={{margin: 'auto', marginTop: '7rem', borderTop: '1px solid rgba(0,0,0, 0.2)', borderBottom: '1px solid rgba(0,0,0, 0.2)'}} src={user?.image}/>
    <div className="marketplace">


      <div className="sidebarM">
        <h1>Categorias</h1>
        {TypeCategories.map((e, index) => {
          return <div key={index} style={{display: 'flex', marginTop: '.4rem'}}>
            <input type='checkbox' style={{marginRight: '.5rem'}}/>
            <p>{e}</p>
            
          </div>
        })}
        <div style={{marginTop:'.5rem', marginBottom: '.5rem', width: '100%', height: '1px', background: 'rgba(0,0,0, 0.2)'}}></div>

        <h1>Tipo de pieza</h1>
        {TypeOfPiece.map((e, index) => {
          return <div key={index} style={{display: 'flex', marginTop: '.4rem'}}>
            <input type='checkbox' style={{marginRight: '.5rem'}}/>
            <p>{e}</p>
            
          </div>
        })}

        <div style={{marginTop:'.5rem', marginBottom: '.5rem', width: '100%', height: '1px', background: 'rgba(0,0,0, 0.2)'}}></div>
      
        <h1>Marcas</h1>
        {TypeBrands.map((e, index) => {
          return <div key={index} style={{display: 'flex', marginTop: '.4rem'}}>
            <input type='checkbox' style={{marginRight: '.5rem'}}/>
            <p>{e}</p>
            
          </div>
        })}
      
      </div>


      <div className="contentM">
        <div style={{paddingRight: 'auto', paddingLeft: 'auto', marginTop: '1rem'}}>
            <p style={{color: 'grey', fontSize: '.8rem', marginBottom: '1rem'}}> MarketPlace {'> ' + user?.nameShop}</p>
        </div>
        <div style={{marginTop: '0rem', padding: '.6rem', width: '100%', borderRadius: '.5rem', border: '1px solid rgba(0, 0, 0, 0.2)'}}>
          <p>Se encontraron <span style={{fontWeight: '700'}}>{inventoryData?.length} productos</span></p>
        </div>
        <div className="gridItems">
          {inventoryData?.map((e, index) => <CardMarketPlace key={index} item={e} setCart={setCart} setAmmountItem={setAmmountItem} ammountItem={ammountItem} cart={cart}/>)}
 
        </div>
      </div>
    </div>
    </>
}
export default LayoutMarketPlaceShop;




