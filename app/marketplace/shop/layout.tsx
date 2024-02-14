'use client';

import { getMarketPlace } from "@/app/api/inventory/call";
import { getUser } from "@/app/api/user/call";
import backgroundImage from '../../../public/images/logo/background3.webp';
import CardMarketPlace from "@/components/marketplace/item";
import { TypeCategories, TypeOfPiece, TypeBrands } from "@/models/brands";
import { UserModel } from "@/models/userModel";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import '../index.css';
import HeaderMarketPlace from "@/components/marketplace/header";
import { InventoryModel } from "@/models/inventoryModel";
import '../../../components/marketplace/background/index.css';
const LayoutMarketPlaceShop = () => {
    const searchParams = useSearchParams()
    const search = searchParams.get('id');
    const [user, setUser] = useState<UserModel>();
    const [inventoryRealData, setInventoryRealData] = useState<InventoryModel[]>([]);
    const [inventoryData, setInventoryData] = useState<InventoryModel[]>([]);

    const toUser = async () => {
        const userr = await getMarketPlace(search);
        setInventoryRealData(userr?.items ?? []);
        setInventoryData(userr?.items ?? []);
        setUser(userr?.user);
    }
    useEffect(() => {
        toUser();
    }, []);
    return <>
    <HeaderMarketPlace/>
    <div className="background" style={{backgroundPosition: '50%',backgroundImage: `url(${backgroundImage.src})`, height: '200px'}}>
        <img style={{margin: 'auto', marginTop: '3rem', height: '40px'}} src={user?.image}/>
    </div>
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
          <p>Se encontraron <span style={{fontWeight: '700'}}>{inventoryData?.length} productos</span></p>
        </div>
        <div className="gridItems">
          {inventoryData?.map((e) => <CardMarketPlace item={e}/>)}

        </div>
      </div>
    </div>
    </>
}
export default LayoutMarketPlaceShop;