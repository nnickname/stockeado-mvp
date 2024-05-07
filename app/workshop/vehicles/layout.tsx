'use client';
import { getUser } from "@/app/api/userr/call";
import SideBarComponent from "@/components/panel/sidebar";
import { UserModel } from "@/models/user.model";
import IonIcon from "@reacticons/ionicons";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const VehiclesWorkshopLayoutPage = ( ) => {
    const router = useRouter();
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
            <SideBarComponent user={user} route='/workshop/vehicles' frameContennt={
                <div>
                    <h1 className="headerSideBar"> Vehículos</h1>
                    <div className="p1">
                        <div className="flex between">
                            <div>
                                <p className="subtitle mt2">Vehículos registrados recientes</p>
                            </div>
                            <div>
                                <button className="btn-gradient-secondary mt1"><IonIcon className="mr1" name="car-outline" style={{fontSize: '1.1rem'}}/> <span style={{fontSize: '1rem'}}>Nuevo vehículos</span></button>
                            </div>
                        </div>
                        
                        <div className="flex w100 mt1">
                            <div className="inputRightIcon">
                                
                                <input placeholder="Busca por vehículo, placa o fecha"/>
                                <div>
                                    <IonIcon name="search-outline"/>
                                </div>
                            </div>
                                <select className="selectHomeWorkshop ml1">
                                        <option>Abril</option>
                                        <option>Mayo</option>
                                </select>
                        </div>
                    </div>
                </div>
            }
            />
        }
    </div>
}
export default VehiclesWorkshopLayoutPage;