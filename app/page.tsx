'use client';

import Brands from "@/components/dashboard/Brands";
import ScrollUp from "@/components/dashboard/Common/ScrollUp";
import Contact from "@/components/dashboard/Contact";
import Features from "@/components/dashboard/Features";
import Footer from "@/components/dashboard/Footer";
import Header from "@/components/dashboard/Header";
import Hero from "@/components/dashboard/Hero";

import Pricing from "@/components/dashboard/Pricing";
import Video from "@/components/dashboard/Video";
import { useTheme } from "next-themes";
import 'react-responsive-modal/styles.css';


const Home = () => {
  const { theme, setTheme } = useTheme();

  return (
    <>
      {setTheme('light')}
      <Header/>
      <ScrollUp />
      <Hero />
      <Brands />

      <Features />
      <Video />
      
      
      <Contact />
      <Footer/>
      
    </>
  );
}

export default Home;