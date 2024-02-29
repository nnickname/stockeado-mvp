'use client';

import { getCartCookies, getMarketPlace } from "@/app/api/inventory/call";
import { getUser } from "@/app/api/user/call";
import backgroundImage from '../../../public/images/logo/background3.webp';
import CardMarketPlace from "@/components/marketplace/item";
import { TypeCategories, TypeOfPiece, TypeBrands } from "@/models/brands";
import { UserModel } from "@/models/userModel";
import { useState, useEffect } from "react";
import '../index.css';
import HeaderMarketPlace, { getTotalPrice } from "@/components/marketplace/header";
import { InventoryModel } from "@/models/inventoryModel";
import '../../../components/marketplace/background/index.css';
import { CartProps, OrderModel } from "@/models/ordersModel";
import { useRouter, useSearchParams } from 'next/navigation';
import Logo from '../../../public/images/logo/logopreferente.png';
import '../payment/index.css';
import { BankOptions, OrderStates } from "../payment/bank";
import './index.css';
import IonIcon from "@reacticons/ionicons";
import { getOrder } from "@/app/api/orderss/call";


const LayoutMarketPlaceOrderView = () => {
    const search = useSearchParams();
    const id = search.get('id');
    const [cart, setCart] = useState<CartProps[]>();
    const [order, setOrder] = useState<OrderModel>();
    const getStaticOrder = async () => {
        setOrder(await getOrder(id) ?? {});
    }
    const router = useRouter();
    
    useEffect(() => {
        getStaticOrder();
        setCart(JSON.parse(sessionStorage.getItem('cart')));
    }, []);
    return <div>
    <p style={{padding: '1rem', color: '#3662E3', cursor: 'pointer'}}><IonIcon name="chevron-back-outline" onClick={() => router.push('/marketplace')}/> Marketplace</p>

    <div className="payment">
        <div className="selectPayment">
        <img style={{marginRight: 'auto', marginLeft: 'auto', maxWidth: '250px'}} src={Logo?.src} alt='LogoStockeado'/>
        <div className="steptsorders">
                {OrderStates?.map((e, index) => <div className={index > Number(order?.state) ? 'pending' : 'marked'} style={{cursor: 'none !important'}} key={index}>{e}</div>)}

            </div>
        <div style={{width: '100%'}}>
            <div style={{display:'flex', marginTop: '3.5rem'}}>
                <p style={{marginRight: '.5rem', fontWeight: '700'}}>
                    Nombre Completo:
                </p>
                <p> {order?.name + ' ' + order?.lastname}</p>

            </div>

            <div style={{display:'flex', marginTop: '.5rem'}}>
                <p style={{marginRight: '.5rem', fontWeight: '700'}}>
                    Fecha maxima de envio:
                </p>
                <p> {String(order?.maxDate)}</p>

            </div>

            <div style={{display:'flex', marginTop: '.5rem'}}>
                <p style={{marginRight: '.5rem', fontWeight: '700'}}>
                    Dirección:
                </p>
                <p> {order?.direction}</p>

            </div>
            <div style={{display:'flex', marginTop: '.5rem'}}>
                <p style={{marginRight: '.5rem', fontWeight: '700'}}>
                    Tipo de pago:
                </p>
                <p> {order?.payType === 0 ? 'Transferencia' : 'Efectivo'}</p>
               

            </div>´
            {order?.state === 0 ? (order?.payType === 0 ? <BankOptions/> : <></>)   : <></>}
            
            <p style={{marginRight: '.5rem', fontWeight: '700', marginBottom: '1rem', marginTop: '1rem'}}>
                    Pedido:
            </p>
                {order?.items?.map((e, index) => {
                            return <div key={index}>
                            <div style={{display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(220, 220, 220, .3)'}}>
                                <img style={{width: '35px', height: '35px'}} src={e?.item?.image} alt='Product Image' />
                                <p style={{maxWidth: '100px'}} className="dark:text-body-color-dark mb-1 text-base !leading-relaxed text-body-color sm:text-sm md:text-sm" >
                                <p>{e?.item?.name} {TypeBrands[e?.item.brand-1] + ' '} {e?.item?.model }</p></p>
                                <p className="dark:text-body-color-dark mb-1 text-base !leading-relaxed text-body-color sm:text-sm md:text-sm" >
                                {String(e?.ammount)}</p>
                                <p className="dark:text-body-color-dark mb-1 text-base !leading-relaxed text-body-color sm:text-sm md:text-sm" >
                                s/. {Number(e?.item?.price) * e?.ammount}</p>
                                </div>
                            </div>
                })}
                <p style={{color: 'grey', textAlign: 'center'}}>{cart?.length === 0 ? 'No encontramos nada' : 'No encontramos items'}</p>        
                <div style={{marginTop: '2rem', display: 'flex', justifyContent: 'space-between'}}>
                    <p style={{fontSize: '1.1rem'}}>Total</p>
                    <p>s/. {getTotalPrice(order?.items)}</p>
                </div>
                <div style={{textAlign: 'center', width: '100%', color: 'green', marginTop: '3rem', fontSize: '2rem'}}>
                    <IonIcon style={{cursor: 'pointer'}} name="logo-whatsapp"/>
                </div>

            
        </div>
            

        </div>

    </div>
</div>
}
export default LayoutMarketPlaceOrderView;