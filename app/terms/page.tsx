import Brands from "@/components/dashboard/Brands";
import ScrollUp from "@/components/dashboard/Common/ScrollUp";
import Contact from "@/components/dashboard/Contact";
import Features from "@/components/dashboard/Features";
import Footer from "@/components/dashboard/Footer";
import Header from "@/components/dashboard/Header";
import Hero from "@/components/dashboard/Hero";

import Pricing from "@/components/dashboard/Pricing";
import Video from "@/components/dashboard/Video";
import { Metadata } from "next";
import { useTheme } from "next-themes";
import 'react-responsive-modal/styles.css';
import './index.css';
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
        <h1 className="termsTitle">Términos e información de Stockeado</h1>
        <p className="termsSubTitle">¡Bienvenido a Stockeado!</p>
        <h1 className="termsSubTitle">Introducción y descripción del sitio</h1>
        <p className="termsText">
          El presente documento incluye los términos y condiciones del uso del sitio web y plataforma en cualquiera de sus enlaces (en adelante, “Stockeado”).
          Por favor, revise los siguientes términos y condiciones antes de proceder con la publicación de sus productos en Stockeado. Estos términos rigen la relación entre usted (el proveedor) y nosotros (Stockeado) con respecto a la publicación y venta de sus productos en nuestra plataforma.</p>
        <p className="termsText">
          Por favor, revise los siguientes términos y condiciones antes de proceder con la publicación de sus productos en Stockeado. Estos términos rigen la relación entre usted (el proveedor) y nosotros (Stockeado) con respecto a la publicación y venta de sus productos en nuestra plataforma. 
        </p>
        <p className="termsText">
          Al proporcionar sus productos para su publicación en Stockeado, usted acepta todos los términos y condiciones establecidos en este documento. Si no está de acuerdo con alguno de estos términos, le solicitamos que nos envíe un mensaje para poder conversar sobre el punto en cuestión.
        </p>
        <p className="termsText" >
        Stockeado es una empresa dedicada a la creación de software especializada en el sector automotriz, que busca ayudar a las empresas en su camino a la mejora de procesos digitales, específicamente a las ventas que realizan. Esto mediante nuestra plataforma Stockeado la cual provee a los proveedores de:
        </p>
        <p className="termsText" style={{fontWeight: '500'}}>
          1. Una cuenta privada para poder gestionar sus ventas por el canal de Stockeado.
        </p>
        <p className="termsText" style={{fontWeight: '500'}}>
          2. Una o varias tiendas virtuales independientes según la necesidad del proveedor.
        </p>
        <p className="termsText" style={{fontWeight: '500'}}>
          3. Dashboard administrativo actualizado en tiempo real para observar métricas de ventas en la plataforma.
        </p>
        <p className="termsText" style={{fontWeight: '500'}}>
          4. Presencia en la tienda general de Stockeado.
        </p>
        
        <h1 className="termsSubTitle">Registro a Stockeado</h1>
        <p className="termsText">Cada proveedor tendrá acceso a registrarse en la plataforma luego de la aprobación del equipo de Stockeado, el proveedor tendrá que acceder a https://stockeado.com/signup para poder crear su cuenta cumpliendo con la información solicitada (Nombre del representante de la tienda, Nombre de la tienda, correo de empresa y contraseña), quien registre una cuenta como empresa, estará afirmando que tiene la capacidad de representación de la misma. </p>
        <p className="termsText">Por el momento, solo se podrá tener un usuario y contraseña por tienda, cada cuenta registrada equivale a una tienda en Stockeado, para poder acceder a más tiendas tendrá que crearse cuentas adicionales, no hay límite de tiendas.  </p>
        <p className="termsText">Es responsabilidad del proveedor que creó su cuenta en cuidar sus contraseñas y datos de ingreso, ya que es el único responsable de cualquier actividad dentro de su cuenta. Si sucede algún tipo de violación de seguridad o reconoce que alguien ha ingreso indebidamente a su cuenta, debe de notificarlo en la brevedad posible al equipo de Stockeado para poder resolver el inconveniente.</p>
        <h1 className="termsSubTitle">Uso de la plataforma</h1>
        <p className="termsText">Para el uso de la plataforma en general se debe tener un dispositivo con acceso a internet, para garantizar una buena experiencia, sin embargo en ocasiones es posible que el servicio se interrumpa por algún actualización o cambio en Stockeado, es poco probable que esto suceda, pero en ocasiones incontrolables, puede ocurrir.</p>
        <p className="termsText">Cada proveedor que tenga acceso a la plataforma tiene el derecho de poder subir sus productos siempre y cuando cumplan con la información que se pide en la plataforma o siguiendo el formato que se le envío, esto con el fin de poder garantizar una experiencia de compra y venta de alta calidad a los clientes, teniendo la información detallada para que el cliente pueda tener una decisión de compra adecuada, caso contrario se suba información incompleta se le informará para poder asesorarlo y mejorar sus publicaciones. </p>
        <p className="termsText">Si usted como proveedor tiene alguna integración a su sistema de inventario o ERP, Stockeado adecuará la información de productos que tenga, sin embargo, si alguna información vital está ausente, se le informará para poder llegar a un acuerdo para obtenerla y mejorar la calidad de sus publicaciones.</p>
        <p className="termsText">Además Stockeado puede intervenir en la publicación, siempre y cuando usted (el proveedor) nos de autorización para asistirlo y subir sus productos mediante el formato entregado.</p>
        <h1 className="termsSubTitle">Tarifas y medios de pago</h1>
        <p className="termsText">La plataforma de Stockeado ofrece estos servicios bajo el modelo de “Marketplace” (intermediación), por lo que únicamente se cobrará por las ventas realizadas en la plataforma, es decir, Stockeado toma el rol de un vendedor que trabaja únicamente bajo comisión, esta tarifa es variable y depende del monto total de la venta.</p>
        <p className="termsSubTitle">Tabla de tarifas</p>
        <div style={{boxSizing: 'border-box', width: '100%', marginTop: '1rem'}}>
                <div style={{display:'flex', width: '100%'}}>
                    <p style={{width: '100%', backgroundColor: '#EFF2F4', padding: '.3rem', border: '1px solid rgba(0,0,0, 0.1)'}}>
                        s/ 0 - s/ 150
                    </p>
                    <p style={{width: '100%',backgroundColor: 'transparent', padding: '.3rem', border: '1px solid rgba(0,0,0, 0.1)'}}>11%</p>
                </div>
                <div style={{display:'flex', width: '100%'}}>
                    <p style={{width: '100%',backgroundColor: '#EFF2F4', padding: '.3rem', border: '1px solid rgba(0,0,0, 0.1)'}}>
                       s/ 151 - s/ 300
                    </p>
                    <p style={{width: '100%', backgroundColor: 'transparent', padding: '.3rem', border: '1px solid rgba(0,0,0, 0.1)'}}>10%</p>
                </div>
                <div style={{display:'flex', width: '100%'}}>
                    <p style={{width: '100%',backgroundColor: '#EFF2F4', padding: '.3rem', border: '1px solid rgba(0,0,0, 0.1)'}}>
                        s/ 301 - s/ 450
                    </p>
                    <p style={{width: '100%', backgroundColor: 'transparent', padding: '.3rem', border: '1px solid rgba(0,0,0, 0.1)'}}>9%</p>
                </div>
                <div style={{display:'flex', width: '100%'}}>
                    <p style={{width: '100%',backgroundColor: '#EFF2F4', padding: '.3rem', border: '1px solid rgba(0,0,0, 0.1)'}}>
                        s/ 451 - s/ 800
                    </p>
                    <p style={{width: '100%', backgroundColor: 'transparent', padding: '.3rem', border: '1px solid rgba(0,0,0, 0.1)'}}>8%</p>
                </div>
                <div style={{display:'flex', width: '100%'}}>
                    <p style={{width: '100%',backgroundColor: '#EFF2F4', padding: '.3rem', border: '1px solid rgba(0,0,0, 0.1)'}}>
                       s/ 801 - s/ 1000
                    </p>
                    <p style={{width: '100%', backgroundColor: 'transparent', padding: '.3rem', border: '1px solid rgba(0,0,0, 0.1)', fontWeight: '500'}}>7%</p>
                </div>
                <div style={{display:'flex', width: '100%'}}>
                    <p style={{width: '100%',backgroundColor: '#EFF2F4', padding: '.3rem', border: '1px solid rgba(0,0,0, 0.1)'}}>
                       s/ 1001 - s/ 5001
                    </p>
                    <p style={{width: '100%', backgroundColor: 'transparent', padding: '.3rem', border: '1px solid rgba(0,0,0, 0.1)', fontWeight: '500'}}>6%</p>
                </div>
                <div style={{display:'flex', width: '100%'}}>
                    <p style={{width: '100%',backgroundColor: '#EFF2F4', padding: '.3rem', border: '1px solid rgba(0,0,0, 0.1)'}}>
                       + s/. 5001
                    </p>
                    <p style={{width: '100%', backgroundColor: 'transparent', padding: '.3rem', border: '1px solid rgba(0,0,0, 0.1)', fontWeight: '500'}}>5%</p>
                </div>
            </div>
            <p className="termsText" style={{marginTop: '2rem'}}>Este porcentaje de comisión por las ventas generadas por Stockeado serán tomadas del monto venta total sin IGV, ejemplo:</p>
            <div style={{display: 'flex', width: '100%', marginTop: '1rem'}}>
                <div style={{width: '100%'}}>
                    <p style={{width: '100%', backgroundColor: '#EFF2F4', padding: '.3rem', border: '1px solid rgba(0,0,0, 0.1)'}}>
                    Monto de Venta (con IGV)
                    </p>
                    <p style={{width: '100%',backgroundColor: 'transparent', padding: '.3rem', border: '1px solid rgba(0,0,0, 0.1)'}}>s/. 295</p>
                </div>
                <div style={{ width: '100%'}}>
                    <p style={{width: '100%',backgroundColor: '#EFF2F4', padding: '.3rem', border: '1px solid rgba(0,0,0, 0.1)'}}>
                    Monto de Venta (sin IGV)
                    </p>
                    <p style={{width: '100%', backgroundColor: 'transparent', padding: '.3rem', border: '1px solid rgba(0,0,0, 0.1)'}}>s/. 250</p>
                </div>
                <div style={{width: '100%'}}>
                    <p style={{width: '100%',backgroundColor: '#EFF2F4', padding: '.3rem', border: '1px solid rgba(0,0,0, 0.1)'}}>
                        % comisión
                    </p>
                    <p style={{width: '100%', backgroundColor: 'transparent', padding: '.3rem', border: '1px solid rgba(0,0,0, 0.1)'}}>10%</p>
                </div>
                <div style={{width: '100%'}}>
                    <p style={{width: '100%',backgroundColor: '#EFF2F4', padding: '.3rem', border: '1px solid rgba(0,0,0, 0.1)'}}>
                        Comisión soles
                    </p>
                    <p style={{width: '100%', backgroundColor: 'transparent', padding: '.3rem', border: '1px solid rgba(0,0,0, 0.1)'}}>s/. 25</p>
                </div>
                
            </div>
            <p className="termsText">
                Los métodos de pago serán por transferencia bancaria a las cuentas del proveedor previo pago del cliente, el proceso será el siguiente:
            </p>
            <p className="termsText" style={{fontWeight :'500'}}>
                1. Cliente solicita producto
            </p>
            <p className="termsText" style={{fontWeight :'500'}}>
                2. Stockeado confirma stock y horario de envío con el proveedor.
            </p>
            <p className="termsText" style={{fontWeight :'500'}}>
                3. Cliente paga el producto a Stockeado.
            </p>
            <p className="termsText" style={{fontWeight :'500'}}>
                4. Stockeado paga al proveedor descontando la comisión de la venta.
            </p>
            <p className="termsText" style={{fontWeight :'500'}}>
                5. Stockeado recoge el pedido y lo envía al cliente.
            </p>
            <p className="termsText">
            Los proveedores podrán modificar cualquier información contenida en su espacio dentro de Stockeado, tales como productos, descripciones, precios, servicios, stocks, condiciones, en cualquier momento y sin previo aviso, si necesita asistencia puede comunicarse con nosotros para ayudarlo.
            </p>
            <p className="termsText">
            De existir un error tipográfico en alguno de los precios de los productos, si el precio correcto del artículo es más alto que el que figura en Stockeado, causado por un error de la plataforma mas no del proveedor en colocar su precio de venta, Stockeado contactará a cliente antes que el producto sea comprado, y/o cancelaremos el pedido, notificándole acerca del suceso. 
            </p>
            <p className="termsSubTitle">
            Entrega de pedidos
            </p>
            <p className="termsText">
            Los precios ofrecidos por los proveedores corresponden exclusivamente al valor del bien ofrecido y no incluyen gastos de envío o transporte, accesorios no descritos a no ser que se especifique claramente lo contrario. Por lo que Stockeado se encarga de los envíos de los productos a menos que el proveedor escoja encargarse de enviar sus productos a los clientes, igualmente si existen costos adicionales relacionados al envío el cliente es quien paguará por el servicio.
            </p>
            <p className="termsSubTitle">
            Horarios de atención y envíos
            </p>
            <p className="termsText">
            Cuando el cliente solicita un producto, Stockeado confirma el stock y la hora exacta en la que puede recoger el producto de la tienda o almacén del proveedor, es de suma importancia cumplir con los horarios de entrega para garantizar una buena experiencia para todos los involucrados, en caso de importaciones se coordinará por whatsapp las fechas y plazos de entrega con el proveedor.
            </p>
            <p className="termsText">
            Stockeado mantendrá informados tanto a los proveedores como los clientes sobre el estado de los pedidos. Asimismo, se coordinará con cada proveedor una hora mínima y máxima para poder registrar pedidos y que sean entregados en las fechas establecidas.
            </p>
            <p className="termsSubTitle">Políticas de devolución y garantías</p>
            <p className="termsText">Las garantías son de acuerdo con la información proporcionada por los proveedores a Stockeado. En caso se necesite solicitar una garantía se debe considerar lo siguiente:</p>
            <p className="termsText" style={{fontWeight: '500'}}>a) El que asume la garantía es el proveedor según sus políticas, no Stockeado.</p>
            <p className="termsText" style={{fontWeight: '500'}}>b) La garantía solicitada debe estar vigente.</p>
            <p className="termsText">Stockeado es el responsable de intermediar el pago siempre y cuando Stockeado fue el medio por el cual llegó la solicitud de compra o cotización. Si el proveedor cuenta en su base de datos al cliente, no significa que pueda o deba evitar la comisión por intermediación con Stockeado, siempre y cuando el proveedor no tenga una proforma o solicitud de cotización del mismo pedido con fecha anterior a la de Stockeado.
            </p>
            <p className="termsText">Stockeado no será responsable por variaciones en los precios de los productos producidas por el proveedor o por variaciones en el tipo de cambio de las monedas en que se han ofertado y/o adquirido los productos o servicios al momento de su compra. El tipo de cambio, si es que se requiere, será el ofrecido por el banco BCP.</p>
            <p className="termsSubTitle">Información adicional</p>
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