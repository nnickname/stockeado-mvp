import Link from "next/link";
import { Flexboard, FlexboardProvider, FlexboardFrame, ResizerType, Position } from '@dorbus/flexboard';
import Logo from '../../../public/images/logo/logopreferente.png';
import './index.css';
import Image from "next/image";
import IonIcon from "@reacticons/ionicons";
import { FunctionComponent, ReactNode } from "react";

type SideBarProps = {
    frameContennt: ReactNode,
    route: string
};

const SideBarComponent: FunctionComponent<SideBarProps> = ({frameContennt, route}) => {
    return <FlexboardProvider>
    <Flexboard
    direction={Position.left}
    draggable={true}
    width={250}
    minWidth={250}
    maxWidth={320}
    flexboardStyle={{ backgroundColor: "white" }}
    resizerStyle={{ backgroundColor: "white" }}
    resizerType={ResizerType.gutterlane}
    >
        <div className="sidebarCustomStyle">
            <Image src={Logo}  alt=""/>
            <div className="avatar">

            </div>
            <h1 className="title">Repuestos Jorge</h1>
            <div style={{marginTop: '3rem'}}></div>

            <div className="list">
                <IonIcon style={{color: route === 'dashboard' ? '#1570EF' : 'black'}} className="icon" name="home-outline" />
                <p style={{color: route === 'dashboard' ? '#1570EF' : 'black'}} className="text">Dashboard</p>
            </div>
            <div className="list">
                <IonIcon style={{color: route === 'inventory' ? '#1570EF' : 'black'}} className="icon" name="cart-outline" />
                <p style={{color: route === 'inventory' ? '#1570EF' : 'black'}} className="text">Inventario</p>
            </div>
            <div className="list">
                <IonIcon style={{color: route === 'request' ? '#1570EF' : 'black'}} className="icon" name="mail-unread-outline" />
                <p style={{color: route === 'request' ? '#1570EF' : 'black'}} className="text">Ordenes finales</p>
            </div>

            <div style={{marginTop: '3rem'}}></div>
            <div className="list">
                <IonIcon style={{color: route === 'configuration' ? '#1570EF' : 'black'}} className="icon" name="settings-outline" />
                <p style={{color: route === 'configuration' ? '#1570EF' : 'black'}} className="text">Configuración</p>
            </div>
            <div className="list logout">
                <IonIcon className="icon" name="log-out-outline" />
                <p className="text">Cerrar sesión</p>
            </div>
        </div>
    </Flexboard>
    <FlexboardFrame >
        <div className="sidebarCustomStyle" style={{backgroundColor: 'rgb(242, 242, 242)'}}>
            {frameContennt}
        </div>
    </FlexboardFrame>
</FlexboardProvider>
}
export default SideBarComponent