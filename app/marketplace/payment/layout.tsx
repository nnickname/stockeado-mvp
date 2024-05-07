'use client';
import { FunctionComponent, useEffect, useState } from 'react';
import './index.css';
import { CartProps } from '@/models/orders.model';
import { TypeBrands } from '@/models/brands';
import IonIcon from '@reacticons/ionicons';
import Cookie  from 'universal-cookie';
import { getTotalPrice } from '@/components/marketplace/header';
import Logo from '../../../public/images/logo/logopreferente.png';
import { BankOptions } from './bank';
import { NotificationManager} from 'react-notifications';
import { createOrder } from '@/app/api/orderss/call';
import { Router } from 'next/router';
import { useRouter } from 'next/navigation';
import Footer from '@/components/dashboard/Footer';
import { sendMailHookApi } from '@/app/api/email/call';
import { getUser } from '@/app/api/userr/call';






const LayoutMarketPlacePayment = () => {
    const router = useRouter();
    const [name, setName] = useState<string>('');
    const [lastname, setLastName] = useState<string>('');
    const [nameShop, setNameShop] = useState<string>('');
    const [phone, setPhone] = useState<string>('');

    const [ruc, setRuc] = useState<string>('');
    const [direction, setDirection] = useState<string>('');
    const [maxDate, setMaxDate] = useState<string>(null);
    const [cart, setCart] = useState<CartProps[]>([]);
    const [paymentSelected, setPaymentSelected] = useState<Number>(0);
    const [email, setEmail] = useState<string>('');
    const buildForm = async () => {
        if(phone !== '' && ruc !== '' && nameShop !== '' && name !== '' && lastname !== '' && direction !== '' && maxDate !== null){
            if(cart?.length > 0){
                const body = {
                    name,
                    lastname,
                    direction,
                    maxDate,
                    payType: paymentSelected,
                    state: 0,
                    nameShop,
                    ruc,
                    phone,
                    items: cart,
                    sendPricing: '0',
                    sendDate: '0',
                    email: email,
                    note: ' '
                }
                const response = await createOrder(body);
                if(response !== null){
                    await sendMailHookApi({
                        tomail: email,
                        title: 'Stockeado',
                        text: 'Creamos tu orden',
                        orderid: response?._id,
                        templateId: 'd-d3182e5de32145d29fe053124e00a3b0'
                    });
                    await sendMailHookApi({
                        tomail: 'bruno@stockeado.com',
                        title: 'Stockeado',
                        text: 'Creamos tu orden',
                        orderid: response?._id,
                        templateId: 'd-d3182e5de32145d29fe053124e00a3b0'
                    });
                    NotificationManager.success('Creaste una nueva orden', 'Creado');
                    router.push('/marketplace/order?id=' + response?._id);
                }
            } else NotificationManager.error('No tienes elementos en el carrito.', 'Error');
        } else NotificationManager.error('Completa el formulario.', 'Error');
        
    }
    const toUser = async () => {
        const userr = await getUser();
        if(userr !== undefined && userr !== null){
            if(userr?.type === 'workshop'){
                setEmail(userr?.email);
                setName(userr?.name);
                setLastName(userr?.lastname);
                setNameShop(userr?.nameShop);
            }
        }
    }
    useEffect(() => {
        setCart(JSON.parse(sessionStorage.getItem('cart')));
        toUser();
    }, []);
    return <div style={{margin: '0px', padding: '0px'}}>
        <p style={{padding: '1rem', color: '#3662E3', cursor: 'pointer'}} onClick={() => router.push('/marketplace')}><IonIcon name="chevron-back-outline"/> Regresar al Marketplace</p>

        <div className="payment">
            <div className="selectPayment">
            <img style={{marginRight: 'auto', marginLeft: 'auto', maxWidth: '250px'}} src={Logo.src} alt='LogoStockeado'/>

                <h1 style={{marginTop: '1rem', marginBottom: '1rem'}}>1. Introduce tus datos y la fecha máxima de envío. </h1>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <input value={nameShop} onChange={(e) => setNameShop(e.target.value)} placeholder="Nombre del taller"  className="border-stroke dark:text-body-color-dark dark:shadow-two  w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none" style={{background: 'transparent'}}></input>
                    <input value={ruc} onChange={(e) => setRuc(e.target.value)} placeholder="RUC" className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border  px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none" style={{background: 'transparent'}}></input>
                </div>
                <div style={{marginTop: '1rem', display: 'flex', justifyContent: 'space-between'}}>
                    <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Nombre"  className="border-stroke dark:text-body-color-dark dark:shadow-two  w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none" style={{background: 'transparent'}}></input>
                    <input value={lastname} onChange={(e) => setLastName(e.target.value)} placeholder="Apellido" className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border  px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none" style={{background: 'transparent'}}></input>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <input value={direction} onChange={(e) => setDirection(e.target.value)} placeholder="Dirección"  className="border-stroke dark:text-body-color-dark dark:shadow-two  w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none" style={{background: 'transparent'}}></input>
                    <input value={maxDate} onChange={(e) => setMaxDate(e.target.value)} placeholder="Fecha maxima" type='datetime-local' className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border  px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none" style={{background: 'transparent'}}></input>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Correo electrónico" type='email' className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border  px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none" style={{background: 'transparent'}}></input>

                    <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Celular"  className="border-stroke dark:text-body-color-dark dark:shadow-two  w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none" style={{background: 'transparent'}}></input>
                </div>

                
                <h1 style={{marginTop: '2rem', marginBottom: '1rem'}}>2. Revisa tu orden. </h1>
                <p style={{color: 'grey', marginBottom: '2rem', fontSize: '.9rem'}}>Antes de realizar la compra, confirma el pedido para poder calcular la fecha, monto de envío y hora confirmada por el proveedor. Al colocar “Confirmar Pedido” se le notificará al proveedor, Tiempo estimado de 5 a 10 minutos para confirmar orden.</p>

                <div className="responsiveItems">
                {cart?.map((e, index) => {
                            return <div key={index}>
                            <div style={{width: '100%', display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(220, 220, 220, .3)'}}>
                                <img style={{width: '105px', maxHeight: '105px'}} src={e?.item?.image} alt='Product Image' />
                                <p className="dark:text-body-color-dark mb-1 text-base !leading-relaxed text-body-color sm:text-sm md:text-sm" >
                                <p style={{minWidth: '250px', margin: 'auto'}}>{e?.item?.name + ' '}  {e?.item?.brand }</p></p>
                                <p className="dark:text-body-color-dark mb-1 text-base !leading-relaxed text-body-color sm:text-sm md:text-sm" >
                                {String(e?.ammount)}</p>
                                <p  className="dark:text-body-color-dark mb-1 text-base !leading-relaxed text-body-color sm:text-sm md:text-sm" style={{marginLeft: '4rem', maxWidth: '100px'}}>
                                s/. {Number(e?.item?.priceSelling).toFixed(2)}</p>
                                <button  onClick={() => {
                                    setCart(cart?.filter((obj, indexx) => index !== indexx))
                                    sessionStorage.setItem('cart', JSON.stringify(cart?.filter((obj, indexx) => index !== indexx)));

                                }} style={{color: '#ff6347', marginLeft: '2rem', minWidth: '100px'}}><IonIcon name="trash-outline" color='#ff6347'/></button>
                            </div>
                            </div>
                })}
                </div>
                <p style={{color: 'grey', textAlign: 'center'}}>{cart?.length === 0 ? 'No encontramos nada' : ''}</p>        
                <div style={{marginTop: '3rem', display: 'flex', justifyContent: 'space-between'}}>
                    <p style={{fontSize: '1.1rem'}}>Total</p>
                    <p >s/. {Number(getTotalPrice(cart, false, 0)).toFixed(2)}</p>
                </div>
                <button type='button' onClick={() => buildForm()} style={{marginTop: '1rem', padding: '.5rem', textAlign: 'center', width:'100%', background: 'linear-gradient(180deg, #127FFF 0%, #3662E3 100%)', color: 'white'}}>Confirmar Pedido</button>
                
                <div style={{textAlign: 'center'}}>
                    <p style={{marginTop: '3rem', fontSize: '1rem'}}>¿Tenes alguna duda?</p>
                    <button className="btn-whatsapp">
                        
                        <IonIcon style={{marginRight: '1rem'}} name="logo-whatsapp"/>
                        Escribenos por WhatsApp
                    </button>
                </div>
                

            </div>

        </div>
        <Footer/>

    </div>
}
export default LayoutMarketPlacePayment;