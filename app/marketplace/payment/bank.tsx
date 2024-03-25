import IonIcon from "@reacticons/ionicons";
import { useState } from "react";
import style from "styled-jsx/style";
import BBVA from '../../../public/images/logo/BBVA_2019.svg.png';
import Interbank from '../../../public/images/logo/Interbank_logo.svg.png';
import BCP from '../../../public/images/logo/Logo-bcp-vector.svg.png';
import Plin from '../../../public/images/logo/plin-logo-0C4106153C-seeklogo.com.png';
import Tunki from '../../../public/images/logo/tunki.png';
import Yape from '../../../public/images/logo/Yape_text_app_icon.png';
export const OrderStates = ['Pendiente', 'Confirmado', 'Pagado', 'Enviando', 'Entregado'];

export const BankOptions = () => {
    const [copied, setCopied] = useState<string>('stockeado.shop.transfer');
    const copyDirection = () => {
        setCopied('Copiado');
        navigator.clipboard.writeText('stockeado.shop.transfer');
        setTimeout(() => {
            setCopied('stockeado.shop.transfer');
        }, 3000);
    }
    return <div>
        <h1 style={{marginTop: '1.5rem', fontSize: '1rem'}}>Instrucciones de pago</h1>
        <p style={{color: 'gray', fontSize: '.9rem', marginTop: '.5rem', marginBottom: '1rem'}}>Se debe realizar el depósito a la cuenta de Stockeado previo al envío de la orden.        Enviar la captura del depósito a Whatsapp e indicar datos de factura si así lo requiera.</p>
        <h1 style={{marginTop: '1.5rem', fontSize: '1rem'}}>Datos de pago:</h1>

        <div style={{display: 'flex', width: '100%'}} className="displayBlockResponsive">
            <div style={{width: '100%'}}>
                <div style={{display: 'flex', width: '100%', marginTop: '1rem'}}>
                    <p style={{color: 'grey'}}>Cuenta BCP:</p>
                    <div style={{marginLeft: '2rem'}}>
                        <button onClick={() => copyDirection()} style={{color: 'black', border: '1px solid rgba(0,0,0, 0.2)', paddingTop: '.2rem', paddingBottom: '.2rem', paddingLeft: '.5rem', paddingRight: '.5rem', display: 'flex', borderRadius: '.5rem'}}>{copied} <IonIcon style={{margin: '.2rem'}} name="clipboard-outline"/></button>
                    </div>
                </div>
                <div style={{display: 'flex', width: '100%', marginTop: '1rem'}}>
                    <p style={{width: 'max-content', color: 'grey'}}>Cuenta CCI:</p>
                    <div style={{marginLeft: '2rem'}}>
                        <button onClick={() => copyDirection()} style={{color: 'black', border: '1px solid rgba(0,0,0, 0.2)', paddingTop: '.2rem', paddingBottom: '.2rem', paddingLeft: '.5rem', paddingRight: '.5rem', display: 'flex', borderRadius: '.5rem'}}>{copied} <IonIcon style={{margin: '.2rem'}} name="clipboard-outline"/></button>
                    </div>
                </div>
            </div>
            <div style={{width: '6rem'}}>
                <div style={{ marginRight: 'auto', marginLeft: 'auto', height: '100%', width: '1px', background: 'rgba(0,0,0,0.2)'}}></div>

            </div>
            
            <div>
                <div style={{width: '100%', marginTop: '1rem', display: 'inline-block'}}>
                    <div style={{display: 'inline-block'}}>
                        <p style={{color: 'grey'}}>Yape y Plin</p>
                    </div>
                    <img style={{display: 'inline-block', marginLeft: '1rem', marginRight: '1rem'}} width='50px' src={Yape.src}/>
                    <img style={{display: 'inline-block'}} width='50px' src={Plin.src}/>
                </div>
                <button onClick={() => copyDirection()} style={{marginTop: '1rem', color: 'black', border: '1px solid rgba(0,0,0, 0.2)', paddingTop: '.2rem', paddingBottom: '.2rem', paddingLeft: '.5rem', paddingRight: '.5rem', display: 'flex', borderRadius: '.5rem'}}>{copied} <IonIcon style={{margin: '.2rem'}} name="clipboard-outline"/></button>

            </div>
        </div>
        <div style={{display: 'flex', width: '100%', marginTop: '1rem'}}>
            <p style={{color: 'grey', marginRight: '1rem'}}>Nombre de Cuenta:</p>
            <p> Bruno Gabriel Rojas Serván</p>
        </div>
        <div style={{display: 'flex', width: '100%', marginTop: '1rem'}}>
            <p style={{color: 'grey', marginRight: '1rem'}}>Enviar depósito a Whatsapp</p>
            <IonIcon name="logo-whatsapp" size="large" style={{color: '#25d366', cursor: 'pointer'}} />
        </div>
    </div>
}