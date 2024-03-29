import type { Metadata, NextPage } from "next";
import '../index.css';
import LayoutMarketPlaceItem from "./layout";
import { Suspense } from "react";
export const metadata: Metadata = {
  title: "Stockeado - Item",
  description: "Mira tu item en linea con Stockeado",
  // other metadata
};
const Page: NextPage = () => {
    return <Suspense>
        <LayoutMarketPlaceItem />      
    </Suspense>
}
export default Page;