import type { NextPage } from "next";
import '../index.css';
import LayoutMarketPlaceOrderView from "./layout";
export const dynamic='force-dynamic';

const OrderMarketPlaceViewPage: NextPage = () => {
    return <>
        <LayoutMarketPlaceOrderView />      
  </>
}
export default OrderMarketPlaceViewPage;