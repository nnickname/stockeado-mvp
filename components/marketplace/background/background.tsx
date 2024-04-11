'use client';

import Image from 'next/image';
import backgroundImage from '../../../public/images/logo/background.jpeg';
import './index.css';
import { TypeBrands } from '@/models/brands';
import IonIcon from '@reacticons/ionicons';
import Modal from 'react-responsive-modal';
import { useState } from 'react';
import Link from 'next/link';
const BackgroundImage = () => {
    const [open, setOpen] = useState(false);
    return <div>
        <div className="background" style={{backgroundImage: `url(${backgroundImage.src})`,}}>
                <div style={{zIndex: 99, paddingBottom: '2rem'}}>
                    <h1> ¿No encuentras lo que necesitas?</h1>
                    <p style={{marginBottom: '4rem'}}>Ingresa una solicitud de cotización y recibe ofertas personalizadas.</p>
                    <a href="https://api.whatsapp.com/send?phone=+51941531016&text=¡Hola! Necesito una cotización. Marca, modelo y año del vehiculo: Placa: Producto: Original/Alternativo:" target='_blank' onClick={() => setOpen(true)}>Ingresar solicitud</a>
                </div>
            </div>








    </div>

    
    
    
    
    
    
    
    
    
}
export default BackgroundImage;