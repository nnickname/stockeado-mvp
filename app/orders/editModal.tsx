'use client';
import { TypeBrands } from "@/models/brands"
import { OrderModel } from "@/models/ordersModel"
import { FunctionComponent, useState } from "react"
import { BankOptions, OrderStates } from "../marketplace/payment/bank";
import 'react-responsive-modal/styles.css';
import './../marketplace/order/index.css';
import { getTotalPrice } from "@/components/marketplace/header";
import { updateOrderState } from "../api/orderss/call";
import IonIcon from "@reacticons/ionicons";
type editModalProps = {
    order: OrderModel
}
const EditModalOrder: FunctionComponent<editModalProps> = ({order}) => {
    const time = new Date(String(order?.maxDate));
    const [orderState, setOrderState] = useState<number>(Number(order?.state));
    const modifyState = async (index: number) => {
        const response = await updateOrderState({_id: order?._id, state: index});
        if(response !== null) setOrderState(index);
    }
    return <div>
        <p style={{color: 'grey', fontSize: '.8rem' }}>Toca para cambiar el estado de la orden</p>
        <div className="steptsorders" style={{marginTop: '0rem'}}>
                {OrderStates?.map((e, index) => <div style={{cursor: 'pointer'}} onClick={() => modifyState(index)} className={orderState < index ? 'pending' : 'marked'}  key={index}>
                <p>{e}</p>
                {Number(orderState) >= index ? <IonIcon style={{fontSize: '2rem', margin: 'auto'}} name='checkmark-circle'/> : <div style={{marginLeft: 'auto', marginRight: 'auto', width: '1.5rem', height: '1.5rem', borderRadius: '100%', background: 'rgba(0,0,0, 0.2)'}}/>}
           </div>)}
        </div>
        <div className="steptsorders" style={{marginTop: '0rem'}}>
            {OrderStates?.map((e, index) => <div style={{cursor: 'pointer'}} onClick={() => modifyState(index)} className={index > orderState ? 'pending' : 'marked'} key={index}>{e}</div>)}
        </div>
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
                <p> {time.getTime()}</p>

            </div>

            <div style={{display:'flex', marginTop: '.5rem'}}>
                <p style={{marginRight: '.5rem', fontWeight: '700'}}>
                    Dirección:
                </p>
                <p> {order?.direction}</p>

            </div>
            
        {order?.state === 0 ? (Number(order?.payType) === 0 ? <BankOptions/> : <></>)   : <></>}
            
        <p style={{marginRight: '.5rem', fontWeight: '700', marginBottom: '1rem', marginTop: '1rem'}}>
            Pedido:
        </p>
        {order?.items?.map((e, index) => {
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
        <p style={{color: 'grey', textAlign: 'center'}}>{order?.items?.length === 0 ? 'No encontramos nada' : ''}</p>        
        <div style={{marginTop: '2rem', display: 'flex', justifyContent: 'space-between'}}>
                    <p style={{fontSize: '.9rem'}}>Costo envío</p>
                    <p style={{fontSize: '.9rem'}}>s/. 15.0</p>
        </div>
        <div style={{marginTop: '2rem', display: 'flex', justifyContent: 'space-between'}}>
            <p style={{fontSize: '1.1rem'}}>Total</p>
            <p>s/. {Number(getTotalPrice(order?.items, true)).toFixed(2)}</p>
        </div>
    </div>
}

export default EditModalOrder;