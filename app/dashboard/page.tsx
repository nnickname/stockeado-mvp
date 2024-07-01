
import Footer from "@/components/dashboard/Footer";
import Header from "@/components/dashboard/Header";
import Hero from "@/components/dashboard/Hero";

import Pricing from "@/components/dashboard/Pricing";
import Video from "@/components/dashboard/Video";
import IonIcon from "@reacticons/ionicons";
import { Metadata } from "next";
import { useTheme } from "next-themes";
import 'react-responsive-modal/styles.css';
import './index.css';
import Hero1 from '@/public/images/hero/hero1.png';
import Hero2 from '@/public/images/hero/hero2.png';
import Hero3 from '@/public/images/hero/hero3.png';
import Hero4 from '@/public/images/hero/hero4.png';
import Hero5 from '@/public/images/hero/hero5.webp';

import StripeBackground from '@/public/images/hero/background.png'
import Link from "next/link";

export const metadata: Metadata = {
  title: "Stockeado",
  description: "Stockeado",

};
const Page = () => {

  return (
    <>
      <Header/>
      <img className="" src={StripeBackground.src} style={{position: 'absolute', top: '0px', left: '0px', opacity: '0.15'}}/>
      <div style={{marginTop: '10rem'}}></div>
      <section className="w100 displayBlockResponsive flex left">
            
        <div className="w100 p1 mlResponsive" style={{marginLeft: '2rem'}}>
          <h1 className="fz1Responsive" style={{fontSize: '3.8rem', fontWeight: '600'}}>Aumenta la rentabilidad <br/>de tu taller automotriz</h1>
          <p className="mt1" style={{fontSize: '1.3rem'}}>Empodere a su equipo con el conocimiento, las herramientas y la</p>
          <p style={{fontSize: '1.3rem'}}>confianza necesarios para operar de manera segura, alcanzar </p>
          <p style={{fontSize: '1.3rem'}}>los estándares más elevados y evolucionar constantemente.</p>
          <div className="flex displayBlockResponsive w100 mt2" style={{justifyContent: 'left'}}>
            <Link href='/workshops' className="btn mt1 btn-gradient-primary mr1"><p style={{color: 'white', top: '-.1rem', position: 'relative', fontSize: '1.2rem', paddingLeft: '.5rem', paddingRight: '.5rem'}}>Prueba 15 días gratis</p></Link>
            <button className="btn mt1 flex" style={{color: '#3662e3', padding: '.5rem'}}>
              <IonIcon style={{fontSize: '1.3rem'}} name="play-circle-outline"/>
              <p className="ml1" style={{color: '#3662e3', top: '-.1rem', position: 'relative', fontSize: '1.2rem'}}>Mira cómo funciona
              </p>
            </button>
          </div>
        </div>
        <div className="center mt2">
            <img style={{width: '900px', position: 'relative', right: '-4rem', top: '-2rem' }} className="imageHero1" src={Hero1.src}/>
        </div>
      </section>
      <section style={{ position: 'relative', padding: '1rem', paddingBottom: '3rem', background: 'linear-gradient(72deg,var(--token-13854da9-c43f-495c-8d2c-fd85e8e06c75, #000000) 0%,var(--token-dc60c65c-2692-4b09-8d77-49a86f7aedee, rgb(24, 36, 61)) 47.747747747747745%,rgb(0,0,0) 100%)'}} className="relative z-10 py-16 md:py-20 lg:py-28">
        <div className="mlResponsive"  style={{zIndex: 1, marginLeft: '3rem', marginBottom: '2rem'}}>
          <p className="textKeywordOrange" style={{marginTop: '4.5rem'}}>Para Taller, Rent car, Car wash y Concesionarios </p>
          <h1 className="mt05" style={{fontSize: '2.5rem', fontWeight: '600', color: 'rgb(232, 232, 245)'}}>Mejore la eficiencia operativa <br/> eliminando el uso de papel</h1>
          <p className="mt1" style={{fontSize: '1.1rem', color: 'rgb(197, 197, 202)'}}>Su operación esta en constante evolución. Adopte una solución digital <br/>que facilite la adaptación y el cambio. Digitalice cualquier proceso, automatice  <br/>los flujos de trabajo, recopile datos consistentes y comience a identificar áreas de<br/> mejora desde el principio. Descubra qué funciona y qué no, y proporcione a todos <br/>las herramientas necesarias para actuar en consecuencia.</p>
      
        </div>
        <img className="hideResponsive" style={{height: '100%', zIndex: '-1', position: 'absolute', right: '0px', top: '0px', opacity: '0.02'}} src={Hero5.src}/>
        <Link href='/workshops' className="btn btn-gradient-secondary mlResponsive mt2" style={{marginLeft: '3rem', marginTop: '2rem'}}>Iniciar prueba gratuita</Link>
      </section>
      <section className="center p1 w100" style={{paddingTop: '2rem', marginTop: '3rem', background: '#f5f7fa'}}>
        <p className="textKeywordOcean mt2">Todo en una sola plataforma</p>
        <h1 style={{fontSize: '2.8rem', fontWeight: '600'}}>¿Llevas el control de tu taller en <br/> excel?            </h1>
        <p className="subsubtitle fz1" style={{fontSize: '1.2rem'}}>Ayudamos a <span style={{fontWeight: '700'}}>talleres automotrices</span> a digitalizar la información de sus clientes<br/>, podrás hacer inspecciones digitales, cotizaciones y recordatorios automáticos, para <br/><span style={{fontWeight: '700'}}>aumentar su rentabilidad por cliente.</span>            </p>
        <div className="w100 flex center displayBlockResponsive mt2" style={{justifyContent: 'center'}}>
          <div className="left centerResponsive mt2">
            <h1 className="mt1" style={{fontSize: '1.5rem', fontWeight: '600'}}>Inventario de vehículo o <br/>inspecciones de forma digital</h1>
            <p className="subsubtitle mt05" style={{fontSize: '1.1rem'}}>Guarda la información de inspección o inventario <br/>del vehículo en una sola plataforma, accesible en <br/>cualquier momento y dispositivo</p>
            <Link href='/pricing'className="btn centerResponsiveButton mt05 flex" style={{color: '#3662e3', padding: '0rem'}}>
              <p className="mr1" style={{color: '#3662e3', top: '-.2rem', position: 'relative', fontSize: '1.1rem'}}>Mas información
              </p>
              <IonIcon style={{fontSize: '1.1rem'}} name="arrow-forward-outline"/>

            </Link>
          </div>
          <div className="center mt2">
            <img className="centerResponsiveButton" src={Hero2.src}/>
          </div>
        </div>
        <div className="w100 flex center displayBlockResponsive mt1" style={{justifyContent: 'center'}}>
          <div className="center">
            <img className="centerResponsiveButton" src={Hero3.src}/>
          </div>
          <div className="left centerResponsive">
            <h1 className="mt1" style={{fontSize: '1.5rem', fontWeight: '600'}}>Agenda recordatorios automáticos de<br/> futuros servicios            </h1>
            <p className="subsubtitle mt05" style={{fontSize: '1.1rem'}}>Luego de las inspecciones, agenda recordatorios de tus <br/>clientes para poder ofrecer futuros servicio e <br/>incrementa tus ventas</p>
            <Link href='/pricing'className="btn mt05 flex centerResponsiveButton" style={{color: '#3662e3', padding: '0rem'}}>
              <p className="mr1" style={{color: '#3662e3', top: '-.2rem', position: 'relative', fontSize: '1.1rem'}}>Mas información
              </p>
              <IonIcon style={{fontSize: '1.1rem'}} name="arrow-forward-outline"/>

            </Link>
          </div>
          
        </div>
        <div className="w100 flex center displayBlockResponsive mt2" style={{paddingBottom: '2rem', justifyContent: 'center'}}>
          <div className="left centerResponsive">
            <h1 className="mt1" style={{fontSize: '1.5rem', fontWeight: '600'}}>Historial de tus clientes            </h1>
            <p className="subsubtitle mt05" style={{fontSize: '1.1rem'}}>Lleva el historial de visitas y servicios de tus clientes <br/> de manera rápida y sencilla para evitar posibles<br/> reclamos más adelante.</p>
            <Link href='/pricing' className="btn mt05 flex centerResponsiveButton" style={{color: '#3662e3', padding: '0rem'}}>
              <p className="mr1" style={{color: '#3662e3', top: '-.2rem', position: 'relative', fontSize: '1.1rem'}}>Mas información
              </p>
              <IonIcon style={{fontSize: '1.1rem'}} name="arrow-forward-outline"/>

            </Link>
          </div>
          <div  className="center">
            <img className="centerResponsiveButton" src={Hero4.src}/>
          </div>
        </div>
        <h1 className="mt2" style={{fontSize: '1.5rem', fontWeight: '600', marginBottom: '2rem'}}>¿Te quedaron dudas?            </h1>
        <Link target='_blank' href="https://api.whatsapp.com/send?phone=+51941531016&text=¿En que podemos ayudarte?" className="btn-whatsapp">
                        
          <IonIcon style={{marginRight: '1rem'}} name="logo-whatsapp"/>
          Escribenos por WhatsApp
        </Link>
        <div style={{textAlign: 'center', paddingTop: '2rem', paddingBottom: '2rem'}}/>

      </section>
      
      
      <Footer/>
      
    </>
  );
}

export default Page;