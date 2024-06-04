'use client';
import { getUser, verifyUserWorkshop } from "@/app/api/user/call";
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
import { getAllCalendars, updateCalendar } from "@/app/api/workshop/calendars/call";
import { CalendarsModel } from "@/models/workshops/calendars.model";
const HomeWorkshopLayoutPage = () => {
    const router = useRouter();
    const [user, setUser] = useState<UserModel>(null);
    const [inspections, setInspections] = useState<InspectionsModel[]>([]);
    const [vehicles, setVehicles] = useState<VehiclesModel[]>([]);
    const [clients, setClients] = useState<ClientsModel[]>([]);
    const [orders, setOrders] = useState<OrderWorkshopModel[]>([]);
    const [calendars, setCalendars] = useState<CalendarsModel[]>([]);

    const [clientsFilterr, setClientsFilter] = useState<ClientsModel[]>([]);
    const [month, selectMonth] = useState<number>(new Date().getMonth());
    const [percentageIncreaseClients , setPercentageClientsIncrease] = useState<number>(0);
    const [ordersFilterr, setOrdersFilter] = useState<OrderWorkshopModel[]>([]);
    const [orderTotal, setOrdersTotal] = useState<number>(0);
    const [orderAverage, setOrderAverage] = useState<number>(0);
    const [clientAverage, setClientAverage] = useState<number>(0);

    const toUser = async () => {
        const userr = await getUser();
        var ownerid = String(userr?._id);
        if(!verifyUserWorkshop(userr, router, '/workshop/home')) {
            return;
        }
        if(userr?.role !== 'owner'){
            ownerid = userr?.owner;
        }
        const vehiclesCast = await getAllVehicles(ownerid);
        const inspectionsCast = await getAllInspections(ownerid);
        const clientsCast = await getAllClients(ownerid);
        const ordersCast = await getAllOrderServices(ownerid);
        const calendarsCast = await getAllCalendars(ownerid);
        setCalendars(calendarsCast ?? []);
        setVehicles(vehiclesCast ?? []);
        setInspections(inspectionsCast ?? []);
        setClients(clientsCast ?? []);
        setOrders(ordersCast ?? []);
        setUser(userr);
        filterMonth(Number(new Date().getMonth() +1), clientsCast, ordersCast);
        selectMonth(Number(new Date().getMonth() +1));

      }
    useEffect(() => {
        toUser();
    }, []);
    const filterMonth = (month: number, clients: ClientsModel[], orders: OrderWorkshopModel[]) => {
        const currentDate = new Date();
        var clientsFilterBeforeMonth: ClientsModel[] = [];
        var clientsFilter: ClientsModel[] = [];
        clients?.map((e) => {
            const date = new Date(e?.createdAt);
            if(currentDate.getFullYear() === date?.getFullYear()){
                if(month === Number(date?.getMonth() +1)){
                    clientsFilter.push(e);
                }
            }
        });
        clients?.map((e) => {
            const date = new Date(e?.createdAt);
            if(currentDate.getFullYear() === date?.getFullYear()){
                if(month === Number(date?.getMonth())){
                    clientsFilterBeforeMonth.push(e);
                }
            }
        });
        const difference = (clientsFilter.length - clientsFilterBeforeMonth?.length);
        const differenceCast = (difference / 100) * 100
        const finalNumber = differenceCast*100;
        setClientsFilter(clientsFilter ?? []);
        setPercentageClientsIncrease(finalNumber > 0 ? finalNumber : 0);
        selectMonth(month);


        var ordersFilter: OrderWorkshopModel[] = [];
        var priceToAverage: number[] = [];
        var orderTotal:number = 0;
        orders?.map((e) => {
            const date = new Date(e?.createdAt);
            if(currentDate.getFullYear() === date?.getFullYear()){
                if(month === Number(date?.getMonth() +1)){
                    ordersFilter.push(e);
                    orderTotal = orderTotal+Number(e?.totalPrice);
                    priceToAverage.push(Number(e?.totalPrice));
                }
            }
        });
        setOrdersTotal(orderTotal);
        setOrderAverage(orderTotal / priceToAverage?.length);
        setClientAverage(orderTotal / clientsFilter?.length);
        setOrdersFilter(ordersFilter ?? []);
    }   
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
                                <select value={month} onChange={(e) => filterMonth(Number(e.target.value), clients, orders)} className="selectHomeWorkshop mt2">
                                    <option value={0}>Mes</option>
                                    <option value={1}>Enero</option>
                                    <option value={2}>Febrero</option>
                                    <option value={3}>Marzo</option>
                                    <option value={4}>Abril</option>
                                    <option value={5}>Mayo</option>
                                    <option value={6}>Junio</option>
                                    <option value={7}>Julio</option>
                                    <option value={8}>Agosto</option>
                                    <option value={9}>Septiembre</option>
                                    <option value={10}>Octubre</option>
                                    <option value={11}>Noviembre</option>
                                    <option value={12}>Diciembre</option>
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
                                    <span className="span">{ordersFilterr?.length}</span>
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
                                    <span className="span">s/. {orderTotal.toFixed(2)}</span>
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
                                    <span className="span">s/. {isNaN(orderAverage) ? 0 : orderAverage.toFixed(2)}</span>
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
                                    <span className="span">{clientsFilterr?.length}</span>
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
                                    <span className="span">+ {isNaN(percentageIncreaseClients) ? 0 : percentageIncreaseClients}%</span>
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
                                    <span className="span">s/. {isNaN(clientAverage) ? 0 : clientAverage.toFixed(2)}</span>
                                </div>
                            </div>
                        </div>
                        <p className="subtitle mt2">Recordatorios</p>
                        <p className="subsubtitle"> Registra recordatorios para no perder clientes y ganar más por vehículo</p>
                        <div className="card w100 inline-items br0 mt1">
                            <p className="inline-items subsubtitle mt1 ml1">Tareas por vencer hoy:
                            { calendars?.length === 0 ? <span> No encontrado</span>:<span></span>} </p>
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
    
    const [checked, setChecked] = useState<boolean>(false);
    useEffect(() => {
        setChecked(calendar?.checked === 'on' ? true : false);
    }, []);
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
                <Checkbox checked={checked} value={checked} onChange={async (e) => {
                    calendar.checked = e?.target.checked === true ? 'on' : '';
                    const response = await updateCalendar(String(calendar?._id), calendar);
                    console.log(calendar);
                    if(response){
                        setChecked(!checked)
                    }
                    }} inputProps={{ 'aria-label': '' }}></Checkbox>
                <h1 className="title ml1">{calendar?.title}</h1>
            </div>
            <div className="flex mt05">
                <p className="subsubtitle mr1">Vehículo</p>
                {calendar?.vehicle !== '' ? <Link href={'/workshop/vehicles/view?id=' + calendar?.vehicle} className="subsubtitle btn color-link ml1">{vehicle?.brand + ' ' + vehicle?.model} - {vehicle?.plate}</Link> : <p className="subsubtitle" style={{fontSize: '.8rem'}}>No encontrado</p>}
            </div>
            <div className="flex mt05">
                <p className="subsubtitle mr1">Cliente</p>
                {calendar?.client !== '' ? <Link href={'/workshop/clients/view?id=' + calendar?.client} className="subsubtitle btn color-link ml1">{client?.name + ' ' + client?.lastname}</Link> : <p className="subsubtitle" style={{fontSize: '.8rem'}}>No encontrado</p>}
            </div>
            <div className="flex mt05">
                <p className="subsubtitle mr1">Inspección</p>
                {calendar?.inspection !== '' ? <Link href={'/workshop/inspections/view?id=' + calendar?.inspection} className="subsubtitle btn color-link ml1">Inspección #{indexInpection}</Link> : <p className="subsubtitle" style={{fontSize: '.8rem'}}>No encontrado</p>}
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