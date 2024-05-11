
import { Metadata } from "next";
import NewOrderWorkshopLayoutPage from "./layout";
export const metadata: Metadata = {
    title: "Stockeado - Nueva Orden de servicio",
    description: "Stockeado | Nueva Orden de servicio",

};
const Page = () => {
    return <NewOrderWorkshopLayoutPage/>;
}

export default Page;