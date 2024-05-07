
import { Metadata } from "next";
import LayoutViewClientWorkShop from "./layout";
export const metadata: Metadata = {
    title: "Stockeado - Cliente",
    description: "Stockeado | Cliente",

};
const Page = () => {
    return <LayoutViewClientWorkShop/>;
}

export default Page;