import { Metadata } from "next";
import QuoutesLayoutPage from "./layout";
export const metadata: Metadata = {
    title: "Stockeado - Cotizaciones",
    description: "Stockeado | Cotizaciones",

};
const Page = () => {
    return <QuoutesLayoutPage/>;
}

export default Page