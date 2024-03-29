
import Footer from "@/components/dashboard/Footer";
import Header from "@/components/dashboard/Header";
import { Metadata } from "next";
import 'react-responsive-modal/styles.css';
import '../terms/index.css';
import Link from "next/link";
export const metadata: Metadata = {
  title: "Stockeado",
  description: "Stockeado",

};
const Page = () => {
  return (
    <>
      <Header/>
      
      <div className="container" style={{marginTop: '9rem'}}>
        <h1 className="termsTitle">Política de Privacidad - Stockeado</h1>
        <h1 className="termsSubTitle">1. Recopilación de Información</h1>
        <p className="termsText">
         Recopilamos información personal y comercial proporcionada voluntariamente por los usuarios, incluyendo nombres, direcciones de correo electrónico, números de teléfono y detalles de la empresa. También recopilamos información sobre las transacciones y comunicaciones realizadas a través de nuestra plataforma.
          Por favor, revise los siguientes términos y condiciones antes de proceder con la publicación de sus productos en Stockeado. Estos términos rigen la relación entre usted (el proveedor) y nosotros (Stockeado) con respecto a la publicación y venta de sus productos en nuestra plataforma. 
        </p>
        <h1 className="termsSubTitle">2. Uso de la Información</h1>
        <p className="termsText">Utilizamos la información recopilada para facilitar transacciones, gestionar cuentas de usuario, proporcionar soporte al cliente, mejorar nuestros servicios y cumplir con las obligaciones legales y regulatorias. No compartimos, vendemos ni alquilamos información personal de los usuarios con terceros para fines de marketing sin consentimiento explícito.</p>
        <h1 className="termsSubTitle">3. Seguridad de la Información</h1>
        <p className="termsText">
            Implementamos medidas de seguridad para proteger la información de los usuarios contra accesos no autorizados, alteraciones, divulgaciones o destrucciones. Sin embargo, no podemos garantizar la seguridad absoluta de la información transmitida a través de Internet.
        </p>
        <h1 className="termsSubTitle">4. Cookies y Tecnologías de Seguimiento</h1>
        <p className="termsText">
            Utilizamos cookies y otras tecnologías de seguimiento para mejorar la experiencia del usuario, analizar tendencias, administrar el sitio web y recopilar información demográfica sobre nuestros usuarios. Los usuarios pueden controlar el uso de cookies a través de la configuración de su navegador.
        </p>
        <h1 className="termsSubTitle">5. Enlaces a Terceros</h1>
        <p className="termsText">Nuestro sitio web puede contener enlaces a sitios web de terceros. No somos responsables de las prácticas de privacidad o el contenido de estos sitios web. Recomendamos a los usuarios revisar las políticas de privacidad de los sitios web vinculados.</p>
        <h1 className="termsSubTitle">6. Cambios en la Política de Privacidad</h1>
        <p className="termsText">Nos reservamos el derecho de actualizar o modificar esta política de privacidad en cualquier momento. Se notificarán cambios significativos a los usuarios a través de notificaciones en nuestro sitio web o por otros medios de comunicación.</p>
        <p className="termsSubTitle" style={{marginTop: '2rem'}}>Información adicional</p>
            <p className="termsText">Cualquier tipo de consulta extra o detalle que no se encuentre dentro de este documento puede ser conversado entre el representante de la cuenta y el equipo fundador de Stockeado para llegar a un acuerdo.</p>
            <p className="termsSubTitle">Contacto</p>
            <p className="termsText" style={{fontWeight: '400'}}>Bruno Rojas </p>
            <p className="termsText" style={{fontWeight: '400'}}>Celular: +51 953 327 298</p>
            <p className="termsText" style={{fontWeight: '400'}}>Correo: bruno@stockeado.com</p>
            <p className="termsText" style={{fontWeight: '400', marginTop: '2rem'}}>Bartolomé Canitrot </p>
            <p className="termsText" style={{fontWeight: '400'}}>Celular: +54 9 2604000308</p>
            <p className="termsText" style={{fontWeight: '400'}}>Correo: canitrotbartolome@gmail.com</p>
            <p className="termsSubTitle" style={{marginTop: '2rem'}}>Contacto de Stockeado para coordinación de stocks de productos, envíos y pagos</p>
            <p className="termsText" style={{fontWeight: '400'}}>Celular: +51 941 531 016</p>
            <p style={{marginTop: '2rem'}} className="termsSubTitle">Síguenos en nuestras redes sociales:</p>
            <p>Instagram: @stockeado_ / <Link style={{color: 'blue'}} href="https://www.instagram.com/stockeado_/">https://www.instagram.com/stockeado_/</Link></p>
            <p>Linkedin: <Link style={{color: 'blue'}} href="https://www.linkedin.com/company/stockeado/">https://www.linkedin.com/company/stockeado/</Link></p>
            <p>Actualizado: 28/03/2024</p>
      </div>
      <Footer/>
      
    </>
  );
}

export default Page;