'use client';
import { useRouter } from "next/navigation";
import InventoryResume from "@/components/panel/inventoryresume";
import SellResume from "@/components/panel/sellresume";
import SideBarComponent from "@/components/panel/sidebar";
import { createConnection } from "mongoose";
import { useEffect, useState } from "react";
import Cookie from 'universal-cookie';
import { UserModel } from '../../../models/user.model';
import '../index.css';
import blueImage from '../../public/images/logo/blueimage.png';
import backgroundImage from '../../public/images/logo/background2.jpeg';
import ImageLogo from '../../public/images/logo/mplogo1.png';
import Image from "next/image";
import { editUser, getUser} from "../../api/user/call";
import BackgroundImage from "@/components/marketplace/background/background";
import IonIcon from "@reacticons/ionicons";
import { toast } from "react-toastify";
import '../../workshop/inspections/create/index.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Link from "next/link";
import Modal from "react-responsive-modal";
import 'react-responsive-modal/styles.css';
import LoadPage from "@/components/general/loadPage";
import BackButton from "@/components/general/backButton";
const LayoutConfigurationPage = () =>{
    const router = useRouter();
    const [user, setUser] = useState<UserModel>(null);
    const [image, setImage] = useState('');
    const [imageLogo, setImageLogo] = useState('');
    const [service, setService] = useState<any>();
    const [tasks, setTasks] = useState<any[]>([]);
    const [open, setOpen] = useState<boolean>();
    const [openEdit, setOpenEdit] = useState<boolean>();
    const [openEditItem, setOpenEditItem] = useState<boolean>();
    
    const [indexEdit, setIndexEdit] = useState<number>(-1);
    const [width, setWidth] = useState(0);
    const [disabledButton, setDisabledButton] = useState<boolean>(false);
    const [formError, setErrorForm] = useState<string>('');
    const [serviceSku, setServiceSku] = useState<string>('');
    const [serviceName, setServiceName] = useState<string>('');
    const [servicePrice, setServicePrice] = useState<string>('');

    const handleResize = () => setWidth(window.innerWidth);
    const toUser = async () => {
        const urlParams = new URLSearchParams(window.location.search);
        let id = urlParams.get('id');
        if(id === null) router?.push('/configuration');
        const userr = await getUser();
        if(userr === undefined || userr === null){
            router.push('/signin');
        }
        setUser(userr);
        const serviceFind = userr?.services?.find((e, index) => index === Number(id));
        setTasks(serviceFind?.tasks);
        setService(serviceFind);
    }
    useEffect(() => {
        
        toUser();
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    const editService = async() => {
        setDisabledButton(true);
        var services = user?.services;
        const urlParams = new URLSearchParams(window.location.search);
        let id = urlParams.get('id');
        if(id === null) router?.push('/configuration');
        services[Number(id)].sku = serviceSku;
        services[Number(id)].name = serviceName;

        var body = {
            _id: user?._id,
            services
        }
        const response = await editUser(body);
        if(response){
            toast.success('Editaste un item');
            setService(services[Number(id)]);
            setServiceName('');
            setServiceSku('');
            setDisabledButton(false);
            setOpenEdit(false);
        } else setErrorForm('* Ocurrio un problema');
    }
    const deleteTask = async(index: number) => {
        var services = user?.services;
        const urlParams = new URLSearchParams(window.location.search);
        let id = urlParams.get('id');
        const tasksCast = tasks?.filter((e, indexx) => indexx !== index)
        if(id === null) router?.push('/configuration');
        services[Number(id)].tasks = tasksCast;
        var body = {
            _id: user?._id,
            services
        }
        const response = await editUser(body);
        if(response){
            toast.success('Eliminaste un item');
            setTasks(tasksCast ?? []);
            setDisabledButton(false);
        } else setErrorForm('* Ocurrio un problema');
    }
    const addNewTask = async() => {
        if(serviceSku !== '' && serviceName !== '' && servicePrice !== ''){
            
            var services = user?.services;
            const urlParams = new URLSearchParams(window.location.search);
            let id = urlParams.get('id');
            if(id === null) router?.push('/configuration');
            services[Number(id)].tasks.push({
                sku: serviceSku,
                name: serviceName,
                price: servicePrice
            });
            var body = {
                _id: user?._id,
                services
            }
            setDisabledButton(true);
            const response = await editUser(body);
            if(response){
                toast.success('Añadiste un servicio')
                setServiceSku('');
                setServiceName('');
                setServicePrice('');
                setTasks(services[Number(id)].tasks ?? []);
                setDisabledButton(false);
                setOpen(false);
                setErrorForm('');
            } else setErrorForm('* Ocurrio un problema');
        } else setErrorForm('* Encontramos errores en el formulario');
    }
    
    const editTask = async() => {
        if(indexEdit !== -1){
            
            var services = user?.services;
            const urlParams = new URLSearchParams(window.location.search);
            let id = urlParams.get('id');
            if(id === null) router?.push('/configuration');
            services[Number(id)].tasks[indexEdit].name = serviceName;
            services[Number(id)].tasks[indexEdit].sku = serviceSku;
            services[Number(id)].tasks[indexEdit].price = servicePrice;

            var body = {
                _id: user?._id,
                services
            }
            setDisabledButton(true);
            const response = await editUser(body);
            if(response){
                toast.success('Editaste un item')
                setServiceSku('');
                setServiceName('');
                setServicePrice('');
                setIndexEdit(-1);
                setTasks(services[Number(id)].tasks ?? []);
                setDisabledButton(false);
                setOpenEditItem(false);
                setErrorForm('');
            } else setErrorForm('* Ocurrio un problema');
        } else setOpenEditItem(false);
    }
    return <div>
        {user === null ? <LoadPage/> :
            
    <SideBarComponent user={user} route='configuration' frameContennt={
        <div>
            <div className="flex between">
                <h1 className="headerSideBar"> Servicio</h1>
                <BackButton route='/configuration'/>
            </div>
            <p className="subsubtitle mt1 ml1" style={{marginLeft: 'calc(1rem + 1px)'}}>Personaliza tus servicio en categorías a detalle para hacer las cotizaciones más rápido.            </p>

            

            <div className="p1 p05Min">
                    <div className="cardWhiteForm mt1">
                        <div className="flex between">
                            <div className="flex">
                                <h1 className="title mr1" style={{fontWeight: '500'}}>{service?.name}</h1>
                                <div>
                                <IonIcon onClick={() => {
                                    var services = user?.services;
                                    const urlParams = new URLSearchParams(window.location.search);
                                    let id = urlParams.get('id');
                                    if(id === null) router?.push('/configuration');
                                    setServiceSku(services[Number(id)].sku); 
                                    setServiceName(services[Number(id)].name);
                                    setOpenEdit(true);
                                }} className="btn mr1" name="pencil-outline" style={{color: '#FFA500', fontSize: '1.1rem'}}/>
                            
                                </div>
                            </div>
                            <p></p>
                            <button onClick={() => setOpen(true)} className="btn-gradient-secondary" style={{fontSize: '.9rem', paddingTop: '.3rem', paddingBottom: '.3rem'}}><IonIcon className="mr1" name="add-outline" style={{fontSize: '1rem'}}/> Añadir un item </button>
                        </div>
                        <p className="subsubtitle mt1">Items asociados: Agrupa ítems y crea tus cotizaciones más rápido.</p>
                        <TableContainer className="mt1" style={{boxShadow: 'none', backgroundColor: '#F5F7FA'}} component={Paper}>
                                <Table style={{boxShadow: 'none', backgroundColor: '#F5F7FA'}} aria-label="simple table">
                                    <TableHead>
                                    <TableRow>
                                        <TableCell>Codigo propio</TableCell>
                                        <TableCell align="left">Nombre</TableCell>
                                        <TableCell align="left">Precio</TableCell>
                                        <TableCell align="left">Acciones</TableCell>
                                    </TableRow>
                                    </TableHead>
                                    <TableBody>
                                    {tasks?.map((row, index) => {
                                        
                                        return <TableRow
                                            key={index}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            style={{borderBottom: '1px solid rgba(0, 0, 0, 0.2)'}}
                                        >
                                            <TableCell component="th" scope="row">
                                                {row?.sku}
                                            </TableCell>
                                            <TableCell component="th" scope="row">
                                                {row?.name}
                                            </TableCell>
                                            <TableCell align="left">
                                               s/. {Number(row?.price).toFixed(2)}
                                            </TableCell>
                            
                                            <TableCell align="right">
                                                <div className="flex" style={{ color: '#3662E3'}}>
                                                    <IonIcon onClick={() => {
                                                        setOpenEditItem(true);
                                                        setIndexEdit(index);
                                                        setServicePrice(row?.price);
                                                        setServiceName(row?.name);
                                                        setServiceSku(row?.sku)
                                                    }} className="btn" name="eye-outline" style={{fontSize: '1.3rem'}}/>
                                                    <IonIcon onClick={() => deleteTask(index)} className="btn ml1" name="trash-outline" style={{fontSize: '1.3rem'}}/>
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                })} 
                                    </TableBody>
                                </Table>
                            </TableContainer>
                    
                    </div> 
                </div>
                
            </div>
        
        
      }/>
    }
        <Modal closeIcon={<IonIcon name="close"/>} styles={{
              modal : {borderRadius: '.5rem', width: '100%', padding: '0rem', maxWidth: width < 921 ? '80%' : '600px'},
              closeIcon: {color: 'white !important'},
              overlay: {backgroundColor: 'rgba(220, 217, 217, 0.5)'}
            }}  open={open} center onClose={() => setOpen(false) }>
              <div style={{padding: '1rem'}}>
                <h1 className="title">Nuevo item</h1>
                <div className="flex between displayBlockResponsive mt1">
                    <p className="formTitle mr1">SKU</p>
                    <input onChange={(e) => setServiceSku(e.target.value)} className="inputForm w100Min" type="text" placeholder=""/>
                </div>
                <div className="flex between displayBlockResponsive mt1">
                    <p className="formTitle mr1">Nombre*</p>
                    <input onChange={(e) => setServiceName(e.target.value)} className="inputForm w100Min" type="text" placeholder=""/>
                </div>
                <div className="flex between displayBlockResponsive mt1">
                    <p className="formTitle mr1">Precio</p>
                    <input type='number' placeholder='s/.' onChange={(e) => setServicePrice(e.target.value)} className="inputForm w100Min"/>
                </div>
                {formError === '' ? <p></p> : <p className="subsubtitle color-trash">{formError}</p>}

                <div className="center w100 mt2">
                    <button disabled={disabledButton} className="btn-gradient-primary" onClick={() => addNewTask()}>{
                    disabledButton ? <IonIcon name='chevron-collapse-outline' className="rotateItem" color='grey' style={{fontSize: '1rem' }}/> : 'Guardar item'}</button>
                </div>
              </div>
        </Modal>
        <Modal closeIcon={<IonIcon name="close"/>} styles={{
              modal : {borderRadius: '.5rem', width: '100%', padding: '0rem', maxWidth: width < 921 ? '80%' : '600px'},
              closeIcon: {color: 'white !important'},
              overlay: {backgroundColor: 'rgba(220, 217, 217, 0.5)'}
            }}  open={openEditItem} center onClose={() => setOpenEditItem(false) }>
              <div style={{padding: '1rem'}}>
                <h1 className="title">Editar item</h1>
                <div className="flex between displayBlockResponsive mt1">
                    <p className="formTitle mr1">SKU</p>
                    <input value={serviceSku} onChange={(e) => setServiceSku(e.target.value)} className="inputForm w100Min" type="text" placeholder=""/>
                </div>
                <div className="flex between displayBlockResponsive mt1">
                    <p className="formTitle mr1">Nombre*</p>
                    <input value={serviceName} onChange={(e) => setServiceName(e.target.value)} className="inputForm w100Min" type="text" placeholder=""/>
                </div>
                <div className="flex between displayBlockResponsive mt1">
                    <p className="formTitle mr1">Precio</p>
                    <input value={servicePrice} type='number' placeholder='s/.' onChange={(e) => setServicePrice(e.target.value)} className="inputForm w100Min"/>
                </div>
                {formError === '' ? <p></p> : <p className="subsubtitle color-trash">{formError}</p>}

                <div className="center w100 mt2">
                    <button disabled={disabledButton} className="btn-gradient-primary" onClick={() => editTask()}>{
                    disabledButton ? <IonIcon name='chevron-collapse-outline' className="rotateItem" color='grey' style={{fontSize: '1rem' }}/> : 'Guardar item'}</button>
                </div>
              </div>
        </Modal>
        <Modal closeIcon={<IonIcon name="close"/>} styles={{
              modal : {borderRadius: '.5rem', width: '100%', padding: '0rem', maxWidth: width < 921 ? '80%' : '600px'},
              closeIcon: {color: 'white !important'},
              overlay: {backgroundColor: 'rgba(220, 217, 217, 0.5)'}
            }}  open={openEdit} center onClose={() => setOpenEdit(false) }>
              <div style={{padding: '1rem'}}>
                <h1 className="title">Editar servicio</h1>
                <div className="flex between displayBlockResponsive mt1">
                    <p className="formTitle mr1">SKU</p>
                    <input value={serviceSku} onChange={(e) => setServiceSku(e.target.value)} className="inputForm w100Min" type="text" placeholder=""/>
                </div>
                <div className="flex between displayBlockResponsive mt1">
                    <p className="formTitle mr1">Nombre*</p>
                    <input value={serviceName} onChange={(e) => setServiceName(e.target.value)} className="inputForm w100Min" type="text" placeholder=""/>
                </div>
                
                {formError === '' ? <p></p> : <p className="subsubtitle color-trash">{formError}</p>}

                <div className="center w100 mt2">
                    <button disabled={disabledButton} className="btn-gradient-primary" onClick={() => editService()}>{
                    disabledButton ? <IonIcon name='chevron-collapse-outline' className="rotateItem" color='grey' style={{fontSize: '1rem' }}/> : 'Guardar servicio'}</button>
                </div>
              </div>
        </Modal>
    </div>;
}

export default LayoutConfigurationPage;
