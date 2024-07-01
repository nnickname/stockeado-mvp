'use client';
import Header from "@/components/dashboard/Header"
import Link from "next/link"
import { useState } from "react";
import {NotificationManager} from 'react-notifications';
import { createUser } from "../api/user/call";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Footer from "@/components/dashboard/Footer";
import IonIcon from "@reacticons/ionicons";

const LayoutSignUp = () => {
    const [nameShop, setNameShop] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [lastname, setLastName] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [validate, setValidate] = useState<any>();
    const router = useRouter();
    const buildForm = async () => {
      if(validate === 'on'){
        if(name !== '' && password !== '' && email !== '' && lastname !== ''){
          const body = {
            name,
            lastname,
            nameShop,
            phone: '',
            image: '',
            imageLogo: '',
            direction: '',
            password,
            email,
            visits: 0,
            type: 'workshop',
            accessories: [],
            owner: '',
            role: 'owner'
          }
          const response = await createUser(body);
          if(response){
            toast.success('Creaste tu cuenta');
            setTimeout(() => router.push('/workshop/home'), 1500);
          } else toast.error('El usuario ya se encuentra registrado');
        }else toast.error('Completa el formulario');

      } else toast.error('Tienes que aceptar nuestros terminos y condiciones');
    }
    return <div>
        <Header/>
        <section className="relative z-10 overflow-hidden pb-16 pt-36 md:pb-20 lg:pb-28 lg:pt-[180px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="shadow-three mx-auto max-w-[500px] rounded bg-white px-6 py-10 dark:bg-dark sm:p-[60px]">
                <h3 className="mb-3 text-center text-2xl  sm:text-3xl">
                  Crea tu cuenta
                </h3>
                <p className="mb-11 text-center text-base font-medium text-body-color">
                  ¿Eres un taller?, Crea tu cuenta gratis para explorar todas las funcionalidades de Stockeado.
                </p>
                <form>
                  <div className="mb-8">
                    <label
                      htmlFor="name"
                      className="mb-3 block text-sm text-dark dark:text-white"
                    >
                      {" "}
                     Nombre
                    </label>
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      type="text"
                      name="name"
                      placeholder=""
                      className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                    />
                  </div>
                  <div className="mb-8">
                    <label
                      htmlFor="name"
                      className="mb-3 block text-sm text-dark dark:text-white"
                    >
                      {" "}
                     Apellido
                    </label>
                    <input
                      value={lastname}
                      onChange={(e) => setLastName(e.target.value)}
                      type="text"
                      name="name"
                      placeholder=""
                      className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                    />
                  </div>
                  <div className="mb-8">
                    <label
                      htmlFor="name"
                      className="mb-3 block text-sm text-dark dark:text-white"
                    >
                      {" "}
                     Nombre de tienda{"/"}Alias
                    </label>
                    <input
                      value={nameShop}
                      onChange={(e) => setNameShop(e.target.value)}
                      type="text"
                      name="name"
                      placeholder=""
                      className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                    />
                  </div>
                  <div className="mb-8">
                    <label
                      htmlFor="email"
                      className="mb-3 block text-sm text-dark dark:text-white"
                    >
                      {" "}
                      Correo electrónico{" "}
                    </label>
                    <input
                      value={email}
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
                      {" "}
                      Contraseña{" "}
                    </label>
                    <input
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                      name="password"
                      placeholder=""
                      className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                    />
                  </div>
                  <div className="mb-8 flex">
                    <label
                    
                      htmlFor="checkboxLabel"
                      className="flex cursor-pointer select-none text-sm font-medium text-body-color"
                    >
                      <div className="relative">
                        <input
                          value={validate}
                          onChange={(e) => setValidate(e.target.value)}
                          type="checkbox"
                          id="checkboxLabel"
                          className="sr-only"
                        />
                        <div className="box mr-4 mt-1 flex h-5 w-5 items-center justify-center rounded border border-body-color border-opacity-20 dark:border-white dark:border-opacity-10">
                          <span className="opacity-0">
                            <svg
                              width="11"
                              height="8"
                              viewBox="0 0 11 8"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z"
                                fill="#3056D3"
                                stroke="#3056D3"
                                strokeWidth="0.4"
                              />
                            </svg>
                          </span>
                        </div>
                      </div>
                      <span>
                        Al crear esta cuenta aceptas nuestros
                        <a href="/terms" target="_blank"  className="text-primary hover:underline">
                          {" "}
                          Terminos y condiciones{" "}
                        </a>
                        y nuestra
                        <a href="/privacy" target="_blank" className="text-primary hover:underline">
                          {" "}
                          Politica de privacidad{" "}
                        </a>
                      </span>
                    </label>
                  </div>
                  <div className="mb-6 mt1">
                    <button type='button' onClick={() => buildForm()} className="btn-gradient-third w100 flex" style={{justifyContent: 'center'}}>
                      <p className="mr1" style={{color: 'white', fontSize: '1.1rem'}}>Crear cuenta</p>
                      <IonIcon className="alignIcon" style={{fontSize: '1.1rem'}} name="arrow-forward-outline"/>

                    </button>
                  </div>
                </form>
                <p className="text-center text-base font-medium text-body-color">
                  ¿Ya tienes una cuenta?{" "}
                  <Link href="/signin" className="text-primary hover:underline">
                    Iniciar sesión
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute left-0 top-0 z-[-1]">
          
        </div>
      </section>
      <Footer/>
    </div>
}

export default LayoutSignUp;