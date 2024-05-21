'use client';
import { TypeBrands } from "@/models/brands"
import { OrderModel } from "@/models/orders.model"
import { FunctionComponent, useState } from "react"
import { BankOptions, OrderStates } from "../../marketplace/payment/bank";
import 'react-responsive-modal/styles.css';
import '../../marketplace/order/index.css';
import { getTotalPrice } from "@/components/marketplace/header";
import { updateOrderState } from "../../api/provider/orders/call";
import IonIcon from "@reacticons/ionicons";
import { sendMailHookApi } from "../../api/email/call";
import changesEmailTemplate from "@/utils/mail/orders/changes";
type editModalProps = {
    order: OrderModel
}
const EditModalOrder: FunctionComponent<editModalProps> = ({order}) => {
    const [orderState, setOrderState] = useState<number>(Number(order?.state));
    const [onNotify, setOnNotify] = useState(null);    
    const [maxTime, setTime] = useState<string>('');    
    const [note, setNote] = useState<string>('');
    const [price, setSendPrice] = useState<string>(' ');
    const modifyState = async () => {
        const object = {
            state: orderState,
            maxDate: maxTime === '' ? order?.maxDate : maxTime,
            note: note  === '' ? order?.note : note,
            sendPricing: price === ' ' ? order?.sendPricing : price
        };
        if(onNotify === 'on'){
            await sendMailHookApi({
                tomail: order?.email,
                title: 'Stockeado',
                text: 'Cambios en tu orden',
                orderid: order?._id,
                templateId: 'd-b37913b490ea441585e50e70243d958d'
            });
        }
        const response = await updateOrderState({_id: order?._id, ...object});
        if(response) window.location.reload();
    }
    return <div>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <p style={{color: 'grey', fontSize: '.8rem', marginRight: 'auto' }}>Baja para guardar</p>
            <p style={{color: 'grey', fontSize: '.8rem', marginRight: 'auto'}}>id: {String(order?._id)}</p>
        </div>
        <div className="steptsorders" style={{marginTop: '0rem'}}>
                {OrderStates?.map((e, index) => <div style={{cursor: 'pointer'}} onClick={() => setOrderState(index)} className={orderState < index ? 'pending' : 'marked'}  key={index}>
                <p>{e}</p>
                {Number(orderState) >= index ? <IonIcon style={{fontSize: '2rem', margin: 'auto'}} name='checkmark-circle'/> : <div style={{marginLeft: 'auto', marginRight: 'auto', width: '1.5rem', height: '1.5rem', borderRadius: '100%', background: 'rgba(0,0,0, 0.2)'}}/>}
           </div>)}
        </div>
        
        <div style={{marginTop: '2rem', display: 'flex', justifyContent: 'space-between'}}>
                        <div style={{display: 'flex',}}>
                            {Number(order?.state) > 0 ? <IonIcon style={{color: 'green', fontSize: '1.7rem'}} name="checkmark-circle"/> : <IonIcon style={{color: '#F29339', fontSize: '1.7rem'}} name="warning-outline"/>}
                            
                            <p style={{fontWeight: '500', marginLeft: '.5rem', fontSize: '1.2rem'}}>{Number(order?.state) > 0 ? 'Pedido Confirmado' : 'Pedido Pendiente'}</p>
                        </div>
                        <p style={{fontWeight: '500', color: 'tomato'}}> {Number(order?.state) >= 2 ? '' : 'Pendiente Pago'}</p>
                    </div>

                    <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '1rem'}}>
                        <p style={{fontWeight: '500'}}>Taller: <span style={{marginLeft: '.5rem', fontWeight: '300'}}>{order?.nameShop}</span></p>

                        <p style={{fontWeight: '500'}}> Dirección: <span style={{marginLeft: '.5rem', fontWeight: '300'}}>{order?.direction}</span></p>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '.8rem'}}>
                        <p style={{fontWeight: '500'}}>Nombre: <span style={{marginLeft: '.5rem', fontWeight: '300'}}>{order?.name + ' ' + order?.lastname} </span></p>

                        <div>
                            <p style={{marginLeft: '.5rem', fontWeight: '500'}}> Fecha y hora de envío: <span style={{fontWeight: '300'}}>{order?.maxDate}</span></p>
                            <input value={maxTime} onChange={(e) => setTime(e.target?.value)} type="datetime-local" style={{padding: '.5rem', border: '1px solid rgba(0, 0, 0, 0.2)'}} placeholder={order?.maxDate}/>
                        </div>
                    </div>
        <p style={{marginRight: '.5rem', fontWeight: '700', marginBottom: '1rem', marginTop: '1rem'}}>
            Pedido:
        </p>
        <div style={{overflowX: 'scroll'}}>
        {order?.items?.map((e, index) => {
            const nameString = e?.item?.name + ' ' + e?.item?.brand ;
            return <div style={{marginTop: '.5rem'}} key={index}>
                    <div style={{width: '100%', display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(220, 220, 220, .3)'}}>
                        <img style={{width: '105px', maxHeight: '105px'}} src={e?.item?.image} alt='Product Image' />
                        <p className="dark:text-body-color-dark mb-1 text-base !leading-relaxed text-body-color sm:text-sm md:text-sm" >
                        <p style={{minWidth: '200px', marginLeft: '.5rem'}}>{nameString.substring(0, 30)}...</p></p>
                        <p style={{marginLeft: '.5rem'}} className="dark:text-body-color-dark mb-1 text-base !leading-relaxed text-body-color sm:text-sm md:text-sm" >
                           {String(e?.ammount)}</p>
                        <p  className="dark:text-body-color-dark mb-1 text-base !leading-relaxed text-body-color sm:text-sm md:text-sm" style={{marginLeft: '4rem', maxWidth: '100px'}}>
                        s/. {Number(e?.item?.priceSelling).toFixed(2)}</p>
                    </div>
                </div>
        })}
        </div>
        <p style={{color: 'grey', textAlign: 'center'}}>{order?.items?.length === 0 ? 'No encontramos nada' : ''}</p>        
        <div style={{marginTop: '2rem', display: 'flex', justifyContent: 'space-between'}}>
            <p style={{fontSize: '1rem'}}>Costo envío</p>
            <input onChange={(e) => setSendPrice(e.target.value)} value={price === ' ' ? (isNaN(Number(order?.sendPricing)) ? '0.0' : Number(order?.sendPricing).toFixed(2)) : price} style={{padding: '.5rem', border: '1px solid rgba(0, 0, 0, 0.2)'}} placeholder={isNaN(Number(order?.sendPricing)) ? '0.0' : Number(order?.sendPricing).toFixed(2)}/>
        </div>
        
        <textarea onChange={(e) => setNote(e.target.value)} value={note} rows={5} style={{width: '100%', padding: '.5rem', marginTop: '1rem', border: '1px solid rgba(0, 0, 0, 0.2)'}} placeholder='Nota'/>
        <div style={{display: 'flex', margin: '.5rem'}}>
              <input value={onNotify} onChange={(e) => setOnNotify(e.target.value)} type='checkbox' style={{marginRight: '.5rem'}}/>
              <p> ¿Deseas enviar cambios por Correo Electronico al cliente?</p>
              
        </div>
        <div style={{marginTop: '2rem', display: 'flex', justifyContent: 'space-between'}}>
            <p style={{fontSize: '1.1rem'}}>Total</p>
            <p>s/. {Number(getTotalPrice(order?.items, true, Number(order?.sendPricing))).toFixed(2)}</p>
        </div>

        <div style={{width: '100%', textAlign: 'right', marginTop: '2rem'}}> 
            <div onClick={() => modifyState()} style={{color: 'rgb(21, 112, 239)', cursor: 'pointer'}}>Guardar</div>
        </div>
        
    </div> 
}

export default EditModalOrder;