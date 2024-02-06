'use client';
import { useRouter } from "next/navigation";
import InventoryResume from "@/components/panel/inventoryresume";
import SellResume from "@/components/panel/sellresume";
import SideBarComponent from "@/components/panel/sidebar";
import { createConnection } from "mongoose";
import { useEffect, useState } from "react";
import { getUser } from "../api/user/login/call";
import Cookie from 'universal-cookie';
import { UserModel } from '../../models/user';
const LayouHubDashboardPage = () =>{
    const router = useRouter();
    const [user, setUser] = useState<UserModel>();
    const toUser = async () => {
        const cookies = new Cookie();
        const token = await cookies.get('access_token');
        const userr = await getUser(token);
        console.log(userr);
        if(userr === undefined){
            router.push('/');
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