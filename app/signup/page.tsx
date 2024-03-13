import Link from "next/link";

import { Metadata } from "next";
import LayoutSignUp from "./layout";

export const metadata: Metadata = {
  title: "Stockeado | Crear cuenta",
  description: "En nuestra version beta create una cuenta como proveedor para empezar a vender tu inventario.",
  // other metadata
};

const Page = () => {
  return (
    <>
      <LayoutSignUp/>
    </>
  );
};

export default Page;
