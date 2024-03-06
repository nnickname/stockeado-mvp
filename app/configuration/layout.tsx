'use client';
import { useRouter } from "next/navigation";
import InventoryResume from "@/components/panel/inventoryresume";
import SellResume from "@/components/panel/sellresume";
import SideBarComponent from "@/components/panel/sidebar";
import { createConnection } from "mongoose";
import { useEffect, useState } from "react";
import { getUser } from "../api/user/call";
import Cookie from 'universal-cookie';
import { UserModel } from '../../models/userModel';
import './index.css';
import backgroundImage from '../../public/images/logo/background2.jpeg';
import ImageLogo from '../../public/images/logo/mplogo1.png';
import Image from "next/image";
import { editUser } from "../api/user/call";
import BackgroundImage from "@/components/marketplace/background/background";
import IonIcon from "@reacticons/ionicons";
const LayoutConfigurationPage = () =>{
    const router = useRouter();
    const [user, setUser] = useState<UserModel>(null);
    const [image, setImage] = useState(null);
    const [imageLogo, setImageLogo] = useState(null);

    const [direction, setDirection] = useState(null);    
    const [name, setName] = useState(null); 
    const [lastName, setLastname] = useState(null); 
    const [phone, setPhone] = useState(null); 
    const [nameShop, setNameShop] = useState(null);    
    const toUser = async () => {
        const userr = await getUser();
        if(userr === undefined || userr === null){
            router.push('/signin');
        }
        setUser(userr);
        setImage(user?.image);
    }
    useEffect(() => {
        toUser();
    }, []);
    const validateForm = async () => {
        const body = {
            _id: user?._id,
            image: image ?? user?.image,
            imageLogo: imageLogo ?? user?.imageLogo,
            direction: direction ?? user?.direction,
            name: name ?? user?.name,
            lastName: lastName ?? user?.lastname,
            nameShop: nameShop ?? user?.nameShop,
            phone: phone ?? user?.phone
        };
        const response = await editUser(body);
        if(response) window.location.reload();
    }
    const onChangeImage = async (event) => {
        const file = event.target.files[0];
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
          setImage(fileReader.result);
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
          setImageLogo(fileReader.result);
        };
        fileReader.onerror = (error) => {
          console.log(error);
        };
    }
    return <div>
        {user === null ? <IonIcon name='chevron-collapse-outline' className="rotateItem" color='#1366D9' style={{fontSize: '1.5rem', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}/> :
            
    <SideBarComponent user={user} route='configuration' frameContennt={
        <div className="configurationContent">
            <div className="banner">
                <label  htmlFor="imageBanner" style={{cursor: 'pointer', width: '100%', padding: '1rem'}}>
                    <img src={(image ?? user?.image) ?? backgroundImage.src} alt="Banner" style={{marginRight: 'auto', marginLeft: 'auto'}}/>
                    <input accept="image" id="imageBanner" onChange={onChangeImage} type='file' placeholder='Subir archivo' style={{
                        visibility: 'hidden', display: 'none'}}/>
                </label>
                
            </div>
            <div className="container">
                <label  htmlFor="imageLogo" style={{cursor: 'pointer'}}>
                    <img style={{maxWidth: '150px', padding: '1rem', marginRight: 'auto', marginLeft: 'auto'}} src={(imageLogo ?? user?.imageLogo) ?? ImageLogo.src} alt="Logo"/>
                    <input accept="image" id="imageLogo" onChange={onChangeImageLogo} type='file' placeholder='Subir archivo' style={{
                        visibility: 'hidden', display: 'none'}}/>
                </label>
                <h1 style={{color: 'rgba(0,0,0, 0.8)', fontSize: '1.2rem', marginTop: '1rem'}}>Configura tu usuario</h1>
                <div style={{marginTop: '1rem'}}>
                    <input value={nameShop} onChange={(e) => setNameShop(e.target.value)} placeholder={"Nombre de tienda (" + user?.nameShop + ")"} className="border-stroke dark:text-body-color-dark dark:shadow-two  w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none" style={{background: 'transparent'}}></input>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <input value={name} onChange={(e) => setName(e.target.value)} placeholder={"Nombre (" + user?.name + ")"}  className="border-stroke dark:text-body-color-dark dark:shadow-two  w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none" style={{background: 'transparent'}}></input>
                    <input value={lastName} onChange={(e) => setLastname(e.target.value)} placeholder={"Apellido (" + user?.lastname + ")"} className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border  px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none" style={{background: 'transparent'}}></input>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <input value={direction} onChange={(e) => setDirection(e.target.value)} placeholder={"Dirección (" + user?.direction + ")"}  className="border-stroke dark:text-body-color-dark dark:shadow-two  w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none" style={{background: 'transparent'}}></input>
                    <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder={"Whatsapp (" + user?.phone + ")"} className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border  px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none" style={{background: 'transparent'}}></input>
                </div>
                    <div style={{width: '100%', marginTop: '1rem', textAlign: 'right'}}>
                        <button
                                onClick={() => validateForm()}
                                className="inline-block rounded-sm bg-black px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/5"
                                style={{color: '#3662E3', background: 'transparent', fontWeight: '400', fontSize: '1rem'}}
                                >
                                Guardar
                        </button>
                    </div>
            </div>

        </div>
      }/>
        }
    </div>;
}

export default LayoutConfigurationPage;