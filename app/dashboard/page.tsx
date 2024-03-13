
import Brands from "@/components/dashboard/Brands";
import ScrollUp from "@/components/dashboard/Common/ScrollUp";
import Contact from "@/components/dashboard/Contact";
import Features from "@/components/dashboard/Features";
import Footer from "@/components/dashboard/Footer";
import Header from "@/components/dashboard/Header";
import Hero from "@/components/dashboard/Hero";

import Pricing from "@/components/dashboard/Pricing";
import Video from "@/components/dashboard/Video";
import { Metadata } from "next";
import { useTheme } from "next-themes";
import 'react-responsive-modal/styles.css';

export const metadata: Metadata = {
  title: "Stockeado | Inicio",
  description: "Stockeado | Inicio",

};
const Page = () => {

  return (
    <>
      <Header/>
      <ScrollUp />
      <Hero />
      <Brands />

      <Features />
      <Video />
      
      
      <Footer/>
      
    </>
  );
}

export default Page;