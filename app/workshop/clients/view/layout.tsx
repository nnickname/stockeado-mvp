'use client';
import { getUser } from "@/app/api/user/call";
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
const LayoutViewClientWorkShop = ( ) => {
    const router = useRouter();
    const [open, setOpen] = useState<boolean>();
    const [user, setUser] = useState<UserModel>(null);
    const [allInspections, setAllInspections] = useState<InspectionsModel[]>([]);
    const [currentVehicles, setCurrentVehicles] = useState<string[]>([]);
    const [allVehicles, setAllVehicles] = useState<VehiclesModel[]>([]);
    const [inspections, setInspections] = useState<InspectionsModel[]>([]);
    const [orderIndex, setOrderIndex] = useState<number>(null);
    const [lastService, setLastService] = useState<string>('');
    const [clientid, setClientID] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [lastname, setLastname] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const buildForm = async () => {
        if(name !== '' && lastname !== '' && email !== '' && phone !== '' && clientid !== ''){
            const body = {
                _id: clientid,
                object: {
                    name, lastname, email, phone
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
        if(userr === undefined || userr === null){
              router.push('/');
        }
        if(userr?.type !== 'workshop'){
            router.push('/provider/home');
        }
        setUser(userr);
        const clientsCast = await getAllClients(String(userr?._id));
        const vehiclesCast = await getAllVehicles(String(userr?._id));
        const inspectionsCast = await getAllInspections(String(userr?._id));
        const response = await getClient(id);
        setAllInspections(inspectionsCast ?? []);
        setCurrentVehicles(response?.client?.vehicles ?? []);
        setAllVehicles(vehiclesCast)
        setClientID(response?.client?._id);
        setName(response?.client?.name);
        setLastname(response?.client?.lastname);
        setEmail(response?.client?.email);
        setPhone(response?.client?.phone);
        setInspections(response?.inspections ?? []);
        setLastService(response?.orders?.length > 0 ? 'Orden de servicio #' + response?.orders?.length : '');
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
                                <p className="subsubtitle w100">Último servicio:</p>
                                <div className="w100 right">
                                    {lastService === '' ? <button className="subsubtitle ">No encontrado</button> : 
                                    <button className="btn-link w100">{lastService}</button> }
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
                                    <button className="btn-link w100">100 000 km - ANZ123</button>
                                    <button className="btn-link mt05 w100">Cambio de aceite</button>
                                    <button className="btn-link mt05 w100">Cambio de neumaticos</button>
                                </div>
                            </div>
                        </div>
                        <div className="center w100 mt2">
                            <button className="btn-gradient-primary" onClick={() => buildForm()}>Guardar cambios</button>
                        </div>
                    </div>
                </div>
            }/>
        }
    </div>
}
export default LayoutViewClientWorkShop;