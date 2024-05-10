
import { Metadata } from "next";
import LayoutViewClientWorkShop from "./layoutview";
export const metadata: Metadata = {
    title: "Stockeado - Inspecciones",
    description: "Stockeado | Inspecciones",

};
const Page = () => {
    return <LayoutViewClientWorkShop/>;
}

export default Page;