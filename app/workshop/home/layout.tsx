'use client';
import { getUser } from "@/app/api/user/call";
import SideBarComponent from "@/components/panel/sidebar";
import { UserModel } from "@/models/user.model";
import IonIcon from "@reacticons/ionicons";
import { useRouter } from "next/navigation";
import { useState, useEffect, FunctionComponent } from "react";
import './index.css';
import SchedulerRender from "./scheduler";
import Link from "next/link";
import '../inspections/create/index.css';
import { Popover } from 'react-tiny-popover';
import Checkbox from "@mui/material/Checkbox";
import { getAllVehicles } from "@/app/api/workshop/vehicles/call";
import { getAllInspections } from "@/app/api/workshop/inspections/call";
import { InspectionsModel } from "@/models/workshops/inspections.model";
import { VehiclesModel } from "@/models/workshops/vehicles.model";
import { ClientsModel } from "@/models/workshops/clients.model";
import { getAllClients } from "@/app/api/workshop/clients/call";
import { getAllOrderServices } from "@/app/api/workshop/orders/call";
import { OrderWorkshopModel } from "@/models/workshops/orders.model";
import { getAllCalendars } from "@/app/api/workshop/calendars/call";
import { CalendarsModel } from "@/models/workshops/calendars.model";
const HomeWorkshopLayoutPage = () => {
    const router = useRouter();
    const [user, setUser] = useState<UserModel>(null);
    const [inspections, setInspections] = useState<InspectionsModel[]>([]);
    const [vehicles, setVehicles] = useState<VehiclesModel[]>([]);
    const [clients, setClients] = useState<ClientsModel[]>([]);
    const [orders, setOrders] = useState<OrderWorkshopModel[]>([]);
    const [calendars, setCalendars] = useState<CalendarsModel[]>([]);
    const toUser = async () => {
        const userr = await getUser();
        if(userr === undefined || userr === null){
              router.push('/');
        }
        if(userr?.type !== 'workshop'){
            router.push('/provider/home');
        }
        const vehiclesCast = await getAllVehicles(String(userr?._id));
        const inspectionsCast = await getAllInspections(String(userr?._id));
        const clientsCast = await getAllClients(String(userr?._id));
        const ordersCast = await getAllOrderServices(String(userr?._id));
        const calendarsCast = await getAllCalendars(String(userr?._id));
        console.log(calendarsCast);
        setCalendars(calendarsCast ?? []);
        setVehicles(vehiclesCast ?? []);
        setInspections(inspectionsCast ?? []);
        setClients(clientsCast ?? []);
        setOrders(ordersCast ?? []);
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
                            {...calendars?.map((e) => {
                                const currentTime = new Date();
                                const timeTask = new Date(e?.dateStart);
                                if(timeTask.getDay() === currentTime.getDay()){
                                    if(timeTask.getMonth() === currentTime.getMonth()){
                                        if(timeTask.getFullYear() === currentTime.getFullYear()){
                                            return <PopoverRender vehicles={vehicles} clients={clients} inspections={inspections} calendar={e}/>
                                        }
                                    }
                                }
                                
                            })}
                            
                            
                            
                        </div>
                        <div className="">
                            <SchedulerRender setCalendars={setCalendars} calendars={calendars} userid={String(user?._id)} orders={orders} vehicles={vehicles} clients={clients} inspections={inspections}/>
                        </div>


                    </div>
                </div>
            
            }/>
        }
        
        
          
    </>
}
type PopoverRenderProps = {
    calendar: CalendarsModel
    vehicles: VehiclesModel[],
    clients: ClientsModel[],
    inspections: InspectionsModel[]
}
const PopoverRender: FunctionComponent<PopoverRenderProps> = ({calendar, vehicles, clients, inspections}) => {
    const [isPopoverOpen, setIsPopoverOpen] = useState<boolean>(false);
    const finalcalendarTime = new Date(calendar?.dateEnd);
    const vehicle = vehicles?.find(e => String(e?._id) === calendar?.vehicle);
    const client = clients?.find(e => String(e?._id) === calendar?.client);
    var indexInpection: number = 0;
    const inspection = inspections?.find(e => String(e?._id) === calendar?.inspection);
    inspections?.map((e, index: number) => {
        if(String(e?._id) === calendar?.inspection){
            indexInpection = index;
        }
    })

    return <Popover  
        onClickOutside={() => setIsPopoverOpen(false)}       
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
                <h1 className="title ml1">{calendar?.title}</h1>
            </div>
            <div className="flex mt05">
                <p className="subsubtitle mr1">Vehículo</p>
                <Link href={'/workshop/vehicles/view?id=' + calendar?.vehicle} className="subsubtitle btn color-link ml1">{vehicle?.brand + ' ' + vehicle?.model} - {vehicle?.plate}</Link>
            </div>
            <div className="flex mt05">
                <p className="subsubtitle mr1">Cliente</p>
                <Link href={'/workshop/clients/view?id=' + calendar?.client} className="subsubtitle btn color-link ml1">{client?.name + ' ' + client?.lastname}</Link>
            </div>
            <div className="flex mt05">
                <p className="subsubtitle mr1">Inspección</p>
                <Link href={'/workshop/inspections/view?id=' + calendar?.inspection} className="subsubtitle btn color-link ml1">Inspección #{indexInpection}</Link>
            </div>
            <h1 className="mt1 subsubtitle">Fecha de vencimiento</h1>
            <div className="flex mt05">
                <div className="item-create">
                    <div className="flex">
                        <p>{finalcalendarTime.getDate()}-{finalcalendarTime.getMonth() +1 }-{finalcalendarTime.getFullYear()}</p>
                        <IonIcon className="ml1" name="calendar-outline"/>
                    </div>
                </div>
                <div className="item-create ml1">
                <div className="flex">
                    <p>{finalcalendarTime.getHours()}:{finalcalendarTime.getMinutes()}</p>
                    <IonIcon className="ml1" name="time-outline"/>
                </div>
            </div>
            </div>
        </div>} children={
            <div onClick={() => setIsPopoverOpen(!isPopoverOpen)} className="btn item-create small mt1 ml1">
                <div className="flex">
                    <p>{calendar?.title}</p>
                </div>
            </div>}        
        >
        
    </Popover>
}
export default HomeWorkshopLayoutPage;