'use client';
import Link from "next/link";
import Logo from '../../../public/images/logo/logopreferente.png';
import blueImage from '../../../public/images/logo/blueimage.png';

import './index.css';
import Image from "next/image";
import IonIcon from "@reacticons/ionicons";
import { FunctionComponent, ReactNode, useState } from "react";
import { UserModel } from "@/models/user.model";
import Cookie from "universal-cookie";
import { useRouter } from "next/navigation";

type SideBarProps = {
    frameContennt: ReactNode,
    route: string,
    user?: UserModel
};

type TypeAccountOptions = {
    name: string,
    icon: string,
    color: string,
    route: string
}
const WorkShopOptions: TypeAccountOptions[] = [
    {
        name: 'Inicio',
        icon: 'home-outline',
        color: '#1570EF',
        route: '/workshop/home'
    },
    {
        name: 'Inspecciones',
        icon: 'search-outline',
        color: '#1570EF',
        route: '/workshop/inspections'
    },
    {
        name: 'Órdenes  servicio',
        icon: 'bag-outline',
        color: '#1570EF',
        route: '/workshop/orders'
    },
    {
        name: 'Clientes',
        icon: 'person-outline',
        color: '#1570EF',
        route: '/workshop/clients',
    },
    {
        name: 'Vehículos',
        icon: 'car-outline',
        color: '#1570EF',
        route: '/workshop/vehicles'
    }
]
const ProvidersOptions: TypeAccountOptions[] = [
    {
        name: 'Dashboard',
        icon: 'home-outline',
        color: '#1570EF',
        route: '/provider/home'
    },
    {
        name: 'Inventario Web',
        icon: 'cart-outline',
        color: '#1570EF',
        route: '/provider/inventory'
    },
    {
        name: 'Órdenes  finales',
        icon: 'mail-unread-outline',
        color: '#1570EF',
        route: '/provider/orders'
    }
]
const SideBarComponent: FunctionComponent<SideBarProps> = ({user, frameContennt, route}) => {
    const router = useRouter();
    const cookies = new Cookie();
    const [open, setOpen] = useState<boolean>(true);
    
    return <div>
        <div className="responsiveButtonViewNavigation" style={{display: 'none', width: '100%', textAlign: 'right'}}>
                <button style={{fontSize: '.9rem', color: 'grey', position: 'absolute', top: '1rem', right: '1rem'}} onClick={() => setOpen(!open)}>{open ? <IonIcon style={{fontSize: '1.5rem', color: 'grey'}} name="eye-off-outline"/> : 
                <IonIcon style={{fontSize: '1.5rem', color: 'grey'}} name="menu-outline"/>}</button>
        </div>
        
        <div className="sideBar">
            <div className="sidebarCustomStyle" style={{display: open ? 'block' : 'none'}}>
                <div style={{textAlign: 'center', width: '100%'}}>
                    <Image src={Logo} width={150}  style={{marginLeft: 'auto', marginRight: 'auto'}} alt="Logo" />

                </div>
                <img  className="avatar" alt="" src={user?.imageLogo !== '' ? user?.imageLogo : blueImage.src}/>

                <h1 className="title">{user?.nameShop}</h1>
                <div style={{marginTop: '3rem'}}></div>
                {user?.type === 'workshop' ? 
                    WorkShopOptions.map((e: TypeAccountOptions, index: number) => {
                        return <Link key={index} className={e?.route === route ? 'list listactive' : 'list'} href={e.route}>
                            <IonIcon style={{color: route === e.route ? e.color : 'black', marginRight: '1rem'}} className="icon" name={e.icon as any} />
                            <p style={{color: route === e?.route ? e?.color : 'black'}} className="text">{e.name}</p>
                        </Link>
                    })
                :
                    ProvidersOptions.map((e: TypeAccountOptions, index: number) => {
                        return <Link key={index} className={e?.route === route ? 'list listactive' : 'list'} href={e.route}>
                            <IonIcon style={{color: route === e.route ? e.color : 'black', marginRight: '1rem'}} className="icon" name={e.icon as any} />
                            <p style={{color: route === e?.route ? e?.color : 'black'}} className="text">{e.name}</p>
                        </Link>
                    })
                }
                
                

                <div style={{marginTop: '3rem'}} ></div>
                <div onClick={() => router.push('/configuration')} className="list">
                    <IonIcon style={{color: route === 'configuration' ? '#1570EF' : 'black', marginRight: '1rem'}} className="icon" name="settings-outline" />
                    <p style={{color: route === 'configuration' ? '#1570EF' : 'black'}} className="text">Configuración</p>
                </div>
                <div className="logout" onClick={async () => {
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