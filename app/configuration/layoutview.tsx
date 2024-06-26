'use client';
import { useRouter } from "next/navigation";
import InventoryResume from "@/components/panel/inventoryresume";
import SellResume from "@/components/panel/sellresume";
import SideBarComponent from "@/components/panel/sidebar";
import { createConnection } from "mongoose";
import { useEffect, useState } from "react";
import Cookie from 'universal-cookie';
import { UserModel } from '../../models/user.model';
import './index.css';
import blueImage from '../../public/images/logo/blueimage.png';
import backgroundImage from '../../public/images/logo/background2.jpeg';
import ImageLogo from '../../public/images/logo/mplogo1.png';
import Image from "next/image";
import { editUser, getUser} from "../api/user/call";
import BackgroundImage from "@/components/marketplace/background/background";
import IonIcon from "@reacticons/ionicons";
import { toast } from "react-toastify";
import '../workshop/inspections/create/index.css';
import Modal from "react-responsive-modal";
import 'react-responsive-modal/styles.css';
import Link from "next/link";
import LoadPage from "@/components/general/loadPage";
const LayoutConfigurationPage = () =>{
    const router = useRouter();
    const [user, setUser] = useState<UserModel>(null);
    const [image, setImage] = useState('');
    const [imageLogo, setImageLogo] = useState('');

    const [direction, setDirection] = useState(user?.direction);    
    const [name, setName] = useState(user?.name); 
    const [lastName, setLastname] = useState(user?.lastname); 
    const [phone, setPhone] = useState(user?.phone); 
    const [nameShop, setNameShop] = useState(user?.nameShop);   
    const [ruc, setRuc] = useState(user?.ruc);   

    const [newAccesorie, setNewAccesorie] = useState<string>('');
    const [accesories, setAccesories] = useState<string[]>([]);
    const [open, setOpen] = useState<boolean>();
    const [width, setWidth] = useState(0);
    const [disabledButton, setDisabledButton] = useState<boolean>(false);
    const [formError, setErrorForm] = useState<string>('');

    const handleResize = () => setWidth(window.innerWidth);

    const toUser = async () => {
        const userr = await getUser();
        if(userr === undefined || userr === null){
            router.push('/signin');
        }
        setUser(userr);
        setNameShop(userr?.nameShop);
        setName(userr?.name);
        setLastname(userr?.lastname);
        setPhone(userr?.phone);
        setDirection(userr?.direction);
        setRuc(userr?.ruc );
        setAccesories(userr?.accesories ?? []);
        setServices(userr?.services ?? []);
    }

    useEffect(() => {
        toUser();
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const [services, setServices] = useState<any[]>([]);
    const [serviceSku, setServiceSku] = useState<string>('');
    const [serviceName, setServiceName] = useState<string>('');
    const deleteService = async(index: number) => {
        const servicess = services?.filter((e, indexx) => indexx !== index)
        const body = {
            _id: user?._id,
            services: servicess, 
        };
        const response = await editUser(body);
        if(response){
            toast.success('Eliminaste un servicio')
                setServices(body?.services);
                setDisabledButton(false);
        } else setErrorForm('* Ocurrio un problema');
        
    }
    const addService = async() => {
        if(serviceSku !== '' && serviceName !== ''){
            const body = {
                _id: user?._id,
                services: [...services, {
                    sku: serviceSku,
                    name: serviceName,
                    tasks: []
                }], 
            };
            setDisabledButton(true);
            const response = await editUser(body);
            if(response){
                toast.success('Añadiste un servicio')
                setServiceSku('');
                setServiceName('');
                setServices(body?.services);
                setDisabledButton(false);
                setOpen(false);
                setErrorForm('');
            } else setErrorForm('* Ocurrio un problema');
        } else setErrorForm('* Encontramos errores en el formulario');
    }
    const validateForm = async (accesoriess: string[]) => {
        const body = {
            _id: user?._id,
            image: image,
            imageLogo: imageLogo,
            direction: direction,
            name: name,
            lastName: lastName,
            nameShop: nameShop,
            phone: phone,
            ruc: ruc,
            type: user?.type,
            accesories: accesoriess
        };
        const response = await editUser(body);
        if(response) {
            toast.success('Guardaste los cambios');
            return true;
        }
        return false;
    }
    const onChangeImage = async (event) => {
        const file = event.target.files[0];
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
          setImage(String(fileReader.result));
        };
        fileReader.onerror = (error) => {
          console.log(error);
        };
    }
    const onChangeImageLogo = async (event) => {
        const file = event.target.files[0];
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
          setImageLogo(String(fileReader.result));
        };
        fileReader.onerror = (error) => {
          console.log(error);
        };
    }
    return <div>
        {user === null ? <LoadPage/> :
            
    <SideBarComponent user={user} route='configuration' frameContennt={
        <div>
            <h1 className="headerSideBar"> Datos de la empresa</h1>
            <p className="subsubtitle mt1 ml1" style={{marginLeft: 'calc(1rem + 1px)'}}>Conoce la información que tienes registrada en Stockeado sobre tu empresa.            </p>

            <div className="p1">
                <div className="configurationContent">
                    {user?.type === 'workshop' ? <div></div> :
                        <div className="banner">
                            
                            <label  htmlFor="imageBanner" style={{cursor: 'pointer', width: '100%', padding: '1rem'}}>
                                <img src={image !== '' ? image : (user?.image === '' ? backgroundImage.src : user?.image)} alt="Banner" style={{width: '100%', maxHeight: '200px'}}/>
                                <input accept="image" id="imageBanner" onChange={onChangeImage} type='file' placeholder='Subir archivo' style={{
                                    visibility: 'hidden', display: 'none'}}/>
                            </label>
                        </div>
                    }
                    <div className="container">
                        <label  htmlFor="imageLogo" style={{cursor: 'pointer'}}>
                            <img style={{width: '150px', height: '150px', borderRadius: '100%', padding: '1rem', marginRight: 'auto', marginLeft: 'auto'}} src={imageLogo !== '' ? imageLogo : (user?.imageLogo === '' ? blueImage.src : user?.imageLogo)} alt="Logo"/>
                            <input accept="image" id="imageLogo" onChange={onChangeImageLogo} type='file' placeholder='Subir archivo' style={{
                                visibility: 'hidden', display: 'none'}}/>
                        </label>
                        <h1 style={{color: 'rgba(0,0,0, 0.8)', fontSize: '1.2rem', marginTop: '1rem'}}>Configura tu usuario</h1>
                        <div style={{marginTop: '1rem'}}>
                            <input value={nameShop} onChange={(e) => setNameShop(e.target.value)} placeholder={"Nombre de tienda (" + nameShop + ")"} className="border-stroke dark:text-body-color-dark dark:shadow-two  w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none" style={{background: 'transparent'}}></input>
                            <input value={ruc} onChange={(e) => setRuc(e.target.value)} placeholder={"RUC (" + (ruc ?? '') + ")"}  className="border-stroke dark:text-body-color-dark dark:shadow-two  w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none" style={{background: 'transparent'}}></input>

                        </div>
                        <div style={{display: 'flex', justifyContent: 'space-between'}}>
                            <input value={name} onChange={(e) => setName(e.target.value)} placeholder={"Nombre (" + (name ?? '') + ")"}  className="border-stroke dark:text-body-color-dark dark:shadow-two  w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none" style={{background: 'transparent'}}></input>
                            <input value={lastName} onChange={(e) => setLastname(e.target.value)} placeholder={"Apellido (" + (lastName ?? '') + ")"} className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border  px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none" style={{background: 'transparent'}}></input>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'space-between'}}>
                            <input value={direction} onChange={(e) => setDirection(e.target.value)} placeholder={"Dirección (" + (direction ?? '') + ")"}  className="border-stroke dark:text-body-color-dark dark:shadow-two  w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none" style={{background: 'transparent'}}></input>
                            <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder={"Whatsapp (" + (phone ?? '') + ")"} className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border  px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none" style={{background: 'transparent'}}></input>
                        </div>
                            <div style={{width: '100%', marginTop: '1rem', textAlign: 'right'}}>
                                <button
                                        onClick={() => validateForm(accesories)}
                                        className="inline-block rounded-sm bg-black px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/5"
                                        style={{color: '#3662E3', background: 'transparent', fontWeight: '400', fontSize: '1rem'}}
                                        >
                                        Guardar
                                </button>
                            </div>
                    </div>

                </div>


                {user?.type === 'workshop' ? <div>

                    <div className="cardWhiteForm mt1">
                        <h1 className="title">Configura tu inspección digital</h1>
                        <p className="subtitle mt1">Accesorios</p>
                        <p className="subsubtitle">Personaliza los accesorios que usarás en tu inspección digital, para poder hacer un checklist y ahorrar tiempo</p>
                        <div className="inline-items mt05">
                        {accesories?.map((e, index: number) => <div className="item-create mt1 ml1">
                            <div className="flex">
                                <p>{e}</p>
                                <IonIcon onClick={() => {
                                    setAccesories(accesories?.filter((obj, indexx) => index !== indexx));
                                    toast.warning('Necesitas guardar los cambios');
                                }} className="icon ml1" name="trash-outline"/>
                            </div>
                        </div>)}
                    </div>
                    <div className="flex w100">
                        <input onChange={(e) => setNewAccesorie(e.target.value)} value={newAccesorie} className="inputForm mt1 w100" type="text" placeholder="" style={{borderRadius: '.5rem 0rem 0rem .5rem'}}/>
                        <button  onClick={async () => {
                        if(newAccesorie !== ''){
                                if(await validateForm([newAccesorie, ...accesories])){
                                    setAccesories([newAccesorie, ...accesories]);
                                    setNewAccesorie('');
                                }
                                
                            } else toast.error(' Completa el formulario')
                        }} className="btn-gradient-secondary mt1" style={{border: '1px solid grey', borderRadius: '0px .5rem .5rem 0rem'}} >Añadir</button>
                        </div>
                    </div>

                    <div className="cardWhiteForm mt1">
                        <div className="flex between">
                            <h1 className="title">Configura tus servicios</h1>
                            <button onClick={() => setOpen(true)} className="btn-gradient-secondary" style={{fontSize: '.9rem', paddingTop: '.3rem', paddingBottom: '.3rem'}}><IonIcon className="mr1" name="add-outline" style={{fontSize: '1rem'}}/> Añadir servicio </button>
                        </div>
                        <p className="subsubtitle mt1">Personaliza tus servicio en categorías a detalle para hacer las cotizaciones más rápido.</p>
                        <div className="w100">
                            <div className="tableConfigurationServicesHeader flex between">
                                <h1>Nombre</h1>
                                <h1>Items</h1>
                                <h1>Acciones</h1>
                            </div>
                            {services?.map((e, index) => {
                                const last = (index+1) === services?.length ? true : false;
                                return <div className={"tableConfigurationServicesItem "+ (last ? 'last' : '') + " w100 flex"}>
                                    <p className="w100 first">{e?.name}</p>
                                    <p className="w100 ml1">{e?.tasks?.length}</p>
                                    <div className="flex" style={{ color: '#3662E3'}}>
                                        <Link href={'/configuration/service?id=' + index}><IonIcon className="btn" name="eye-outline" style={{fontSize: '1.3rem'}}/></Link>
                                        <IonIcon onClick={() => deleteService(index)} className="btn ml1" name="trash-outline" style={{fontSize: '1.3rem'}}/>
                                    </div>
                                </div>
                            })}

                        </div>
                    </div>
                </div> : <div></div>}
                
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
                <h1 className="title">Nuevo servicio</h1>
                <div className="flex between displayBlockResponsive mt1">
                    <p className="formTitle mr1">SKU</p>
                    <input onChange={(e) => setServiceSku(e.target.value)} className="inputForm w100Min" type="text" placeholder=""/>
                </div>
                <div className="flex between displayBlockResponsive mt1">
                    <p className="formTitle mr1">Nombre*</p>
                    <input onChange={(e) => setServiceName(e.target.value)} className="inputForm w100Min" type="text" placeholder=""/>
                </div>
                {formError === '' ? <p></p> : <p className="subsubtitle color-trash">{formError}</p>}

                <div className="center w100 mt2">
                    <button disabled={disabledButton} className="btn-gradient-primary" onClick={() => addService()}>{
                    disabledButton ? <IonIcon name='chevron-collapse-outline' className="rotateItem" color='grey' style={{fontSize: '1rem' }}/> : 'Guardar servicio'}</button>
                </div>
              </div>
        </Modal>
    </div>;
}

export default LayoutConfigurationPage;
