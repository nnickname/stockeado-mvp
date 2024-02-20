'use client';
import { FunctionComponent, useState } from 'react';
import './index.css';
import { CartProps } from '@/models/ordersModel';
import { TypeBrands } from '@/models/brands';
import IonIcon from '@reacticons/ionicons';
import Cookie  from 'universal-cookie';
import { getTotalPrice } from '@/components/marketplace/header';
import Logo from '../../../public/images/logo/logopreferente.png';
import { BankOptions } from './bank';




type MarketPlacePaymentLayoutType = {
    cartItems: CartProps[]
}


export const OrderStates = ['Pendiente', 'Confirmado', 'Enviando', 'Entregado'];

const LayoutMarketPlacePayment: FunctionComponent<MarketPlacePaymentLayoutType> = ({cartItems}) => {
    const [name, setName] = useState<string>('');
    const [lastname, setLastName] = useState<string>('');
    const [direction, setDirection] = useState<string>('');
    const [maxDate, setMaxDate] = useState<Date>(null);
    const [cart, setCart] = useState<CartProps[]>(cartItems);
    

    const [paymentSelected, setPaymentSelected] = useState<Number>(0);
    return <div style={{margin: '0px', padding: '0px'}}>
        <p style={{padding: '1rem', color: '#3662E3', cursor: 'pointer'}}><IonIcon name="chevron-back-outline"/> Marketplace</p>

        <div className="payment">
            <div className="selectPayment">
            <img style={{marginRight: 'auto', marginLeft: 'auto', maxWidth: '250px'}} src={Logo.src} alt='LogoStockeado'/>

                <h1 style={{marginTop: '1rem', marginBottom: '1rem'}}>1. Introduce tus datos y la fecha maxima de envio</h1>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Nombre"  className="border-stroke dark:text-body-color-dark dark:shadow-two  w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none" style={{background: 'transparent'}}></input>
                    <input value={lastname} onChange={(e) => setLastName(e.target.value)} placeholder="Apellido" className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border  px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none" style={{background: 'transparent'}}></input>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <input value={direction} onChange={(e) => setDirection(e.target.value)} placeholder="Dirección"  className="border-stroke dark:text-body-color-dark dark:shadow-two  w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none" style={{background: 'transparent'}}></input>
                    <input value={String(maxDate)} onChange={(e) => setMaxDate(new Date(e.target.value))} placeholder="Fecha maxima" type='date' className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border  px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none" style={{background: 'transparent'}}></input>
                </div>
                
                <h1 style={{marginTop: '2rem', marginBottom: '2rem'}}>2. Selecciona un medio de pago</h1>
                <div className="cards">
                    <div  className={'card ' + (paymentSelected === 0 ? 'selected': '')} onClick={() => setPaymentSelected(0)}>
                        <p>Transferencia</p>
                    </div>
                    <div  className={'card ' + (paymentSelected === 1 ? 'selected': '')} onClick={() => setPaymentSelected(1)}>
                        <p>Tarjeta de credito o debito</p>

                    </div>
                    <div  className={'card ' + (paymentSelected === 2 ? 'selected': '')} onClick={() => setPaymentSelected(2)}>
                        <p>Efectivo</p>

                    </div>
                </div>
                {paymentSelected === 0 ? BankOptions() : <></>}
                <h1 style={{marginTop: '2rem', marginBottom: '2rem'}}>3. Revisa tu orden</h1>

                {cart?.map((e, index) => {
                            return <div key={index}>
                            <div style={{display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(220, 220, 220, .3)'}}>
                                <img style={{width: '35px', height: '35px'}} src={e?.item?.image} alt='Product Image' />
                                <p style={{maxWidth: '100px'}} className="dark:text-body-color-dark mb-1 text-base !leading-relaxed text-body-color sm:text-sm md:text-sm" >
                                <p>{e?.item?.name} {TypeBrands[e?.item.brand-1] + ' '} {e?.item?.model }</p></p>
                                <p className="dark:text-body-color-dark mb-1 text-base !leading-relaxed text-body-color sm:text-sm md:text-sm" >
                                {String(e?.ammount)}</p>
                                <p className="dark:text-body-color-dark mb-1 text-base !leading-relaxed text-body-color sm:text-sm md:text-sm" >
                                s/. {Number(e?.item?.price) * e?.ammount}</p>
                                <button onClick={() => {
                                    const cookies = new Cookie();
                                    setCart(cartItems.filter((obj, indexx) => index !== indexx))
                                    cookies.set('cart', JSON.stringify(cartItems.filter((obj, indexx) => index !== indexx)), { path: '/' })

                                }} style={{color: '#ff6347'}}><IonIcon name="trash-outline" color='#ff6347'/></button>
                            </div>
                            </div>
                })}
                <p style={{color: 'grey', textAlign: 'center'}}>{cart?.length === 0 ? 'No encontramos nada' : 'No encontramos items'}</p>        
                <div style={{marginTop: '2rem', display: 'flex', justifyContent: 'space-between'}}>
                    <p style={{fontSize: '1.1rem'}}>Total</p>
                    <p>s/. {getTotalPrice(cartItems)}</p>
                </div>
                <button style={{padding: '.5rem', textAlign: 'center', width:'100%', background: 'linear-gradient(180deg, #127FFF 0%, #3662E3 100%)', color: 'white'}}>Confirmar</button>
                <div style={{textAlign: 'center', width: '100%', color: 'green', marginTop: '3rem', fontSize: '2rem'}}>
                    <IonIcon style={{cursor: 'pointer'}} name="logo-whatsapp"/>
                </div>
                

            </div>

        </div>
    </div>
}
export default LayoutMarketPlacePayment;