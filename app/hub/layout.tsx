'use client';
import InventoryResume from "@/components/panel/inventoryresume";
import SellResume from "@/components/panel/sellresume";
import SideBarComponent from "@/components/panel/sidebar";

const LayouHubDashboardPage = () => {
    return <SideBarComponent route='dashboard' frameContennt={
        <div>
            <SellResume/>
            <InventoryResume/>

        </div>
      }/>;
}

export default LayouHubDashboardPage;