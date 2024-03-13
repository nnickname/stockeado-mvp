import Link from "next/link";
import { Metadata } from "next";
import Header from "@/components/dashboard/Header";
import { useState } from "react";

export const metadata: Metadata = {
  title: "Stockeado | Iniciar sesión",
  description: "Inicia sesión en tu cuenta de Stockeado",
  // other metadata
};
import LayoutSignIn from "./layout";
const Page = () => {
  return <LayoutSignIn/>;
};

export default Page;
