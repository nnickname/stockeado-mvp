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
        if(response !== null) {
            setOrderState(index);
            window.location.reload();
        }
    }
    return <div>
        <p style={{color: 'grey', fontSize: '.8rem' }}>Toca para cambiar el estado de la orden</p>
        <div className="steptsorders" style={{marginTop: '0rem'}}>
                {OrderStates?.map((e, index) => <div style={{cursor: 'pointer'}} onClick={() => modifyState(index)} className={orderState < index ? 'pending' : 'marked'}  key={index}>
                <p>{e}</p>
                {Number(orderState) >= index ? <IonIcon style={{fontSize: '2rem', margin: 'auto'}} name='checkmark-circle'/> : <div style={{marginLeft: 'auto', marginRight: 'auto', width: '1.5rem', height: '1.5rem', borderRadius: '100%', background: 'rgba(0,0,0, 0.2)'}}/>}
           </div>)}
        </div>
        
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
        <p style={{marginRight: '.5rem', fontWeight: '700', marginBottom: '1rem', marginTop: '1rem'}}>
            Pedido:
        </p>
        <div style={{overflowX: 'scroll'}}>
        {order?.items?.map((e, index) => {
                                    return <div key={index}>
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