import HeaderMarketPlace from "@/components/marketplace/header";
import type { Metadata, NextPage } from "next";
import '../index.css';
import LayoutMarketPlaceShop from "./layout";
export const dynamic='force-dynamic';
export const metadata: Metadata = {
  title: "Stockeado | Marketplace",
  description: "Stockeado | Marketplace",

};
const Page: NextPage = () => {
    return <>
        <LayoutMarketPlaceShop/>      
  </>
}
export default Page;