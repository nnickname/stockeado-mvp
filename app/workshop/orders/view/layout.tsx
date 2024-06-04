'use client';
import { getUser, verifyUserWorkshop } from "@/app/api/user/call";
import SideBarComponent from "@/components/panel/sidebar";
import { UserModel } from "@/models/user.model";
import IonIcon from "@reacticons/ionicons";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Select from "react-dropdown-select";
import '../../inspections/create/index.css';
import { InspectionsModel } from "@/models/workshops/inspections.model";
import { getAllInspections } from "@/app/api/workshop/inspections/call";
import { VehiclesModel } from "@/models/workshops/vehicles.model";
import { ClientsModel } from "@/models/workshops/clients.model";
import { getAllClients } from "@/app/api/workshop/clients/call";
import { getAllVehicles } from "@/app/api/workshop/vehicles/call";
import { toast } from "react-toastify";
import { createOrderService, getAllOrderServices, updateOrderService } from "@/app/api/workshop/orders/call";
import { OrderWorkshopModel } from "@/models/workshops/orders.model";
import { getOrderServiceClassNameState } from "../layoutview";
const ViewOrderWorkshopLayoutPage = () => {
    const router = useRouter();
    const [user, setUser] = useState<UserModel>(null);
    const [vehicles, setVehicles] = useState<VehiclesModel[]>([]);
    const [clients, setClients] = useState<ClientsModel[]>(null);
    const [inspections, setInspections] = useState<InspectionsModel[]>([]);
    const [inspectionSelected, setSelectedInspection] = useState<InspectionsModel>(null);
    
    const [clientSelected, setSelectedClient] = useState<string>(null);
    const [clientName, setClientName] = useState<string>('');
    const [clientLastname, setClientLastName] = useState<string>('');
    const [clientPhone, setClientPhone] = useState<string>('');
    const [clientEmail, setClientEmail] = useState<string>('');


    const [vehicleSeleted, setSelectedVehicle] = useState<string>(null);
    const [vehicleBrand, setVehicleBrand] = useState<string>('');
    const [vehicleModel, setVehicleModel] = useState<string>('');
    const [vehicleYear, setVehicleYear] = useState<string>('');
    const [vehiclePlate, setVehiclePlate] = useState<string>('');
    const [vehicleVin, setVehicleVin] = useState<string>('');

    const [dateStart, setDateStart] = useState<string>('');
    const [workerAssigned, setWorker] = useState<string>('');

    const [tasks, setTasks] = useState<any[]>([]);
    const [taskAmmount, setTaskAmmount] = useState<string>('');
    const [taskDescription, setTaskDescription] = useState<string>('');
    const [taskPrice, setTaskPrice] = useState<string>('');
    const [totalPrice, setTotalPrice] = useState<string>('');
    const [dateEnd, setDateEnd] = useState<string>('');
    const [workSpace, setWorkSpace] = useState<string>('');
    const [notes, setNotes] = useState<string>('');
    const [orderIndex, setOrderIndex] = useState<number>(0);
    const [currentOrderState, setOrderState] = useState<string>('pending');
    const [disabledButton, setDisabledButton] = useState<boolean>(false);
    const [order, setOrder] = useState<OrderWorkshopModel>(null);
    const toUser = async () => {
        
        const userr = await getUser();
        var ownerid = String(userr?._id);
        if(!verifyUserWorkshop(userr, router, '/workshop/orders')) {
            return;
        }
        if(userr?.role !== 'owner'){
            ownerid = userr?.owner;
        }
        const vehicless = await getAllVehicles(ownerid) ?? [];
        const clientss = await getAllClients(ownerid) ?? [];
        const inspectionsCast = await getAllInspections(ownerid) ?? [];
        const ordersCast = await getAllOrderServices(ownerid);
        setClients(clientss);
        setVehicles(vehicless);
        setUser(userr);

        setInspections(inspectionsCast);
        const urlParams = new URLSearchParams(window.location.search);
        let id = urlParams.get('id');
        if(id === null) router.push('/workshop/orders');
        if(id !== null && id?.length > 3){
            const object = ordersCast?.find(e => String(e?._id) === id);
            var index = 0;
            ordersCast?.map((e, indexx: number) => {
                if(String(e?._id) === id) index = indexx;
            });
            setOrder(object);
            setOrderIndex(index);
            setOrderState(object?.state);
            setWorkSpace(object?.workSpace);
            setDateEnd(object?.dateEnd);
            selectInspectionCall(object?.inspection, inspectionsCast);
            setSelectedInspection(inspectionsCast?.find(e => String(e?._id) === object?.inspection));
            setTasks(object?.tasks);
            setTotalPrice(object?.totalPrice)
        } else selectInspectionCall('other', inspectionsCast);
    }
    const buildForm = async () => {
        var message = '';
        if(dateStart === '' || workerAssigned === ''){
            if(message === ''){
                message = message + ' ' + 'Generales';  
            }else message = message + ', ' + 'Generales'
        }
        if(clientName === '' || clientLastname === '' || clientEmail === '' || clientPhone === ''){
            if(message === ''){
                message = message + ' ' + 'Cliente';  
            }else message = message + ', ' + 'Cliente';
        } 
        if(vehicleBrand === '' || vehicleModel === '' || vehiclePlate === '' || vehicleYear === '' || vehicleVin === ''){
            if(message === ''){
                message = message + ' ' + 'Vehículo';  
            } else message = message + ', ' + 'Vehículo'
        }
        if(workerAssigned === '' || dateEnd === ''){
            if(message === ''){
                message = message + ' ' + 'Fín de orden';  
            } else message = message + ', ' + 'Fín de orden'
        } 
        if(message !== '') return toast.error('Encontramos los siguientes errores en el formulario:' + message);
        const urlParams = new URLSearchParams(window.location.search);
        let id = urlParams.get('id');
        if(id === null) router.push('/workshop/orders');
        const body = {
            _id: id,
            object: {
                workerAssigned,
                dateEnd,
                notes: notes ?? '-',
                dateStart,
                owner: user?.role === 'owner' ? user?._id : user?.owner,
                state: currentOrderState,
                pdfUri: '',
                totalPrice,
                workSpace: workSpace ?? '',
                client: {
                    _id: clientSelected ?? '',
                    name: clientName,
                    lastname: clientLastname,
                    email: clientEmail,
                    phone: clientPhone
                },
                vehicle: {
                    _id: vehicleSeleted ?? '',
                    brand: vehicleBrand,
                    model: vehicleModel,
                    plate: vehiclePlate,
                    year: vehicleYear,
                    vin: vehicleVin
                },                
                tasks,
                inspection: inspectionSelected?._id ?? '',
                updatedBy: user?.name + ' ' + user?.lastname
            }
        }
        setDisabledButton(true);
        const response = await updateOrderService(body);
        if(response){
            toast.success('Guardaste los cambios');
        } else toast.error('Ocurrio un problema');
        setDisabledButton(false);
    }
    const selectInspectionCall = (id: string, inspections: InspectionsModel[]) => {
        if(id === 'other'){
            setSelectedClient(null);
            setClientName('');
            setClientLastName('');
            setClientEmail('');
            setClientPhone('');
            setSelectedVehicle(null);
            setVehiclePlate('');
            setVehicleBrand('');
            setVehicleModel('');
            setVehicleYear('');
            setVehicleVin('');
            setSelectedInspection(null);
            setDateStart('');
            setWorker('');
            return;
        }
        const object = inspections?.find(e => String(e?._id) === id);
        if(object !== null){
            setDateStart(object?.dateStart);
            setWorker(object?.workerAssigned);
            setSelectedClient(object?.client?._id);
            setSelectedClient(String(object?.client?._id));
            setClientName(object?.client?.name);
            setClientLastName(object?.client?.lastname);
            setClientEmail(object?.client?.email);
            setClientPhone(object?.client?.phone);
            setSelectedVehicle(String(object?.vehicle?._id));
            setVehiclePlate(object?.vehicle?.plate);
            setVehicleBrand(object?.vehicle?.brand);
            setVehicleModel(object?.vehicle?.model);
            setVehicleYear(object?.vehicle?.year);
            setVehicleVin(object?.vehicle?.vin);
            setSelectedInspection(object);
        }
    }
    useEffect(() => {
        router.refresh();
        toUser();
    }, []);
    return <div>
        {user === null ? <IonIcon name='chevron-collapse-outline' className="rotateItem" color='#1366D9' style={{fontSize: '1.5rem', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}/> :
            <SideBarComponent user={user} route='/workshop/orders' frameContennt={
                <div>
                    <div className="flex between">
                        <h1 className="headerSideBar"> Nueva orden de servicio</h1>
                        <div style={{background: 'white'}}>
                            <button  onClick={() => router.push('/workshop/orders')} className="btn-back mr1 mt1"><IonIcon name="arrow-back-outline"/></button>
                        </div>
                    </div>
                    <div className="p1">


                        <div className="flex between">
                            <div>
                                <p className="subtitle mt1" style={{fontWeight: '500'}}>Orden de servicio #{orderIndex+1}</p>
                            </div>
                            <div className="flex displayBlockResponsive">
                                <p className="subtitle mr1 mt1">Estado</p>
                                <select onChange={(e) => setOrderState(e?.target?.value)} value={currentOrderState} className={getOrderServiceClassNameState(currentOrderState) + ' btn ml1 mt1 br05'}>
                                    <option className={getOrderServiceClassNameState('pending')} value='pending'>Pendiente</option>
                                    <option className={getOrderServiceClassNameState('confirmed')} value='confirmed'>Confirmado</option>
                                    <option className={getOrderServiceClassNameState('payed')} value='payed'>Pagado</option>
                                    <option className={getOrderServiceClassNameState('process')} value='process'>En proceso</option>
                                    <option className={getOrderServiceClassNameState('deliveried')} value='deliveried'>Entregado</option>


                                </select>
                                
                            </div>
                        </div>

                        <div className="">
                            <div className="card p2 mt1 flex maxContent displayBlockResponsive w100Responsive">
                                <p className="formTitle mr1 mt1">Informe de inspeción</p>
                                <div className="ml1 mt1">
                                    <Select
                                        options={[
                                            
                                            {
                                                label: 'Completar',
                                                value: 'other'
                                            },
                                           ...inspections?.map((e, index: number) => {
                                            return {
                                                value: e?._id,
                                                label: '#' + (Number(index) +1 )+ ' - ' + e?.vehicle?.plate
                                            }
                                           })
                                        ]}
                                        
                                        separator
                                        placeholder="Seleccionar/Buscar"
                                        className="inputForm"
                                        onChange={(values) => {
                                            selectInspectionCall(String(values[0]?.value), inspections);
                                        } } 
                                        values={[{value: inspectionSelected?._id, label: inspectionSelected === null ? 'Seleccionar/buscar' : '#' +  ' - ' + inspectionSelected?.vehicle?.plate}]}                                    />
                                </div>
                            </div>
                        </div>
                        <div className="cardWhiteForm mt2">
                            <p className="subsubtitle">Generales</p>
                            <div className="flex between displayBlockResponsive w100">
                                <div className="flex mr1 w100  mt1 nPaddingLeftResponsive" style={{paddingRight: '2rem'}}>
                                    <p className="formTitle w100 mr1">Fecha de ingreso</p>
                                    <input onChange={(e) => setDateStart(e.target.value)} value={dateStart} className="inputForm w100  ml1 " type="datetime-local" placeholder=""/>
                                </div>
                                <div className="flex w100 mt1 nPaddingLeftResponsive" style={{ paddingLeft: '2rem'}}>
                                    <p className="formTitle w100 mr1">Mecanico asignado</p>
                                    <input onChange={(e) => setWorker(e.target.value)} value={workerAssigned} className="inputForm w100 ml1" type="text" placeholder=""/>
                                </div>
                            </div>
                        </div>
                        <div className="flex between displayBlockResponsive">
                            <div className="cardWhiteForm mt1 w100 mr1">
                                <div className="flex between">
                                    <p className="subsubtitle">Cliente</p>
                                    <Select
                                        options={[
                                            {
                                                label: 'Completar',
                                                value: 'other'
                                            },
                                            ...clients?.map((e) => {
                                            return {
                                                label: e?.name + ' ' + e?.lastname,
                                                value: String(e?._id)
                                            }
                                        })]}
                                        separator
                                        placeholder="Seleccionar/Buscar"
                                        className="inputForm"
                                        onChange={(values) => {
                                            if(values[0]?.value === 'other') {
                                                setSelectedClient(null);
                                                setClientName('');
                                                setClientLastName('');
                                                setClientEmail('');
                                                setClientPhone('');
                                                return;
                                            }
                                            const clientObject = clients?.find(e => String(e._id) === values[0]?.value);
                                            setSelectedClient(String(clientObject?._id));
                                            setClientName(clientObject?.name);
                                            setClientLastName(clientObject?.lastname);
                                            setClientEmail(clientObject?.email);
                                            setClientPhone(clientObject?.phone);
                                         } } values={[{value: clientSelected, label: clientSelected === null ? 'Seleccionar/Buscar' : '# ' + clientName ?? '' + ' ' + clientLastname ?? ''}]}                                    />
                                </div>
                                <div className="flex between mt1">
                                    <p className="formTitle">Nombre</p>
                                    <input onChange={(e) => setClientName(e.target.value)} value={clientName} disabled={clientSelected !== null ? true : false} className="inputForm ml1" type="text" placeholder=""/>
                                </div>
                                <div className="flex between mt1">
                                    <p className="formTitle">Apellido</p>
                                    <input onChange={(e) => setClientLastName(e.target.value)} value={clientLastname} disabled={clientSelected !== null ? true : false} className="inputForm ml1" type="text" placeholder=""/>
                                </div>
                                <div className="flex between mt1">
                                    <p className="formTitle">Celular</p>
                                    <input onChange={(e) => setClientPhone(e.target.value)} value={clientPhone} disabled={clientSelected !== null ? true : false} className="inputForm ml1" type="text" placeholder=""/>
                                </div>
                                <div className="flex between mt1">
                                    <p className="formTitle">Correo</p>
                                    <input onChange={(e) => setClientEmail(e.target.value)} value={clientEmail} disabled={clientSelected !== null ? true : false} className="inputForm ml1" type="text" placeholder=""/>
                                </div>
                                <div className="flex between mt1">
                                    <p className="formTitle">Visita</p>
                                    <input disabled placeholder={clientSelected !== null ? 'Recurrente' : 'Nuevo'} className="inputForm ml1" type="text"/>
                                </div>
                            </div>
                            <div className="cardWhiteForm mt1 w100">
                                <div className="flex between">
                                    <p className="subsubtitle">Vehículo</p>
                                    <Select
                                        options={[
                                            {
                                                label: 'Completar',
                                                value: 'other'
                                            },
                                            ...vehicles?.map((e) => {
                                                return {
                                                    label: e?.brand + ' ' + e?.model,
                                                    value: String(e?._id)
                                                }
                                            }
                                        )]}
                                        separator
                                        placeholder="Seleccionar/Buscar"
                                        className="inputForm"
                                        onChange={(values) => {
                                            if(values[0]?.value === 'other') {
                                                setSelectedVehicle(null);
                                                setVehiclePlate('');
                                                setVehicleBrand('');
                                                setVehicleModel('');
                                                setVehicleYear('');
                                                setVehicleVin('');
                                                return;
                                            }
                                            const vehicleObject = vehicles?.find(e => String(e._id) === values[0]?.value);
                                            setSelectedVehicle(String(vehicleObject?._id));
                                            setVehiclePlate(vehicleObject?.plate);
                                            setVehicleBrand(vehicleObject?.brand);
                                            setVehicleModel(vehicleObject?.model);
                                            setVehicleYear(vehicleObject?.year);
                                            setVehicleVin(vehicleObject?.vin);
                                        } } values={[{value: vehicleSeleted, label: vehicleSeleted === null ? 'Seleccionar/Buscar' : '# ' + vehicleBrand ?? '' + ' ' + vehicleModel ?? ''}]}                                   />
                                </div>
                                <div className="flex between mt1">
                                    <p className="formTitle">Placa</p>
                                    <input disabled={vehicleSeleted !== null ? true : false} onChange={(e) => setVehiclePlate(e.target.value)} value={vehiclePlate} className="inputForm ml1" type="text" placeholder=""/>
                                </div>
                                <div className="flex between mt1">
                                    <p className="formTitle">Marca</p>
                                    <input disabled={vehicleSeleted !== null ? true : false} onChange={(e) => setVehicleBrand(e.target.value)} value={vehicleBrand} className="inputForm ml1" type="text" placeholder=""/>
                                </div>
                                <div className="flex between mt1">
                                    <p className="formTitle">Modelo</p>
                                    <input disabled={vehicleSeleted !== null ? true : false} onChange={(e) => setVehicleModel(e.target.value)} value={vehicleModel} className="inputForm ml1" type="text" placeholder=""/>
                                </div>
                                <div className="flex between mt1">
                                    <p className="formTitle">Año</p>
                                    <input disabled={vehicleSeleted !== null ? true : false} onChange={(e) => setVehicleYear(e.target.value)} value={vehicleYear} className="inputForm ml1" type="text" placeholder=""/>
                                </div>
                                <div className="flex between mt1">
                                    <p className="formTitle">VIN</p>
                                    <input disabled={vehicleSeleted !== null ? true : false} onChange={(e) => setVehicleVin(e.target.value)} value={vehicleVin} className="inputForm ml1" type="text" placeholder=""/>
                                </div>
                            </div>
                            

                            
                        </div>




                        

                        <div className="cardWhiteForm mt1">
                            
                            {inspectionSelected !== null ? <p className="subsubtitle">Trabajos a realizar ({inspectionSelected?.tasks?.map((e, index: number) => {
                                if(index === inspectionSelected?.tasks?.length -1){
                                    return e;
                                } else return e + ', ';
                            })}) </p> : <p className="subsubtitle">Trabajos a realizar </p>}
                            
                            <div className="mt2">
                                {
                                    tasks?.map((e, index: number) => {
                                        return <div className="flex between right mt1">
                                            <div className="w100 ml1 left">
                                                <p>x{e?.ammount}</p>
                                            </div>
                                            <p className="w100">{e?.description}</p>
                                            <p className="w100">s/. {e?.price}</p>
                                            <div className="w100 mr1">
                                                <IonIcon onClick={() => {
                                                    setTasks(tasks?.filter((obj, indexx) => index !== indexx))
                                                }} className="btn color-trash"  name="trash-outline"/>
                                            </div>
                                        </div>
                                    })
                                }
                            </div>
                            <div className="flex w100 mt2">
                                <p style={{marginLeft: 'auto'}} className="subsubtitle mr1">Total</p>
                                <input  onChange={(e) => setTotalPrice(String(e.target.value))} value={totalPrice} className="inputForm ml1" type="text" placeholder=""/>
                            </div>
                            <div className="flex w100 mt05">
                                <input onChange={(e) => setTaskAmmount(String(e.target.value))} value={taskAmmount} type="number" min={0} className="inputForm w100" placeholder='Cantidad' style={{borderRadius: '.5rem 0rem 0rem .5rem'}}/>
                                <input onChange={(e) => setTaskDescription(e.target.value)} value={taskDescription} className="inputForm  w100" type="text" placeholder="Descripción" style={{borderRadius: '0rem 0rem 0rem 0rem'}}/>
                                <input onChange={(e) => setTaskPrice(e.target.value)} value={taskPrice} className="inputForm  w100" type="text" placeholder="Precio" style={{borderRadius: '0rem 0rem 0rem 0rem'}}/>
                                <button onClick={() => {
                                    if(taskAmmount !== '' && taskDescription !== '' && taskPrice !== ''){
                                        setTasks([{
                                            ammount: taskAmmount,
                                            description: taskDescription,
                                            price: taskPrice
                                        }, ...tasks]);
                                        setTaskAmmount('');
                                        setTaskDescription('');
                                        setTaskPrice('');
                                    } else toast.error(' Completa el formulario');
                                    
                                }} className="btn-gradient-secondary " style={{border:'1px solid grey', borderRadius: '0px .5rem .5rem 0rem'}} >Añadir</button>
                            </div>
                            
                        </div>



                        <div className="cardWhiteForm mt1">
                            <div className="flex between displayBlockResponsive">
                                <div className="w100 mr1 nPaddingLeftResponsive" style={{paddingRight: '2rem'}}>
                                    <div className="flex between mt1">
                                        <p className="formTitle ">Fecha estimada</p>
                                        <input onChange={(e) => setDateEnd(e.target.value)} value={dateEnd} className="inputForm" type="datetime-local" placeholder=""/>
                                    </div>

                                </div>
                                <div className="w100 nPaddingLeftResponsive" style={{ paddingLeft: '2rem'}}>
                                    <div className="flex between mt1">
                                        <p className="formTitle" >Espacio en el taller</p>
                                        <input onChange={(e) => setWorkSpace(e.target.value)} value={workSpace} className="inputForm" type="text" placeholder=""/>
                                    </div>

                                </div>
                            </div>
                            <p className="formTitle mt2">Notas adicionales</p>
                            <input onChange={(e) => setNotes(e.target.value)} value={notes} className="inputForm mt1 w100" type="text" placeholder=""/>
                        </div>



                        <div className="mSidesAuto" style={{width: 'max-content'}}>
                            <div className="card p2 mt1 flex" >
                                <p className="formTitle mr1">Resultados scanner</p>
                                <div className="btn-upload-pdf ml1">
                                    <p className="mr1">Adjuntar PDF</p>
                                    <svg className="ml1" width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H19C19.2652 3 19.5196 3.10536 19.7071 3.29289L26.7071 10.2929C26.8946 10.4804 27 10.7348 27 11V16C27 16.5523 26.5523 17 26 17C25.4477 17 25 16.5523 25 16V11.4142L18.5858 5L7 5L7 16C7 16.5523 6.55228 17 6 17C5.44772 17 5 16.5523 5 16V5C5 4.46957 5.21071 3.96086 5.58579 3.58579Z" fill="#A9AEB8"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M19 3C19.5523 3 20 3.44772 20 4V10H26C26.5523 10 27 10.4477 27 11C27 11.5523 26.5523 12 26 12H19C18.4477 12 18 11.5523 18 11V4C18 3.44772 18.4477 3 19 3Z" fill="#A9AEB8"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5 21C5 20.4477 5.44772 20 6 20H8C8.79565 20 9.55871 20.3161 10.1213 20.8787C10.6839 21.4413 11 22.2043 11 23C11 23.7957 10.6839 24.5587 10.1213 25.1213C9.55871 25.6839 8.79565 26 8 26H7V27C7 27.5523 6.55228 28 6 28C5.44772 28 5 27.5523 5 27V21ZM7 24H8C8.26522 24 8.51957 23.8946 8.70711 23.7071C8.89464 23.5196 9 23.2652 9 23C9 22.7348 8.89464 22.4804 8.70711 22.2929C8.51957 22.1054 8.26522 22 8 22H7V24Z" fill="#A9AEB8"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M22.5 21C22.5 20.4477 22.9477 20 23.5 20H27C27.5523 20 28 20.4477 28 21C28 21.5523 27.5523 22 27 22H24.5V27C24.5 27.5523 24.0523 28 23.5 28C22.9477 28 22.5 27.5523 22.5 27V21Z" fill="#A9AEB8"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M22.5 24.5C22.5 23.9477 22.9477 23.5 23.5 23.5H26.5C27.0523 23.5 27.5 23.9477 27.5 24.5C27.5 25.0523 27.0523 25.5 26.5 25.5H23.5C22.9477 25.5 22.5 25.0523 22.5 24.5Z" fill="#A9AEB8"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.25 21C13.25 20.4477 13.6977 20 14.25 20H16C17.0609 20 18.0783 20.4214 18.8284 21.1716C19.5786 21.9217 20 22.9391 20 24C20 25.0609 19.5786 26.0783 18.8284 26.8284C18.0783 27.5786 17.0609 28 16 28H14.25C13.6977 28 13.25 27.5523 13.25 27V21ZM15.25 22V26H16C16.5304 26 17.0391 25.7893 17.4142 25.4142C17.7893 25.0391 18 24.5304 18 24C18 23.4696 17.7893 22.9609 17.4142 22.5858C17.0391 22.2107 16.5304 22 16 22H15.25Z" fill="#A9AEB8"/>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div className="center mt1 mSidesAuto">
                            <button className="btn-gradient-third mr1" onClick={() => buildForm()}>{
                                disabledButton ? <IonIcon name='chevron-collapse-outline' className="rotateItem" color='grey' style={{fontSize: '1rem' }}/> : 'Guardar orden de servicio'}</button>
                        </div>

                        {(user?.role === 'owner' || user?.role === 'administrator') ? <div className="flex between displayBlockResponsive mt2">
                            <div>
                                <p className="subsubtitle" style={{fontSize: '.8rem'}}>Creado: {new Date(order?.createdAt).getDate() + '/' + new Date(order?.createdAt).getMonth() + '/' + new Date(order?.createdAt).getFullYear() + ' - ' + new Date(order?.createdAt).getHours() + ':' + new Date(order?.createdAt).getSeconds()} por: {order?.createdBy ?? 'No encontrado'}</p>
                            </div>
                            <div>
                                <p className="subsubtitle" style={{fontSize: '.8rem'}}>Ultima vez editado: {new Date(order?.updatedAt).getDate() + '/' + new Date(order?.updatedAt).getMonth() + '/' + new Date(order?.updatedAt).getFullYear() + ' - ' + new Date(order?.updatedAt).getHours() + ':' + new Date(order?.updatedAt).getSeconds()} por: {order?.updatedBy ?? 'No encontrado'}</p>
                            </div>
                        </div> : <></>}

                    </div>
                </div>
            }
            />
        }
    </div>
}
export default ViewOrderWorkshopLayoutPage;