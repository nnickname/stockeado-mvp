
import { Metadata, NextPage } from "next";
import SideBarComponent from "@/components/panel/sidebar";
import SellResume from "@/components/panel/sellresume";
import InventoryResume from "@/components/panel/inventoryresume";
import LayouHubDashboardPage from './layout';


export const metadata: Metadata = {
  title: "Stockeado - Dashboard",
  description: "Mira tu Resumen en Stockeado",
  // other metadata
};
const HubExample: NextPage = () => {
  return (
    <>
      <LayouHubDashboardPage/>
    </>
  );
};

export default HubExample;
