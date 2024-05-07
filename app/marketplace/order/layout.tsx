'use client';


import {TypeBrands } from "@/models/brands";
import { useState, useEffect } from "react";
import '../index.css';
import HeaderMarketPlace, { getTotalPrice } from "@/components/marketplace/header";
import '../../../components/marketplace/background/index.css';
import { CartProps, OrderModel } from "@/models/orders.model";
import { useRouter, useSearchParams } from 'next/navigation';
import Logo from '../../../public/images/logo/logopreferente.png';
import '../payment/index.css';
import { BankOptions, OrderStates } from "../payment/bank";
import './index.css';
import IonIcon from "@reacticons/ionicons";
import { getOrder } from "@/app/api/orderss/call";
import AwaitPaymentView from "./awaitPayment";
import ConfirmedPaymentView from "./confirmedPayment";
import Footer from "@/components/dashboard/Footer";


const LayoutMarketPlaceOrderView = () => {
    const router = useRouter();
    
    const [cart, setCart] = useState<CartProps[]>();
    const [order, setOrder] = useState<OrderModel>(null);
    const getStaticOrder = async () => {
        const urlParams = new URLSearchParams(window.location.search);
        let id = urlParams.get('id');
        if(id !== null && id?.length > 0){
            setOrder(await getOrder(id) ?? {});
        }
    }
    
    useEffect(() => {
        setCart(JSON.parse(sessionStorage.getItem('cart')));
        getStaticOrder();

    }, []);

    return <div>
        {order === null ? <IonIcon name='chevron-collapse-outline' className="rotateItem" color='#1366D9' style={{fontSize: '1.5rem', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}/> : 
        <div>
            {Number(order?.state) < 2 ? <AwaitPaymentView cartItems={order.items} order={order}/> : <ConfirmedPaymentView cartItems={order.items} order={order}/>}
            <Footer/>
        </div>}
    
</div>
}
export default LayoutMarketPlaceOrderView;