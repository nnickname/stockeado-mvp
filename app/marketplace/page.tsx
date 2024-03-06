import 'react-responsive-modal/styles.css';
import './index.css';
import LayoutMarketPlaceNative from './layoutMP';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: "Stockeado | Marketplace",
  // other metadata
};
const PageMarketPlaceNative = () => {
  
  return (
    <LayoutMarketPlaceNative/>
  );
}

export default PageMarketPlaceNative;