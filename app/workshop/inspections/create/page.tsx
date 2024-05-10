
import { Metadata } from "next";
import InspectionWorkshopLayoutPage from "./layout";
export const metadata: Metadata = {
    title: "Stockeado - Nueva inspección",
    description: "Stockeado | Nueva inspección",

};
const Page = () => {
    return <InspectionWorkshopLayoutPage/>;
}

export default Page;