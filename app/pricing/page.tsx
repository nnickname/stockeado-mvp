
import { Metadata, NextPage } from "next";
import SideBarComponent from "@/components/panel/sidebar";
import SellResume from "@/components/panel/sellresume";
import InventoryResume from "@/components/panel/inventoryresume";
import Pricing from "@/components/dashboard/Pricing";
import Header from "@/components/dashboard/Header";
import Footer from "@/components/dashboard/Footer";
import '../dashboard/index.css';

export const metadata: Metadata = {
  title: "Stockeado - Precios",
  description: "Stockeado - Precios",
  // other metadata
};
const Page = () => {
  return (
    <>
        <Header/>
        <div style={{marginTop: '9rem'}}></div>
        <div className="center">
            <h1 className="fz1Responsive" style={{fontSize: '3.8rem', fontWeight: '600'}}>
                Prueba cualquiera de nuestros <br/> planes gratis por 14 días
            </h1>
            <Pricing/>
        </div>
        <Footer/>
    </>
  );
};

export default Page;
