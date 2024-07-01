'use client';
import Header from "@/components/dashboard/Header";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getUser, loginUser } from "../api/user/call";
import { useRouter } from "next/navigation";
import {NotificationManager} from 'react-notifications';
import { UserModel } from "@/models/user.model";
import  Cookie  from "universal-cookie";
import CSVReader from 'react-csv-reader'
import { toast } from "react-toastify";
import IonIcon from "@reacticons/ionicons";
import Footer from "@/components/dashboard/Footer";

const LayoutSignIn = () =>{
  var router = useRouter();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [user, setUser] = useState<UserModel>();
  const [formError, setErrorForm] = useState<string>('');
    const toUser = async () => {
        const userr = await getUser();
        if(userr !== undefined && userr !== null){
          if(userr?.type === 'workshop'){
            router.push('/workshop/home');
          } else router.push('/provider/home');
        }
        setUser(userr);
    }
    useEffect(() => {
        toUser();
    }, []);
  return (
    <div>
      <Header/>
      <section style={{background: '#f7f7f7'}} className="relative z-10 overflow-hidden pb-16 pt-36 ">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="shadow-three mx-auto max-w-[500px] rounded bg-white px-6 py-10 dark:bg-dark sm:p-[60px]">
                <h3 className="mb-3 text-center text-2xl  sm:text-3xl">
                  Ingresa
                </h3>
                <p className="mb-11 text-center text-base font-medium text-body-color">
                  Inicia sesion en tu cuenta.
                </p>
                
                <form>
                  <div className="mb-8">
                    <label
                      htmlFor="email"
                      className="mb-3 block text-sm text-dark dark:text-white"
                    >
                      Correo electrónico
                    </label>
                    <input
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      name="email"
                      placeholder=""
                      className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                    />
                  </div>
                  <div className="mb-8">
                    <label
                      htmlFor="password"
                      className="mb-3 block text-sm text-dark dark:text-white"
                    >
                      Contraseña
                    </label>
                    <input
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                      name="password"
                      placeholder=""
                      className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                    />
                  </div>
                  {formError === '' ? <p></p> : <p className="subsubtitle color-trash" >{formError}</p>}

                  <div className="mb-6 mt1">
                    <button type='button' onClick={async () => {
                            if(password !== '' && email !== ''){
                              NotificationManager.info('Estamos validando los datos.', 'Espera');
                              const response: any = await loginUser(email ?? '', password ?? '');
                              if(response !== false){
                                toast.success('Te estamos redirigiendo..')
                                if(response?.type === 'workshop'){
                        
                                  router.push('/workshop/home');
                                } else router.push('/provider/home');
                              } else setErrorForm('* La contraseña o el email no coinciden.');
                            } else setErrorForm('* Completa el formulario.');
                        }} className="btn-gradient-third w100 flex" style={{justifyContent: 'center'}}>
                      <p className="mr1" style={{color: 'white', fontSize: '1.1rem'}}>Continuar</p>
                      <IonIcon className="alignIcon" style={{fontSize: '1.1rem'}} name="arrow-forward-outline"/>

                    </button>
                  </div>
                </form>
                
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}

export default LayoutSignIn;