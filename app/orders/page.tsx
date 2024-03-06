import { Metadata } from "next";
import OrdersLayoutPage from "./layout";
export const metadata: Metadata = {
    title: "Stockeado - Solicitudes finales",
    // other metadata
};
const OrdersPage = () => {
    return <OrdersLayoutPage/>;
}

export default OrdersPage