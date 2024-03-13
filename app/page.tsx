import 'react-responsive-modal/styles.css';
import LayoutMarketPlaceNative from './marketplace/layoutMP';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Stockeado | Marketplace",
  // other metadata
};
const Page = () => {

  return (
    <LayoutMarketPlaceNative/>
  );
}

export default Page;