import 'react-responsive-modal/styles.css';
import LayoutMarketPlaceFindItem from './layoutsearch';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: "Stockeado | Marketplace - Buscar",
  // other metadata
};
const Page = () => {
  
  return (
    <LayoutMarketPlaceFindItem/>
  );
}

export default Page;
