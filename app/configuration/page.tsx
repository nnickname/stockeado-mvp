
import { Metadata, NextPage } from "next";
import SideBarComponent from "@/components/panel/sidebar";
import SellResume from "@/components/panel/sellresume";
import InventoryResume from "@/components/panel/inventoryresume";
import LayoutConfigurationPage from './layout';


export const metadata: Metadata = {
  title: "Stockeado - Configuración",
  description: "Mira tu Resumen en Stockeado",
  // other metadata
};
const Page = () => {
  return (
    <>
      <LayoutConfigurationPage/>
    </>
  );
};

export default Page;
