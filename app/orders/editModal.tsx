'use client';
import { TypeBrands } from "@/models/brands"
import { OrderModel } from "@/models/ordersModel"
import { FunctionComponent, useState } from "react"
import { BankOptions, OrderStates } from "../marketplace/payment/bank";
import 'react-responsive-modal/styles.css';
import './../marketplace/order/index.css';
import { getTotalPrice } from "@/components/marketplace/header";
import { updateOrderState } from "../api/orderss/call";
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
                <p> {time?.getDay()}/{time?.getMonth()}/{time?.getFullYear()}</p>

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
        {order?.state === 0 ? (Number(order?.payType) === 0 ? <BankOptions/> : <></>)   : <></>}
            
        <p style={{marginRight: '.5rem', fontWeight: '700', marginBottom: '1rem', marginTop: '1rem'}}>
            Pedido:
        </p>
        {order?.items?.map((e, index) => {
            return <div key={index}>
                <div style={{width: '100%', display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(220, 220, 220, .3)'}}>
                    <img style={{width: '35px', height: '35px'}} src={e?.item?.image} alt='Product Image' />
                    <p style={{maxWidth: '100px', margin: 'auto'}} className="dark:text-body-color-dark mb-1 text-base !leading-relaxed text-body-color sm:text-sm md:text-sm" >
                    <p style={{minWidth: '250px', margin: 'auto'}}>{e?.item?.name} {TypeBrands[e?.item?.brand-1] + ' '} {e?.item?.model }</p></p>
                    <p className="dark:text-body-color-dark mb-1 text-base !leading-relaxed text-body-color sm:text-sm md:text-sm" >
                    {String(e?.ammount)}</p>
                    <p className="dark:text-body-color-dark mb-1 text-base !leading-relaxed text-body-color sm:text-sm md:text-sm" style={{marginLeft: '4rem', maxWidth: '100px'}}>
                    s/. {Number(e?.item?.priceSelling).toFixed(2)}</p>
                </div>
            </div>
        })}
        <p style={{color: 'grey', textAlign: 'center'}}>{order?.items?.length === 0 ? 'No encontramos nada' : ''}</p>        
        <div style={{marginTop: '2rem', display: 'flex', justifyContent: 'space-between'}}>
            <p style={{fontSize: '1.1rem'}}>Total</p>
            <p>s/. {Number(getTotalPrice(order?.items)).toFixed(2)}</p>
        </div>
    </div>
}

export default EditModalOrder;