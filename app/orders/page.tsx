import { Metadata } from "next";
import OrdersLayoutPage from "./layout";
export const metadata: Metadata = {
    title: "Stockeado - Solicitudes finales",
    description: "Stockeado | Solicitudes finales",

};
const OrdersPage = () => {
    return <OrdersLayoutPage/>;
}

export default OrdersPage