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


const LayoutMarketPlaceFindItem = () => {
    const [items, setItems] = useState<InventoryModel[]>([]);
    const [cart, setCart] = useState<CartProps[]>([]);
    const search = useSearchParams();
    const name = search.get('name');
    const [ammountItem, setAmmountItem] = useState<number>(0);
    const findStaticProducts = async() => {
      if(name?.length > 3) {
        const response = await findProduct(name);
        setItems(response ?? []);
      }
    }
    useEffect(() => {
        const cartCast = JSON.parse(sessionStorage.getItem("cart"));
        if(cartCast !== undefined) setCart(cartCast ?? []);
        findStaticProducts();
    }, [name]);
    return <div>
        <HeaderMarketPlace cartItems={cart} setCart={setCart}/>
        <BackgroundImage/>
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
          <div style={{marginTop: '0rem', padding: '.6rem', width: '100%', borderRadius: '.5rem', border: '1px solid rgba(0, 0, 0, 0.2)'}}>
            <p>Se encontraron <span style={{fontWeight: '700'}}>{items?.length ?? 0} productos</span></p>
          </div>
          <div className="gridItems">
            {items?.map((e, index) => <CardMarketPlace key={index} item={e} setCart={setCart} setAmmountItem={setAmmountItem} ammountItem={ammountItem} cart={cart}/>)}


          </div>
        </div>
      </div>
    </div>
}
export default LayoutMarketPlaceFindItem;