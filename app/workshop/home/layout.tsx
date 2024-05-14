'use client';
import { getUser } from "@/app/api/user/call";
import SideBarComponent from "@/components/panel/sidebar";
import { UserModel } from "@/models/user.model";
import IonIcon from "@reacticons/ionicons";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import './index.css';
import SchedulerRender from "./scheduler";
import Link from "next/link";
import '../inspections/create/index.css';
import { Popover } from 'react-tiny-popover';
import Checkbox from "@mui/material/Checkbox";
const HomeWorkshopLayoutPage = () => {
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
    return <>  
        {user === null ? <IonIcon name='chevron-collapse-outline' className="rotateItem" color='#1366D9' style={{fontSize: '1.5rem', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}/> :
            <SideBarComponent user={user} route='/workshop/home' frameContennt={
                <div>
                    <h1 className="headerSideBar"> Dashboard general</h1>
                    <div className="p1">
                        
                        <div className="flex mt1"> 
                            <Link href='/workshop/inspections/create'  className="btn-gradient-primary"><IonIcon className="mr1" name="search-outline" style={{fontSize: '1.1rem'}}/> <span style={{fontSize: '1rem'}}> Nueva Inspección</span></Link>
                            <Link href='/workshop/orders/create'  className="btn-gradient-secondary ml1"><IonIcon className="mr1" name="bag-outline" style={{fontSize: '1.1rem'}}/> <span style={{fontSize: '1rem'}}>Nuevo servicio</span></Link>
                            <Link href='/workshop/clients' className="btn-gradient-secondary ml1"><IonIcon className="mr1" name="person-outline" style={{fontSize: '1.1rem'}}/> <span style={{fontSize: '1rem'}}>Nuevo cliente</span></Link>

                        </div>
                        
                        <div className="flex between">
                            <div>
                                <p className="subtitle mt2">Órdenes de servicio</p>
                            </div>
                            <div>
                                <select className="selectHomeWorkshop mt2">
                                    <option>Abril</option>
                                    <option>Mayo</option>
                                </select>
                            </div>
                            
                        </div>

                        <div className="flex between displayBlockResponsive">
                            <div className="cardHome mt1">
                                <div>
                                    <div className="icon1">
                                        <IonIcon size="large" name="car-outline"/>
                                    </div>
                                </div>
                                <div className="ml1">
                                    <p>Servicios realizados</p>
                                    <span className="span">25</span>
                                </div>
                            </div>
                            <div className="cardHome mt1">
                                <div>
                                    <div className="icon2">
                                        <IonIcon size="large" name="cash-outline"/>
                                    </div>
                                </div>
                                <div className="ml1">
                                    <p>Ingresos</p>
                                    <span className="span">s/. 1400</span>
                                </div>
                            </div>
                            <div className="cardHome mt1">
                                <div>
                                    <div className="icon3">
                                        <IonIcon size="large" name="cart-outline"/>
                                    </div>
                                </div>
                                <div className="ml1">
                                    <p>Ticket por servicio</p>
                                    <span className="span">s/. 560</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className="subtitle mt1">Clientes</p>
                        </div>
                        <div className="flex between displayBlockResponsive">
                            <div className="cardHome mt1">
                                <div>
                                    <div className="icon1">
                                        <IonIcon size="large" name="person-add-outline"/>
                                    </div>
                                </div>
                                <div className="ml1">
                                    <p>Nuevos clientes</p>
                                    <span className="span">11</span>
                                </div>
                            </div>
                            <div className="cardHome mt1">
                                <div>
                                    <div className="icon2">
                                        <IonIcon size="large" name="bar-chart-outline"/>
                                    </div>
                                </div>
                                <div className="ml1">
                                    <p>Crecimiento cliente</p>
                                    <span className="span">+ 45%</span>
                                </div>
                            </div>
                            <div className="cardHome mt1">
                                <div>
                                    <div className="icon3">
                                        <IonIcon size="large" name="cart-outline"/>
                                    </div>
                                </div>
                                <div className="ml1">
                                    <p>Ticket por cliente</p>
                                    <span className="span">s/. 655</span>
                                </div>
                            </div>
                        </div>
                        <p className="subtitle mt2">Recordatorios</p>
                        <p className="subsubtitle"> Registra recordatorios para no perder clientes y ganar más por vehículo</p>
                        <div className="card w100 inline-items br0 mt1">
                            <p className="inline-items subsubtitle mt1 ml1">Tareas por vencer hoy: </p>
                            
                            <PopoverRender/>
                            <PopoverRender/>
                            
                            
                        </div>
                        <div className="">
                            <SchedulerRender/>
                        </div>


                    </div>
                </div>
            
            }/>
        }
        
        
          
    </>
}
const PopoverRender = () => {
    const [isPopoverOpen, setIsPopoverOpen] = useState<boolean>(false);
    return <Popover         
        containerStyle={{
            backgroundColor: 'white',
            padding: '1rem',
            border: '1px solid rgba(0, 0, 0, 0.2)',
            borderRadius: '.5rem'
        }}
        isOpen={isPopoverOpen}
        positions={['top', 'bottom', 'left', 'right']} // preferred positions by priority
        content={<div className="p1">
            <div className="flex"> 
                <Checkbox inputProps={{ 'aria-label': '' }}></Checkbox>
                <h1 className="title ml1">Mantenimiento 100 000 km</h1>
            </div>
            <div className="flex mt05">
                <p className="subsubtitle mr1">Vehículo</p>
                <p className="subsubtitle btn color-link ml1">BMW 320i - ANZ123</p>
            </div>
            <div className="flex mt05">
                <p className="subsubtitle mr1">Cliente</p>
                <p className="subsubtitle btn color-link ml1">Jorge Perez</p>
            </div>
            <div className="flex mt05">
                <p className="subsubtitle mr1">Inspección</p>
                <p className="subsubtitle btn color-link ml1">Inspección #21</p>
            </div>
            <h1 className="mt1 subsubtitle">Fecha de vencimiento</h1>
            <div className="flex mt05">
                <div className="item-create">
                    <div className="flex">
                        <p>03-05-2024</p>
                        <IonIcon className="ml1" name="calendar-outline"/>
                    </div>
                </div>
                <div className="item-create ml1">
                <div className="flex">
                    <p>10:00</p>
                    <IonIcon className="ml1" name="time-outline"/>
                </div>
            </div>
            </div>
        </div>} children={
            <div onClick={() => setIsPopoverOpen(!isPopoverOpen)} className="btn item-create small mt1 ml1">
                <div className="flex">
                    <p>Mantenimiento 100 000 km</p>
                </div>
            </div>}        
        >
        
    </Popover>
}
export default HomeWorkshopLayoutPage;