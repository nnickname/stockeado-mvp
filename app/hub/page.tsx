"use client";
import Link from "next/link";

import { Metadata, NextPage } from "next";
import SideBarComponent from "@/components/panel/sidebar";



const HubExample: NextPage = () => {
  return (
    <>
      <SideBarComponent frameContennt={<div></div>}/>
    </>
  );
};

export default HubExample;
