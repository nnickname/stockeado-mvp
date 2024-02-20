import HeaderMarketPlace from "@/components/marketplace/header";
import type { NextPage } from "next";
import '../index.css';
import LayoutMarketPlacePayment from "./layout";
export const dynamic='force-dynamic';

const MarketPlaceURLPage: NextPage = () => {
    return <>
        <LayoutMarketPlacePayment/>      
  </>
}
export default MarketPlaceURLPage;