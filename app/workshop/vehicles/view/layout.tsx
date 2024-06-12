'use client';
import { getUser, verifyUserWorkshop } from "@/app/api/user/call";
import SideBarComponent from "@/components/panel/sidebar"
import { UserModel } from "@/models/user.model";
import IonIcon from "@reacticons/ionicons"
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import '../../home/index.css';
import { getAllVehicles, getVehicle, updateVehicle } from "@/app/api/workshop/vehicles/call";
import { OrderWorkshopModel } from "@/models/workshops/orders.model";
import { InspectionsModel } from "@/models/workshops/inspections.model";
import { getAllInspections } from "@/app/api/workshop/inspections/call";
import Link from "next/link";
import { ClientsModel } from "@/models/workshops/clients.model";
import { toast } from "react-toastify";
import { CalendarsModel } from "@/models/workshops/calendars.model";
import { VehiclesModel } from "@/models/workshops/vehicles.model";
import { ReturnUnifiedStringDateTime } from "@/utils/hooks";
const LayoutViewVehicleWorkShop = ( ) => {
    const router = useRouter();
    const [user, setUser] = useState<UserModel>(null);
    const [vehicleid, setVehicleId] = useState<string>('');

    const [model, setModel] = useState<string>('');
    const [brand, setBrand] = useState<string>('');
    const [year, setYear] = useState<string>('');
    const [plate, setPlate] = useState<string>('');
    const [vin, setVin] = useState<string>('');
    const [client, setClient] = useState<ClientsModel[]>([]);
    const [orderServices, setOrderServices] = useState<OrderWorkshopModel[]>([]);
    const [inspections, setInspections] = useState<InspectionsModel[]>([]);
    const [calendars, setCalendars] = useState<CalendarsModel[]>([]);
    const [allInspections, setAllInspections] = useState<InspectionsModel[]>([]);
    const [orderIndex, setOrderIndex] = useState<number>(0);
    const [vehicle, setVehicle] = useState<VehiclesModel>(null);
    const buildForm = async () => {
        if(brand !== '' && model !== '' && year !== '' && plate !== '' && vin !== '' && vehicleid !== ''){
            const body = {
                _id: vehicleid,
                object: {
                    brand, model, year, plate, vin,
                    updatedBy: user?.name + ' ' + user?.lastname
                }
            };
            const response = await updateVehicle(body);
            if(response){
                toast.success('Guardaste los cambios.');
            } else toast.error('Ocurrio un problema');
        }else toast.error('Completa el formulario.');
    }
    const toUser = async () => {
        const urlParams = new URLSearchParams(window.location.search);
        let id = urlParams.get('id');
        if(id === null) router?.push('/workshop/vehicles');
        const userr = await getUser();
        var ownerid = String(userr?._id);
        if(!verifyUserWorkshop(userr, router, '/workshop/vehicles')) {
            return;
        }
        if(userr?.role !== 'owner'){
            ownerid = userr?.owner;
        }
        const vehiclesCast = await getAllVehicles(String(userr?._id));
        const inspectionsCast = await getAllInspections(String(userr?._id));
        const response = await getVehicle(id);
        setVehicle(response?.vehicle);
        if(response === null) {
            router?.push('/workshop/vehicles');
        }else {
            var index = 0;
            vehiclesCast?.map((e, indexx: number) => {
                if(String(e?._id) === id) index = indexx;
            });
            setOrderIndex(index);
            setAllInspections(inspectionsCast);
            setVehicleId(response?.vehicle?._id);
            setModel(response?.vehicle?.model);
            setBrand(response?.vehicle?.brand);
            setYear(response?.vehicle?.year);
            setPlate(response?.vehicle?.plate);
            setVin(response?.vehicle?.vin);
            setClient([...response?.client?.map((e) => {
                return e
            })]);
            setInspections(response?.inspections ?? []);
            setOrderServices(response?.orders ?? []);
            setCalendars(response?.calendars ?? []);
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
                    <div className="flex between">
                        <h1 className="headerSideBar"> Vehículos</h1>
                        <div style={{background: 'white'}}>
                            <button onClick={() => router.push('/workshop/vehicles')} className="btn-back mr1 mt1"><IonIcon name="arrow-back-outline"/></button>
                        </div>
                    </div>
                    <div className="p1">
                        <h1 className="subtitle">Vehículo #{orderIndex +1}</h1>
                        <div className="card p1 mt1">
                            <div className="flex displayBlockResponsive w100">
                                <div className="flex w100 mr1 mt1">
                                    <p className="formTitle w100">Marca</p>
                                    <input onChange={(e) => setBrand(e?.target.value)} value={brand} className="inputForm mr1 ml1" type="text" placeholder="BMW"/>
                                </div>
                                <div className="flex w100 mt1">
                                    <p className="formTitle w100">Modelo</p>
                                    <input onChange={(e) => setModel(e?.target.value)} value={model} className="inputForm mr1 ml1 " type="text" placeholder="320i"/>
                                </div>
                            </div>
                            <div className="flex displayBlockResponsive mt1 w100">
                                <div className="flex w100 mr1 mt1">
                                    <p className="formTitle w100">Año</p>
                                    <input onChange={(e) => setYear(e?.target.value)} value={year} className="inputForm mr1 ml1" type="text" placeholder="2022"/>
                                </div>
                                <div className="flex w100 mt1">
                                    <p className="formTitle w100">Placa</p>
                                    <input onChange={(e) => setPlate(e?.target.value)} value={plate} className="inputForm mr1 ml1" type="email" placeholder="ANZ123"/>
                                </div>
                            </div>
                            
                            <div className="flex displayBlockResponsive mt1 w100">
                                <div className="flex w100 mt1">
                                    <p className="formTitle w100">VIN</p>
                                    <input onChange={(e) => setVin(e?.target.value)} value={vin} className="inputForm w100 mr1 ml1" type="email" placeholder="1G1RC6E42BU654342"/>
                                </div>
                                <div className="flex w100 mt1">
                                    
                                </div>
                            </div>
                        </div>

                        <div className="flex between mt1 displayBlockResponsive">
                            <div className="card mt1 flex between p1 w100 mr1">
                                <p className="subsubtitle w100">Cliente asociado:</p>
                                <div className="w100 right">
                                    {client.length === 0 ? <button className="subsubtitle ">No encontrado</button> : 
                                    client?.map((e) => {
                                        return <Link href={'/workshop/clients/view?id=' + e?._id} style={{display: 'block'}} className="btn-link">{e?.name + ' ' + e?.lastname}</Link>
                                    })
                                    }
                                </div>
                            </div>
                            <div className="card mt1 flex between p1 w100">
                                <p className="subsubtitle w100">Ordenes servicio:</p>
                                <div className="w100 right">
                                    {orderServices?.length === 0 ? <button className="subsubtitle ">No encontrado</button> : orderServices?.map((e, index: number) => {
                                        return <button className="btn-link w100">Orden de servicio #{index + 1}</button>
                                    })}                                </div>
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
                                            if(String(e?._id) === String(a?._id)) index = indexx;
                                        });
                                        return <Link style={{display: 'block'}} href={'/workshop/inspections/view?id=' + e?._id} className="btn-link w100">Inspección #{index +1}</Link>
                                    })}
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
                                <p className="subsubtitle" style={{fontSize: '.8rem'}}>Creado: {ReturnUnifiedStringDateTime(vehicle?.createdAt)} por: {vehicle?.createdBy ?? 'No encontrado'}</p>
                            </div>
                            <div>
                                <p className="subsubtitle" style={{fontSize: '.8rem'}}>Ultima vez editado: {ReturnUnifiedStringDateTime(vehicle?.updatedAt)} por: {vehicle?.updatedBy ?? 'No encontrado'}</p>
                            </div>
                        </div> : <></>}
                    </div>
                </div>
            }/>
        }
    </div>
}
export default LayoutViewVehicleWorkShop;