
import { Metadata } from "next";
import ClientsWorkshopLayoutPage from "./layout";
export const metadata: Metadata = {
    title: "Stockeado - Clientes",
    description: "Stockeado | Clientes",

};
const Page = () => {
    return <ClientsWorkshopLayoutPage/>;
}

export default Page