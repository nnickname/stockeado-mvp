

import Image from 'next/image';
import backgroundImage from '../../../public/images/logo/background.jpeg';
import './index.css';
type
const BackgroundImage = () => {
    return <div className="background" style={{backgroundImage: `url(${backgroundImage.src})`,}}>
        <div style={{zIndex: 99}}>
            <h1> ¿No encuentras lo que necesitas?</h1>
            <p>Ingresa una solicitud de cotización y recibe ofertas personalizadas.</p>
            <button>Ingresar solicitud</button>
        </div>
    </div>
}
export default BackgroundImage;