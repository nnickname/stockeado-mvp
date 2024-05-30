
import { Metadata } from "next";
import UsersWorkshopLayoutPage from "./layoutview";
export const metadata: Metadata = {
    title: "Stockeado - Usuarios",
    description: "Stockeado | Usuarios",

};
const Page = () => {
    return <UsersWorkshopLayoutPage/>;
}

export default Page