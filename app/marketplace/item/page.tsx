import type { Metadata, NextPage } from "next";
import '../index.css';
import LayoutMarketPlaceItem from "./layout";
export const dynamic='force-dynamic';
export const metadata: Metadata = {
  title: "Stockeado - Item",
  description: "Mira tu item en linea con Stockeado",
  // other metadata
};
const ItemMarketPlaceView: NextPage = () => {
    return <>
        <LayoutMarketPlaceItem />      
  </>
}
export default ItemMarketPlaceView;