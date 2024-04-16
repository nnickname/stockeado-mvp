import { Metadata } from "next";
import CreateQuoteLayoutPage from "./layout";
export const metadata: Metadata = {
    title: "Stockeado - Crear cotización",
    description: "Stockeado | Crear cotización",

};
const Page = () => {
    return <CreateQuoteLayoutPage/>;
}

export default Page