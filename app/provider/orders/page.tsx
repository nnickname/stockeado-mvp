import { Metadata } from "next";
import OrdersLayoutPage from "./layout";
export const metadata: Metadata = {
    title: "Stockeado - Solicitudes finales",
    description: "Stockeado | Solicitudes finales",

};
const Page = () => {
    return <OrdersLayoutPage/>;
}

export default Page