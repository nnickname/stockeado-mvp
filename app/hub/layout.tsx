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
const LayouHubDashboardPage = () =>{
    const router = useRouter();
    const [user, setUser] = useState<UserModel>();
    const toUser = async () => {
        const userr = await getUser();
        console.log(userr);
        if(userr === undefined || userr === null){
            router.push('/signin');
        }
        setUser(userr);
    }
    useEffect(() => {
        toUser();
    }, []);

    return <SideBarComponent user={user} route='dashboard' frameContennt={
        <div>
            <SellResume/>
            <InventoryResume/>

        </div>
      }/>;
}

export default LayouHubDashboardPage;