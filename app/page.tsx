'use client';
import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";

import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { useTheme } from "next-themes";
import {useEffect} from 'react';
import 'react-responsive-modal/styles.css';


const Home = () => {
  const { theme, setTheme } = useTheme();

  return (
    <>
      {setTheme('light')}

      <ScrollUp />
      <Hero />
      <Brands />

      <Features />
      <Video />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Pricing />
      <Contact />
      
    </>
  );
}

export default Home;