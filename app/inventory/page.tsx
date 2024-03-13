
  import { Metadata, NextPage } from "next";

export const metadata: Metadata = {
    title: "Stockeado - Inventario",
    description: "Mira tu inventario en Stockeado",
    // other metadata
};
import InventoryResume from '@/components/panel/inventoryresume';
import LayoutHubInventoryPage from './layout';




const Page: NextPage = () => {
  return <>
      <LayoutHubInventoryPage/>
    
  </>
};

export default Page;
