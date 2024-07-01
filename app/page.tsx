import 'react-responsive-modal/styles.css';
import LayoutDashboard from './dashboard/page';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Stockeado",
  // other metadata
};
const Page = () => {

  return (
    <LayoutDashboard/>
  );
}

export default Page;