
import { Metadata } from "next";
import VehiclesWorkshopLayoutPage from "./layoutview";
export const metadata: Metadata = {
    title: "Stockeado - Vehículos",
    description: "Stockeado | Vehículos",

};
const Page = () => {
    return <VehiclesWorkshopLayoutPage/>;
}

export default Page