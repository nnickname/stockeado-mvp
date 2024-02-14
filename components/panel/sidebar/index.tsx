'use client';
import Link from "next/link";
import Logo from '../../../public/images/logo/logopreferente.png';
import './index.css';
import Image from "next/image";
import IonIcon from "@reacticons/ionicons";
import { FunctionComponent, ReactNode } from "react";
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
    return <div className="sideBar">
        <div className="sidebarCustomStyle">
            <Image src={Logo}  alt="Logo" />
            <div className="avatar">

            </div>
            <h1 className="title">{user?.nameShop}</h1>
            <div style={{marginTop: '3rem'}}></div>

            <div className="list" onClick={() => router.push('/hub')}>
                <IonIcon style={{color: route === 'dashboard' ? '#1570EF' : 'black'}} className="icon" name="home-outline" />
                <p style={{color: route === 'dashboard' ? '#1570EF' : 'black'}} className="text">Dashboard</p>
            </div>
            <div className="list" onClick={() => router.push('/inventory')}>
                <IonIcon style={{color: route === 'inventory' ? '#1570EF' : 'black'}} className="icon" name="cart-outline" />
                <p style={{color: route === 'inventory' ? '#1570EF' : 'black'}} className="text">Inventario Web</p>
            </div>
            <div className="list">
                <IonIcon style={{color: route === 'request' ? '#1570EF' : 'black'}} className="icon" name="person-outline" />
                <p style={{color: route === 'request' ? '#1570EF' : 'black'}} className="text">Solicitudes</p>
            </div>
            <div className="list">
                <IonIcon style={{color: route === 'request' ? '#1570EF' : 'black'}} className="icon" name="mail-unread-outline" />
                <p style={{color: route === 'request' ? '#1570EF' : 'black'}} className="text">Ordenes finales</p>
            </div>

            <div style={{marginTop: '3rem'}} ></div>
            <div onClick={() => router.push('/configuration')} className="list">
                <IonIcon style={{color: route === 'configuration' ? '#1570EF' : 'black'}} className="icon" name="settings-outline" />
                <p style={{color: route === 'configuration' ? '#1570EF' : 'black'}} className="text">Configuración</p>
            </div>
            <div className="list logout" onClick={() => {
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
}
export default SideBarComponent