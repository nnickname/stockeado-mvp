import HeaderMarketPlace from "@/components/marketplace/header";
import type { Metadata, NextPage } from "next";
import '../index.css';
import LayoutMarketPlaceShop from "./layout";
export const dynamic='force-dynamic';
export const metadata: Metadata = {
  title: "Stockeado | Marketplace",
  // other metadata
};
const MarketPlaceURLPage: NextPage = () => {
    return <>
        <LayoutMarketPlaceShop/>      
  </>
}
export default MarketPlaceURLPage;