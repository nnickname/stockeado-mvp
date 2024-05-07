'use client';
import { getUser } from "@/app/api/userr/call";
import SideBarComponent from "@/components/panel/sidebar";
import { UserModel } from "@/models/user.model";
import IonIcon from "@reacticons/ionicons";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const InspectionWorkshopLayoutPage = () => {
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
            <SideBarComponent user={user} route='/workshop/inspections' frameContennt={
                <div>
                    <h1 className="headerSideBar"> Nuevo informe de inspección</h1>
                    <div className="p1">
                        <div className="flex between">
                            <div>
                                <p className="subtitle mt1" style={{fontWeight: '500'}}>Inspección #21</p>
                            </div>
                            <div className="flex">
                                <p className="subtitle mt1">Estado</p>
                                <button className="btn-confirmed-secondary ml1 mt1">Confirmado</button>
                            </div>
                        </div>
                        <div className="cardWhiteForm mt2">
                            <p className="subsubtitle">Generales</p>
                            <div className="flex between displayBlockResponsive w100">
                                <div className="flex w100  mt1">
                                    <p className="formTitle mr1">Fecha de ingreso</p>
                                    <input className="inputForm ml1" type="datetime-local" placeholder=""/>
                                </div>
                                <div className="flex w100 mt1">
                                    <p className="formTitle mr1">Mecanico asignado</p>
                                    <input className="inputForm ml1" type="text" placeholder=""/>
                                </div>
                            </div>
                        </div>
                        <div className="flex between displayBlockResponsive">
                            <div className="cardWhiteForm mt1 w100 mr1">
                                <div className="flex between">
                                    <p className="subsubtitle">Cliente</p>
                                    <input className="inputForm" type="text" placeholder=""/>
                                </div>
                                <div className="flex between mt1">
                                    <p className="formTitle">Nombre</p>
                                    <input className="inputForm" type="text" placeholder=""/>
                                </div>
                                <div className="flex between mt1">
                                    <p className="formTitle">Apellido</p>
                                    <input className="inputForm" type="text" placeholder=""/>
                                </div>
                                <div className="flex between mt1">
                                    <p className="formTitle">Celular</p>
                                    <input className="inputForm" type="text" placeholder=""/>
                                </div>
                                <div className="flex between mt1">
                                    <p className="formTitle">Correo</p>
                                    <input className="inputForm" type="text" placeholder=""/>
                                </div>
                                <div className="flex between mt1">
                                    <p className="formTitle">Visita</p>
                                    <input className="inputForm" type="text" placeholder=""/>
                                </div>
                            </div>
                            <div className="cardWhiteForm mt1 w100 mr1">
                                <div className="flex between">
                                    <p className="subsubtitle">Vehículo</p>
                                    <input className="inputForm" type="text" placeholder=""/>
                                </div>
                                <div className="flex between mt1">
                                    <p className="formTitle">Placa</p>
                                    <input className="inputForm" type="text" placeholder=""/>
                                </div>
                                <div className="flex between mt1">
                                    <p className="formTitle">Marca</p>
                                    <input className="inputForm" type="text" placeholder=""/>
                                </div>
                                <div className="flex between mt1">
                                    <p className="formTitle">Modelo</p>
                                    <input className="inputForm" type="text" placeholder=""/>
                                </div>
                                <div className="flex between mt1">
                                    <p className="formTitle">Año</p>
                                    <input className="inputForm" type="text" placeholder=""/>
                                </div>
                                <div className="flex between mt1">
                                    <p className="formTitle">VIN</p>
                                    <input className="inputForm" type="text" placeholder=""/>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            }
            />
        }
    </div>
}
export default InspectionWorkshopLayoutPage;