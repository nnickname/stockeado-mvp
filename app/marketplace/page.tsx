import 'react-responsive-modal/styles.css';
import './index.css';
import LayoutMarketPlaceNative from './layoutMP';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: "Stockeado | Marketplace",
  description: "Stockeado | Marketplace",

};
const PageMarketPlaceNative = () => {
  
  return (
    <LayoutMarketPlaceNative/>
  );
}

export default PageMarketPlaceNative;