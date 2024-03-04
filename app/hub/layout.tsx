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
import { OrderModel } from "@/models/ordersModel";
import { getOrders } from "../api/orderss/call";
const LayouHubDashboardPage = () =>{
    const router = useRouter();
    const [user, setUser] = useState<UserModel>();
    const [realInventory, setRealInventory] = useState<InventoryModel[]>([]);
    const [ordersData, setOrderData] = useState<OrderModel[]>([]);

    const toUser = async () => {
        const userr = await getUser();
        if(userr === undefined || userr === null){
            router.push('/signin');
        }
        const ordersCast = await getOrders(userr?._id);
        setOrderData(ordersCast);
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
            <SellResume orders={ordersData} user={user}/>
            <InventoryResume items={realInventory} orders={ordersData} user={user}/>

        </div>
      }/>;
}

export default LayouHubDashboardPage;