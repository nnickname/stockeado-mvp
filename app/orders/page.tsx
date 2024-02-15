import { Metadata } from "next";
import OrdersLayoutPage from "./layout";
export const metadata: Metadata = {
    title: "Stockeado - Solicitudes finales",
    description: "This is Sign In Page for Startup Nextjs Template",
    // other metadata
};
const OrdersPage = () => {
    return <OrdersLayoutPage/>;
}

export default OrdersPage