'use client';
import { getUser } from "@/app/api/userr/call";
import SideBarComponent from "@/components/panel/sidebar"
import { UserModel } from "@/models/user.model";
import IonIcon from "@reacticons/ionicons"
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const LayoutViewClientWorkShop = ( ) => {
    const router = useRouter();
    const [open, setOpen] = useState<boolean>();
    const [user, setUser] = useState<UserModel>(null);

    const toUser = async () => {
        const userr = await getUser();
        if(userr === undefined || userr === null){
              router.push('/');
        }
        if(userr?.type !== 'workshop'){
            router.push('/provider/home');
        }
        setUser(userr);
      }
    useEffect(() => {
        toUser();
    }, []);
    return <div>
        {user === null ? <IonIcon name='chevron-collapse-outline' className="rotateItem" color='#1366D9' style={{fontSize: '1.5rem', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}/> :
            <SideBarComponent user={user} route='/workshop/clients' frameContennt={
                <div>
                    <div className="flex between">
                        <h1 className="headerSideBar"> Clientes</h1>
                        <div style={{background: 'white'}}>
                            <button onClick={() => router.push('/workshop/clients')} className="btn-back mr1 mt1"><IonIcon name="arrow-back-outline"/></button>
                        </div>
                    </div>
                    <div className="p1">
                        <h1 className="subtitle">Cliente #21</h1>
                    </div>
                </div>
            }/>
        }
    </div>
}
export default LayoutViewClientWorkShop;