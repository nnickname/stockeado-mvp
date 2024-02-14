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
const LayoutConfigurationPage = () =>{
    const router = useRouter();
    const [user, setUser] = useState<UserModel>();
    const [image, setImage] = useState(null);
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
    }
    useEffect(() => {
        toUser();
    }, []);
    const validateForm = async () => {
        const body = {
            _id: user?._id,
            image: image ?? user?.image,
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
    return <SideBarComponent user={user} route='configuration' frameContennt={
        <div className="configurationContent">
            <div className="banner">
            <div className="background" style={{backgroundImage: `url(${backgroundImage.src})`,}}>
                <div style={{zIndex: 99}}>
                    <label htmlFor="image" style={{width: '100%',
                        padding: '4rem',
                        margin: '0px',
                        color: 'white',
                        backgroundSize: '100%',
                        backgroundImage: image !== null ? image : 'rgba(0,0,0, 0.2)', cursor: 'pointer'}}> <Image alt="Logo" src={ImageLogo}/>
                        </label>

                        <input accept="image" id="image" onChange={onChangeImage} type='file' placeholder='Subir archivo' style={{
                        visibility: 'hidden', display: 'none'
                        
                        }}/>
                    </div>
                </div>
            </div>
            <div className="container">
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
      }/>;
}

export default LayoutConfigurationPage;