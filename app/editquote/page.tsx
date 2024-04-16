import { Metadata } from "next";
import EditQuoteLayoutPage from "./layout";
export const metadata: Metadata = {
    title: "Stockeado - Editar cotización",
    description: "Stockeado | Editar cotización",

};
const Page = () => {
    return <EditQuoteLayoutPage/>;
}

export default Page