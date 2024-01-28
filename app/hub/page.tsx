"use client";
import Link from "next/link";

import { Metadata, NextPage } from "next";
import SideBarComponent from "@/components/panel/sidebar";
import SellResume from "@/components/panel/sellresume";
import InventoryResume from "@/components/panel/inventoryresume";



const HubExample: NextPage = () => {
  return (
    <>
      <SideBarComponent route='dashboard' frameContennt={
        <div>
            <SellResume/>
            <InventoryResume/>

        </div>
      }/>
    </>
  );
};

export default HubExample;
