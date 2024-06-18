
import { Metadata, NextPage } from "next";
import LayoutConfigurationPage from './layout';


export const metadata: Metadata = {
  title: "Stockeado - Configuración",
  description: "Mira tu Resumen en Stockeado",
  // other metadata
};
const Page = () => {
  return (
    <>
      <LayoutConfigurationPage/>
    </>
  );
};

export default Page;
