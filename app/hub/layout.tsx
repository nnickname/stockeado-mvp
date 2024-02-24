'use client';
import { useRouter } from "next/navigation";
import InventoryResume from "@/components/panel/inventoryresume";
import SellResume from "@/components/panel/sellresume";
import SideBarComponent from "@/components/panel/sidebar";
import { createConnection } from "mongoose";
import { useEffect, useState } from "react";
import { getUser } from "../api/user/call";
import Cookie from 'universal-cookie';
import { UserModel } from '../../models/userModel';
import { InventoryModel } from "@/models/inventoryModel";
import { getInventory } from "../api/inventory/call";
const LayouHubDashboardPage = () =>{
    const router = useRouter();
    const [user, setUser] = useState<UserModel>();
    const [realInventory, setRealInventory] = useState<InventoryModel[]>([])
    const toUser = async () => {
        const userr = await getUser();
        console.log(userr);
        if(userr === undefined || userr === null){
            router.push('/signin');
        }
        setUser(userr);
    }
    const MakeData = async () => {
        const inventoryCast = await getInventory();
        await setRealInventory(inventoryCast);
    }
    useEffect(() => {
        toUser();
        MakeData();
    }, []);

    return <SideBarComponent user={user} route='dashboard' frameContennt={
        <div>
            <SellResume/>
            <InventoryResume items={realInventory}/>

        </div>
      }/>;
}

export default LayouHubDashboardPage;