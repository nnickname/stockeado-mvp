import IonIcon from "@reacticons/ionicons";
import { useState } from "react";
import style from "styled-jsx/style";
import BBVA from '../../../public/images/logo/BBVA_2019.svg.png';
import Interbank from '../../../public/images/logo/Interbank_logo.svg.png';
import BCP from '../../../public/images/logo/Logo-bcp-vector.svg.png';
import Plin from '../../../public/images/logo/plin-logo-0C4106153C-seeklogo.com.png';
import Tunki from '../../../public/images/logo/tunki.png';
import Yape from '../../../public/images/logo/Yape_text_app_icon.png';
export const OrderStates = ['Pendiente', 'Confirmado', 'Enviando', 'Entregado'];

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
        <div style={{display: 'flex'}}>
            <p style={{color: 'grey'}}>
                Para confirmar el pedido necesitamos que transfieras el monto total a la siguiente dirección
            </p>
            <div>
                <button onClick={() => copyDirection()} style={{color: 'black', border: '1px solid rgba(0,0,0, 0.2)', paddingTop: '.5rem', paddingLeft: '1rem', paddingRight: '1rem', display: 'flex', borderRadius: '.5rem'}}>{copied} <IonIcon style={{margin: '.2rem'}} name="clipboard-outline"/></button>

            </div>
        </div>
        <div style={{display: 'inline-block'}}>
            <img src={BBVA.src} alt="LOGOBVVA" style={{maxWidth: '50px', display: 'inline-block', margin: '.5rem'}}/>
            <img src={Interbank.src} alt="LOGOINTERBANK" style={{maxWidth: '50px', display: 'inline-block', margin: '.5rem'}}/>
            <img src={BCP.src} alt="LOGOBCP" style={{maxWidth: '50px', display: 'inline-block', margin: '.5rem'}}/>
            <img src={Plin.src} alt="LOGOPLIN" style={{maxWidth: '50px', display: 'inline-block', margin: '.5rem'}}/>
            <img src={Tunki.src} alt="LOGOTUNKI" style={{maxWidth: '50px', display: 'inline-block', margin: '.5rem'}}/>
            <img src={Yape.src} alt="LOGOYAPE" style={{maxWidth: '50px', display: 'inline-block', margin: '.5rem'}}/>
        </div>
    </div>
}