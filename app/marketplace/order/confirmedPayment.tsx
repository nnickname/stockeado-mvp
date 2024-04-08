'use client';
import { FunctionComponent } from "react";
import { StepsOfPaymentType } from "./awaitPayment";
import { useRouter } from "next/navigation";
import Logo from '../../../public/images/logo/logopreferente.png';
import IonIcon from "@reacticons/ionicons";
import { getTotalPrice } from "@/components/marketplace/header";
import { OrderStates } from "../payment/bank";
import './index.css';
import Link from "next/link";
const ConfirmedPaymentView: FunctionComponent<StepsOfPaymentType> = ({cartItems, order}) => {
    const router = useRouter();
    return <div>
        <div>
            <p style={{padding: '1rem', color: '#3662E3', cursor: 'pointer'}} onClick={() => router.push('/marketplace')}><IonIcon name="chevron-back-outline"/> Regresar al Marketplace</p>

            <div className="payment">
                <div className="selectPayment">
                    <img style={{marginRight: 'auto', marginLeft: 'auto', maxWidth: '250px'}} src={Logo?.src} alt='LogoStockeado'/>
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <div style={{display: 'flex', marginRight: 'auto'}}>
                            {Number(order?.state) > 0 ? <IonIcon style={{color: 'green', fontSize: '1.7rem'}} name="checkmark-circle"/> : <IonIcon style={{color: '#F29339', fontSize: '1.7rem'}} name="warning-outline"/>}
                            
                            <p style={{fontWeight: '500', marginLeft: '.5rem', fontSize: '1.2rem'}}>{Number(order?.state) > 1 ? 'Pago Confirmado' : 'Pedido Pendiente'}</p>
                        </div>
                    </div>

                    <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '1rem'}}>
                        <p style={{fontWeight: '500'}}>Taller: <span style={{marginLeft: '.5rem', fontWeight: '300'}}>{order?.nameShop}</span></p>

                        <p style={{fontWeight: '500'}}> Dirección: <span style={{marginLeft: '.5rem', fontWeight: '300'}}>{order?.direction}</span></p>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '.8rem'}}>
                        <p style={{fontWeight: '500'}}>Nombre: <span style={{marginLeft: '.5rem', fontWeight: '300'}}>{order?.name + ' ' + order?.lastname} </span></p>

                        <p style={{fontWeight: '500'}}> Fecha y hora de envío: <span style={{marginLeft: '.5rem', fontWeight: '300'}}>{order?.maxDate}</span></p>
                    </div>

                    <div>
                    <h2 style={{fontWeight: '600', marginTop: '1rem', marginBottom: '.5rem'}}>Productos:</h2>
                    <div style={{width: '100%', height: '1px', background: 'rgba(0, 0, 0, 0.2)'}}></div>
                        <div style={{display: 'flex', justifyContent: 'space-between', paddingBottom: '1rem', marginTop: '1rem'}}>
                            <p className="dark:text-body-color-dark mb-1 text-base !leading-relaxed text-body-color sm:text-sm md:text-sm" >
                            Imagen</p>
                            <p className="dark:text-body-color-dark mb-1 text-base !leading-relaxed text-body-color sm:text-sm md:text-sm" >
                            Nombre</p>
                            <p className="dark:text-body-color-dark mb-1 text-base !leading-relaxed text-body-color sm:text-sm md:text-sm" >
                            Cantidad</p>
                            <p className="dark:text-body-color-dark mb-1 text-base !leading-relaxed text-body-color sm:text-sm md:text-sm" >
                            Precio</p>
                                
                                
                        </div>
                        {cartItems?.length === 0 ? <p style={{textAlign: 'center', color: 'grey'}}>Todavia no añadiste nada</p> : ''}
                        <div className="responsiveItems">
                        {cartItems?.map((e, index) => {
                                    return <div style={{marginTop: '.5rem'}} key={index}>
                                    <div style={{width: '100%', display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(220, 220, 220, .3)'}}>
                                        <img style={{width: '105px', maxHeight: '105px'}} src={e?.item?.image} alt='Product Image' />
                                        <p className="dark:text-body-color-dark mb-1 text-base !leading-relaxed text-body-color sm:text-sm md:text-sm" >
                                        <p style={{minWidth: '200px', marginLeft: '.5rem'}}>{e?.item?.name + ' '}  {e?.item?.model }</p></p>
                                        <p style={{marginLeft: '.5rem'}} className="dark:text-body-color-dark mb-1 text-base !leading-relaxed text-body-color sm:text-sm md:text-sm" >
                                        {String(e?.ammount)}</p>
                                        <p  className="dark:text-body-color-dark mb-1 text-base !leading-relaxed text-body-color sm:text-sm md:text-sm" style={{marginLeft: '4rem', maxWidth: '100px'}}>
                                        s/. {Number(e?.item?.priceSelling).toFixed(2)}</p>
                                        </div>
                                    </div>
                        })}
                </div>
                        

                    </div>
                    <div style={{marginTop: '2rem', display: 'flex', justifyContent: 'space-between'}}>
                        <p style={{fontSize: '.9rem'}}>Costo envío</p>
                        <p style={{fontSize: '.9rem'}}>s/. {Number(order?.sendPricing).toFixed(2)}</p>
                    </div>
                    <div style={{marginTop: '.2rem', display: 'flex', justifyContent: 'space-between'}}>
                        <p style={{fontSize: '1.1rem'}}>Total</p>
                        <p>s/. {(Number(getTotalPrice(cartItems, true, Number(order?.sendPricing))).toFixed(2))}</p>
                    </div>
                    <textarea disabled style={{marginTop: '1rem', width: '100%', padding: '1rem', border: '1px solid rgba(0, 0, 0, 0.2)'}} placeholder={order?.note === ' ' ? 'Nota' : order?.note} rows={5}/>

                    <div className="steptsorders" style={{marginTop: '0rem'}}>
                        {OrderStates?.map((e, index) => <div className={Number(order?.state) < index ? 'pending' : 'marked'}  key={index}>
                            <p>{e}</p>
                            {Number(order?.state) >= index ? <IonIcon style={{fontSize: '2rem', margin: 'auto'}} name='checkmark-circle'/> : <div style={{marginLeft: 'auto', marginRight: 'auto', width: '1.5rem', height: '1.5rem', borderRadius: '100%', background: 'rgba(0,0,0, 0.2)'}}/>}
                            
                        </div>)}
                    </div>
                    <div style={{textAlign: 'center'}}>
                    <p style={{marginTop: '2rem', fontSize: '1rem'}}>¿Tenes alguna duda?</p>
                    <button className="btn-whatsapp">
                        <Link target='_blank' href="https://api.whatsapp.com/send?phone=+51941531016&text=¿En que podemos ayudarte?">
                        <IonIcon style={{marginRight: '1rem'}} name="logo-whatsapp"/>
                        Escribenos por WhatsApp
                        </Link>
                    </button>
                </div>
                </div>
                
            </div>
        </div>
    </div>
}
export default ConfirmedPaymentView;