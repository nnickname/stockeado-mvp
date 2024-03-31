'use client';
import Link from "next/link";
import Logo from '../../../public/images/logo/logopreferente.png';
import blueImage from '../../../public/images/logo/blueimage.png';

import './index.css';
import Image from "next/image";
import IonIcon from "@reacticons/ionicons";
import { FunctionComponent, ReactNode, useState } from "react";
import { UserModel } from "@/models/userModel";
import Cookie from "universal-cookie";
import { useRouter } from "next/navigation";

type SideBarProps = {
    frameContennt: ReactNode,
    route: string,
    user?: UserModel
};

const SideBarComponent: FunctionComponent<SideBarProps> = ({user, frameContennt, route}) => {
    const router = useRouter();
    const cookies = new Cookie();
    const [open, setOpen] = useState<boolean>(true);
    
    return <div>
        <div className="responsiveButtonViewNavigation" style={{display: 'none', width: '100%', textAlign: 'right'}}>
                <button style={{fontSize: '.9rem', color: 'grey', position: 'absolute', top: '1rem', right: '1rem'}} onClick={() => setOpen(!open)}>{open ? 'Esconder barra de navegación' : 'Mostrar barra de navegación'}</button>
        </div>
        <div className="sideBar">
        <div className="sidebarCustomStyle" style={{display: open ? 'block' : 'none'}}>
            
            <Image src={Logo}  alt="Logo" />
            <img className="avatar" alt="" src={user?.imageLogo !== '' ? user?.imageLogo : blueImage.src}/>

            <h1 className="title">{user?.nameShop}</h1>
            <div style={{marginTop: '3rem'}}></div>

            <div className="list" onClick={() => router.push('/hub')}>
                <IonIcon style={{color: route === 'dashboard' ? '#1570EF' : 'black'}} className="icon" name="home-outline" />
                <p style={{color: route === 'dashboard' ? '#1570EF' : 'black'}} className="text">Dashboard</p>
            </div>
            <div className="list" onClick={() => {
                router.push('/inventory', {});
                setTimeout(() => {
                    window.location.reload();
                }, 1500);
                }}>
                <IonIcon style={{color: route === 'inventory' ? '#1570EF' : 'black'}} className="icon" name="cart-outline" />
                <p style={{color: route === 'inventory' ? '#1570EF' : 'black'}} className="text">Inventario Web</p>
            </div>
            <div className="list">
                <IonIcon style={{color: route === 'request' ? '#1570EF' : 'black'}} className="icon" name="person-outline" />
                <p style={{color: route === 'request' ? '#1570EF' : 'black'}} className="text">Solicitudes</p>
            </div>
            <div onClick={() => router.push('/orders')} className="list">
                <IonIcon style={{color: route === 'orders' ? '#1570EF' : 'black'}} className="icon" name="mail-unread-outline" />
                <p style={{color: route === 'orders' ? '#1570EF' : 'black'}} className="text">Ordenes finales</p>
            </div>

            <div style={{marginTop: '3rem'}} ></div>
            <div onClick={() => router.push('/configuration')} className="list">
                <IonIcon style={{color: route === 'configuration' ? '#1570EF' : 'black'}} className="icon" name="settings-outline" />
                <p style={{color: route === 'configuration' ? '#1570EF' : 'black'}} className="text">Configuración</p>
            </div>
            <div className="list logout" onClick={async () => {
                cookies.remove('access_token');
                router.push('/signin');
                
            }}>
                <IonIcon className="icon" name="log-out-outline" />
                <p className="text">Cerrar sesión</p>
            </div>
        </div>
    <div className="sideBarContainer" >
        {frameContennt}
    </div>
</div>
    </div>
    
    
    
}
export default SideBarComponent