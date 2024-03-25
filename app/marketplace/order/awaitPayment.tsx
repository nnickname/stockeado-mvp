'use client';
import { getTotalPrice } from "@/components/marketplace/header";
import { CartProps, OrderModel } from "@/models/ordersModel";
import { useRouter } from "next/navigation";
import { FunctionComponent, useState } from "react";
import Logo from '../../../public/images/logo/logopreferente.png';
import IonIcon from "@reacticons/ionicons";
import { BankOptions } from "../payment/bank";
import Modal from "react-responsive-modal";
import 'react-responsive-modal/styles.css';
import { updateOrderState } from "@/app/api/orderss/call";

export type StepsOfPaymentType = {
    cartItems: CartProps[]
    order: OrderModel
}
const AwaitPaymentView: FunctionComponent<StepsOfPaymentType> = ({cartItems, order}) => {
    const router = useRouter();
    const [open, setOpen] = useState<boolean>();
    const confirmPayment = async () => {
        const response = await updateOrderState({_id: order?._id, state: 2});
        if(response !== null) {
            window.location.reload();
        }
    }
    return <div>
        <div>
            <p style={{padding: '1rem', color: '#3662E3', cursor: 'pointer'}} onClick={() => router.push('/marketplace')}><IonIcon name="chevron-back-outline"/> Regresar al Marketplace</p>

            <div className="payment">
                <div className="selectPayment">
                    <img style={{marginRight: 'auto', marginLeft: 'auto', maxWidth: '250px', marginBottom: '2rem'}} src={Logo?.src} alt='LogoStockeado'/>
                    
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <div style={{display: 'flex', marginRight: 'auto'}}>
                            {Number(order?.state) > 0 ? <IonIcon style={{color: 'green', fontSize: '1.7rem'}} name="checkmark-circle"/> : <IonIcon style={{color: '#F29339', fontSize: '1.7rem'}} name="warning-outline"/>}
                            
                            <p style={{fontWeight: '500', marginLeft: '.5rem', fontSize: '1.2rem'}}>{Number(order?.state) > 0 ? 'Pedido Confirmado' : 'Pedido Pendiente'}</p>
                        </div>
                        <p style={{fontWeight: '500', marginRight: 'auto', color: 'tomato'}}> {Number(order?.state) >= 1 ? 'Pendiente Pago' : ''}</p>
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

                    {cartItems?.map((e, index) => {
                    const nameString = e?.item?.name +  ' ' + e?.item?.model;
                    return <div key={index}>
                        <div style={{width: '100%', display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(220, 220, 220, .3)'}}>
                            <img style={{width: '85px', maxHeight: '85px'}} src={e?.item?.image} alt='Product Image' />
                            <p style={{maxWidth: '200px',}} className="dark:text-body-color-dark mb-1 text-base !leading-relaxed text-body-color sm:text-sm md:text-sm" >
                            {nameString.substring(0, 30)}...
                            </p>
                            <p className="dark:text-body-color-dark mb-1 text-base !leading-relaxed text-body-color sm:text-sm md:text-sm" >
                            {String(e?.ammount)}</p>
                            <p className="dark:text-body-color-dark mb-1 text-base !leading-relaxed text-body-color sm:text-sm md:text-sm" >
                            s/. {(Number(e?.item?.priceSelling) * e?.ammount).toFixed(2)}</p>
                                
                        </div>
                    </div>
                })}

                </div>
                <div style={{marginTop: '2rem', display: 'flex', justifyContent: 'space-between'}}>
                    <p style={{fontSize: '.9rem'}}>Costo envío</p>
                    <p style={{fontSize: '.9rem'}}>s/. 15.0</p>
                </div>
                <div style={{marginTop: '.2rem', display: 'flex', justifyContent: 'space-between'}}>
                    <p style={{fontSize: '1.1rem'}}>Total</p>
                    <p>s/. {(Number(getTotalPrice(cartItems, true)).toFixed(2))}</p>
                </div>

                <BankOptions/>
                <button onClick={() => setOpen(true)} style={{marginTop: '2rem', padding: '.5rem', textAlign: 'center', width:'100%', background: 'linear-gradient(180deg, #127FFF 0%, #3662E3 100%)', color: 'white'}}>Confirmar Pago</button>
                    </div>
                </div>
                <div style={{textAlign: 'center'}}>
                    <p style={{marginTop: '2rem', fontSize: '1rem'}}>¿Tenes alguna duda?</p>
                    <button className="btn-whatsapp">
                        
                        <IonIcon style={{marginRight: '1rem'}} name="logo-whatsapp"/>
                        Escribenos por WhatsApp
                    </button>
                </div>
            </div>
            <Modal closeIcon={<IonIcon name="close"/>} styles={{
              modal : {borderRadius: '1rem', minWidth: '500px', padding: '0rem'},
              closeIcon: {color: 'white !important'},
              overlay: {backgroundColor: 'rgba(220, 217, 217, 0.5)'}
            }}  open={open} center onClose={() => setOpen(false) }>
              <p style={{background: 'linear-gradient(89deg, var(--token-dc60c65c-2692-4b09-8d77-49a86f7aedee, rgb(24, 36, 61)) /* {"name":"Azul prinicipal"} */ 0%, var(--token-1632e6e1-d1e5-427f-b435-20cb1e67f695, rgb(54, 98, 227)) /* {"name":"Azul claro"} */ 123.5068681091516%)', width: '100%', padding: '1rem', color:'white'}}>Confirmar Pago</p>
                <div style={{marginTop: '2rem', padding: '1rem'}}>
                    <p> ¿Estas seguro que quieres confirmar el pago?</p>
                    <p style={{marginTop: '.2rem', color: 'grey'}}> Recuerda que para acelerar el proceso puedes enviar el comprobante por WhatsApp</p>
                    <div style={{display: 'flex', padding: '2rem', textAlign: 'center'}}>
                    <button onClick={() => setOpen(false)} style={{width: '100%', fontSize: '1rem', borderRadius: '.5rem', padding: '.2rem', paddingLeft: '1rem', paddingRight: '1rem', marginRight: '1rem', backgroundColor: '#1366D9', color: 'white'}}>Cancelar</button>
                    <button onClick={() => {
                        confirmPayment();
                    }} style={{width: '100%', fontSize: '1rem', borderRadius: '.5rem', padding: '.2rem', paddingLeft: '1rem', paddingRight: '1rem', marginRight: '1rem', backgroundColor: 'green', color: 'white'}}>Confirmar</button>

                    </div>
          </div>

          </Modal>
          
    </div>
}

export default AwaitPaymentView;