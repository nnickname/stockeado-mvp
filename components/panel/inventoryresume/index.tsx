import IonIcon from '@reacticons/ionicons';
import './index.css';

import Image from 'next/image';
import { InventoryModel } from '@/models/inventory.model';
import { FunctionComponent } from 'react';
import { CartProps, OrderModel } from '@/models/orders.model';
import { TypeBrands } from '@/models/brands';
import { getTotalSellings } from '../sellresume';
import { UserModel } from '@/models/user.model';
type InventoryResume = {
    items: InventoryModel[],
    orders: OrderModel[],
    user: UserModel
}
export const getTotalPriceInventory = (cartItems: InventoryModel[] ) => {
    var price: number = 0;
    cartItems?.map((e) => {
      price = price + (Number(e?.priceSelling) * Number(e?.ammount));
    })
    
        return String(price.toFixed(2));
}
const getTotalItems = (orders: OrderModel[], id: String) => {
    var count = 0;
    orders?.map((e) => {
        if(Number(e?.state) > 3)
        e?.items?.map((a) => {
            if(String(a.item.owner_id) === id) count = count + Number(a.ammount);
        })
    })
    return count;
}
const getTotalValueinS = (orders: OrderModel[], id: String) => {
    var count = 0;
    orders?.map((e) => {
        if(Number(e?.state) > 3)
        e?.items?.map((a) => {
            if(String(a.item.owner_id) === id) count = count + (Number(a.item?.priceSelling) * Number(a.ammount));
        })
    })
    return count.toFixed(2);
}


export const getNoneStock = (cartItems: InventoryModel[] ) => {
    var low: number = 0;
    cartItems?.map((e) => {
      if(Number(e?.ammount) < 1){
        low++;
      }
    })
        return String(low);
}
export const getLowStockAmmount = (cartItems: InventoryModel[] ) => {
    var low: number = 0;
    cartItems?.map((e) => {
      if(Number(e?.ammount) < 5){
        low++;
      }
    })
        return String(low);
}
export const getTotalBrands = (cartItems: InventoryModel[] ) => {
    var brands: String[] = [];
    var validatemoment: boolean;
    cartItems?.map((e) => {
        for(var i=0; i<brands?.length; i++){
            if(brands[i] === TypeBrands[e?.brand]){
                validatemoment = true;
            } else validatemoment = false;
            if(i === 0) brands.slice(0, 1);
        }
        if(!validatemoment) brands.push(TypeBrands[e?.brand])
    })
        return String(brands?.length);
}
const InventoryResume: FunctionComponent<InventoryResume> = ({items, orders, user}) => {
    return <div  className="content-frame-container resume">
        <div style={{width: '100%', textAlign: 'left'}}>
            <h1>Resumen de Inventario</h1>
            <div className="resumeContainer displayGridResponsive" style={{display: 'flex'}}>

                <div style={{padding: '1rem', paddingRight: '3rem', borderRight: '1px solid rgba(230, 230, 230, 0.5)'}}>
                    <h1 style={{color: '#1570EF', marginBottom: '.3rem'}}>Marcas</h1>
                    <p>{getTotalBrands(items)}</p>
                </div>

                <div style={{padding: '1rem', width: '100%', borderRight: '1px solid rgba(230, 230, 230, 0.5)'}}>
                    <h1 style={{color: '#E19133', marginBottom: '.3rem'}}>Total productos</h1>
                    <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '.3rem'}}>
                        <p>{items?.length}</p>
                        <p>
                             {getTotalPriceInventory(items)}
                        </p>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <p style={{color: '#858D9D', fontSize: '.8rem'}}>Productos</p>
                        <p style={{color: '#858D9D', fontSize: '.8rem'}}> Valor en soles</p>
                    </div>
                </div>

                <div style={{padding: '1rem', width: '100%', borderRight: '1px solid rgba(230, 230, 230, 0.5)'}}>
                    <h1 style={{color: '#58D365', marginBottom: '.3rem'}}>Total ventas</h1>
                    <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '.3rem'}}>
                        <p>{getTotalItems(orders, String(user?._id))}</p>
                        <p> {getTotalValueinS(orders, String(user?._id))}</p>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <p style={{color: '#858D9D', fontSize: '.8rem'}}>Unidades</p>
                        <p style={{color: '#858D9D', fontSize: '.8rem'}}> Valor en soles</p>
                    </div>
                </div>

                <div style={{padding: '1rem', width: '100%'}}>
                    <h1 style={{color: '#F36960', marginBottom: '.3rem'}}>Bajo Stock</h1>
                    <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '.3rem'}}>
                        <p>{getLowStockAmmount(items)}</p>
                        <p> {getNoneStock(items)}</p>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <p style={{color: '#858D9D', fontSize: '.8rem'}}>productos</p>
                        <p style={{color: '#858D9D', fontSize: '.8rem'}}> {'sin stock'}</p>
                    </div>
                </div>

            </div>
        </div>
        

    </div>
}
export default InventoryResume;