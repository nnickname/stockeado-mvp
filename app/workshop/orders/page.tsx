import { Metadata } from "next";
import LayoutViewOrdersWorkShop from "./layoutview";
export const metadata: Metadata = {
    title: "Stockeado - Órdenes  servicio",
    description: "Stockeado | Órdenes  servicio",

};
const Page = () => {
    return <LayoutViewOrdersWorkShop/>;
}

export default Page