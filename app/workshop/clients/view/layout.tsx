'use client';
import { getUser, verifyUserWorkshop } from "@/app/api/user/call";
import SideBarComponent from "@/components/panel/sidebar"
import { UserModel } from "@/models/user.model";
import IonIcon from "@reacticons/ionicons"
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import '../../home/index.css';
import { InspectionsModel } from "@/models/workshops/inspections.model";
import { getAllInspections } from "@/app/api/workshop/inspections/call";
import { getAllClients, getClient, updateClient } from "@/app/api/workshop/clients/call";
import { ClientsModel } from "@/models/workshops/clients.model";
import { getAllVehicles, getVehicle } from "@/app/api/workshop/vehicles/call";
import { VehiclesModel } from "@/models/workshops/vehicles.model";
import Link from "next/link";
import { toast } from "react-toastify";
import { OrderWorkshopModel } from "@/models/workshops/orders.model";
import { CalendarsModel } from "@/models/workshops/calendars.model";
const LayoutViewClientWorkShop = ( ) => {
    const router = useRouter();
    const [open, setOpen] = useState<boolean>();
    const [user, setUser] = useState<UserModel>(null);
    const [allInspections, setAllInspections] = useState<InspectionsModel[]>([]);
    const [currentVehicles, setCurrentVehicles] = useState<string[]>([]);
    const [allVehicles, setAllVehicles] = useState<VehiclesModel[]>([]);
    const [inspections, setInspections] = useState<InspectionsModel[]>([]);
    const [orderIndex, setOrderIndex] = useState<number>(null);
    const [orderServices, setOrderServices] = useState<OrderWorkshopModel[]>([]);
    const [clientid, setClientID] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [lastname, setLastname] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [calendars, setCalendars] = useState<CalendarsModel[]>([]);
    const [client, setClient] = useState<ClientsModel>(null);
    const buildForm = async () => {
        if(name !== '' && lastname !== '' && email !== '' && phone !== '' && clientid !== ''){
            const body = {
                _id: clientid,
                object: {
                    name, lastname, email, phone, updatedBy: user?.name + ' ' + user?.lastname
                }
            };
            const response = await updateClient(body);
            if(response){
                toast.success('Guardaste los cambios.');
            } else toast.error('Ocurrio un problema');
        }else toast.error('Completa el formulario.');
    }
    const toUser = async () => {
        const urlParams = new URLSearchParams(window.location.search);
        let id = urlParams.get('id');
        if(id === null) router?.push('/workshop/clients');
        const userr = await getUser();
        var ownerid = String(userr?._id);
        if(!verifyUserWorkshop(userr, router, '/workshop/clients')) {
            return;
        }
        if(userr?.role !== 'owner'){
            ownerid = userr?.owner;
        }
        setUser(userr);
        const clientsCast = await getAllClients(ownerid);
        const vehiclesCast = await getAllVehicles(ownerid);
        const inspectionsCast = await getAllInspections(ownerid);
        const response = await getClient(id);
        setClient(response?.client ?? {});
        setAllInspections(inspectionsCast ?? []);
        setCurrentVehicles(response?.client?.vehicles ?? []);
        setAllVehicles(vehiclesCast)
        setClientID(response?.client?._id);
        setName(response?.client?.name);
        setLastname(response?.client?.lastname);
        setEmail(response?.client?.email);
        setPhone(response?.client?.phone);
        setInspections(response?.inspections ?? []);
        setOrderServices(response?.orders ?? []);
        setCalendars(response?.calendars ?? []);
        var index = 0;
        clientsCast?.map((e, indexx: number) => {
            if(String(e?._id) === id) index = indexx;
        });
        setOrderIndex(index);
      }
    useEffect(() => {
        toUser();
    }, []);
    return <div>
        {orderIndex === null ? <IonIcon name='chevron-collapse-outline' className="rotateItem" color='#1366D9' style={{fontSize: '1.5rem', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}/> :
            <SideBarComponent user={user} route='/workshop/clients' frameContennt={
                <div>
                    <div className="flex between">
                        <h1 className="headerSideBar"> Clientes</h1>
                        <div style={{background: 'white'}}>
                            <button onClick={() => router.push('/workshop/clients')} className="btn-back mr1 mt1"><IonIcon name="arrow-back-outline"/></button>
                        </div>
                    </div>
                    <div className="p1">
                        <h1 className="subtitle">Cliente #{orderIndex +1}</h1>
                        <div className="card p1 mt1">
                            <div className="flex displayBlockResponsive w100">
                                <div className="flex w100 mr1 mt1">
                                    <p className="formTitle w100">Nombre</p>
                                    <input onChange={(e) => setName(e?.target.value)} value={name}  className="inputForm mr1 ml1" type="text" />
                                </div>
                                <div className="flex w100 mt1">
                                    <p className="formTitle w100">Apellido</p>
                                    <input onChange={(e) => setLastname(e?.target.value)} value={lastname} className="inputForm mr1 ml1 " type="text"/>
                                </div>
                            </div>
                            <div className="flex displayBlockResponsive mt1 w100">
                                <div className="flex w100 mr1 mt1">
                                    <p className="formTitle w100">Celular</p>
                                    <input onChange={(e) => setPhone(e?.target.value)} value={phone} className="inputForm mr1 ml1" type="text" />
                                </div>
                                <div className="flex w100 mt1">
                                    <p className="formTitle w100">Correo</p>
                                    <input onChange={(e) => setEmail(e?.target.value)} value={email} className="inputForm mr1 ml1" type="email" />
                                </div>
                            </div>
                        </div>

                        <div className="flex between mt1 displayBlockResponsive">
                            <div className="card mt1 flex between p1 w100 mr1">
                                <p className="subsubtitle w100">Vehículos asociados:</p>
                                <div className="w100 right">

                                    {currentVehicles?.length > 0 ? currentVehicles?.map((a) => {                                        
                                    
                                        return (<Link style={{display: 'block'}} href={'/workshop/vehicles/view?id=' + allVehicles?.find((e) => String(e?._id) === a)?._id} className="btn-link w100 mt05">{allVehicles?.find((e) => String(e?._id) === a).brand + ' ' + allVehicles?.find((e) => String(e?._id) === a).model + ' '}</Link>)
                                        
                                    }) : <button className="subsubtitle ">No encontrado</button>}
                                    
                                </div>
                            </div>
                            <div className="card mt1 flex between p1 w100">
                                <p className="subsubtitle w100">Ordenes servicio:</p>
                                <div className="w100 right">
                                    {orderServices?.length === 0 ? <button className="subsubtitle ">No encontrado</button> : orderServices?.map((e, index: number) => {
                                        return <Link style={{display: 'block'}} href={'/workshop/orders/view?id=' + e?._id} className="btn-link w100">Orden de servicio #{index + 1}</Link>
                                    })}
                                    
                                </div>
                            </div>
                        </div>

                        <div className="flex between mt1 displayBlockResponsive">
                            <div className="card mt1 flex between p1 w100 mr1">
                                <p className="subsubtitle w100">Inspecciones:</p>
                                
                                <div className="w100 right">
                                    {inspections?.length < 1 ? <button className="subsubtitle ">No encontrado</button> : 
                                        inspections?.map((e) => {
                                            var index = 0;
                                            allInspections?.map((a, indexx: number) => {
                                                if(String(e?._id) === String(a?._id)) {
                                                    index = indexx;
                                                }
                                            });
                                            return (<Link style={{display: 'block'}} href={'/workshop/inspections/view?id=' + e?._id} className="btn-link w100">Inspección #{index +1}</Link>)
                                        })
                                    }
                                </div>
                            </div>
                            <div className="card mt1 flex between p1 w100">
                                <p className="subsubtitle w100">Recordatorios:</p>
                                <div className="w100 right">
                                    {calendars?.length < 1 ? <button className="subsubtitle ">No encontrado</button> : 
                                        calendars?.map((e) => {
                                            return (<Link style={{display: 'block'}} href={'/workshop/inspections/home'} className="btn-link w100">{e?.title}</Link>)
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="center w100 mt2">
                            <button className="btn-gradient-primary" onClick={() => buildForm()}>Guardar cambios</button>
                        </div>
                        {(user?.role === 'owner' || user?.role === 'administrator') ? <div className="flex between displayBlockResponsive mt2">
                            <div>
                                <p className="subsubtitle" style={{fontSize: '.8rem'}}>Creado: {new Date(client?.createdAt).getDate() + '/' + new Date(client?.createdAt).getMonth() + '/' + new Date(client?.createdAt).getFullYear() + ' - ' + new Date(client?.createdAt).getHours() + ':' + new Date(client?.createdAt).getSeconds()} por: {client?.createdBy ?? 'No encontrado'}</p>
                            </div>
                            <div>
                                <p className="subsubtitle" style={{fontSize: '.8rem'}}>Ultima vez editado: {new Date(client?.updatedAt).getDate() + '/' + new Date(client?.updatedAt).getMonth() + '/' + new Date(client?.updatedAt).getFullYear() + ' - ' + new Date(client?.updatedAt).getHours() + ':' + new Date(client?.updatedAt).getSeconds()} por: {client?.updatedBy ?? 'No encontrado'}</p>
                            </div>
                        </div> : <></>}
                    </div>
                </div>
            }/>
        }
    </div>
}
export default LayoutViewClientWorkShop;