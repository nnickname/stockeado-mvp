'use client';
import { getUser } from "@/app/api/userr/call";
import SideBarComponent from "@/components/panel/sidebar";
import { UserModel } from "@/models/user.model";
import IonIcon from "@reacticons/ionicons";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import '../create/index.css';
import Select from "react-dropdown-select";

const InspectionViewWorkshopLayoutPage = () => {
    const router = useRouter();
    const [user, setUser] = useState<UserModel>(null);
    const toUser = async () => {
        const userr = await getUser();
        if(userr === undefined || userr === null){
              router.push('/');
        }
        if(userr?.type !== 'workshop'){
            router.push('/provider/home');
        }
        setUser(userr);
      }
    useEffect(() => {
        router.refresh();
        toUser();
    }, []);
    return <div>
        {user === null ? <IonIcon name='chevron-collapse-outline' className="rotateItem" color='#1366D9' style={{fontSize: '1.5rem', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}/> :
            <SideBarComponent user={user} route='/workshop/inspections' frameContennt={
                <div>
                    <div className="flex between">
                        <h1 className="headerSideBar"> Editar informe de inspección</h1>
                        <div style={{background: 'white'}}>
                            <button  onClick={() => router.push('/workshop/inspections')} className="btn-back mr1 mt1"><IonIcon name="arrow-back-outline"/></button>
                        </div>
                    </div>
                    <div className="p1">


                        <div className="flex between">
                            <div>
                                <p className="subtitle mt1" style={{fontWeight: '500'}}>Inspección #21</p>
                            </div>
                            <div className="flex">
                                <p className="subtitle mr1 mt1">Estado</p>
                                <div className="mt1">
                                    <button disabled className="btn-disabled-secondary ml1">Sin confirmar</button>
                                </div>
                            </div>
                        </div>


                        <div className="cardWhiteForm mt2">
                            <p className="subsubtitle">Generales</p>
                            <div className="flex between displayBlockResponsive w100">
                                <div className="flex mr1 w100  mt1 nPaddingLeftResponsive" style={{paddingRight: '2rem'}}>
                                    <p className="formTitle w100 mr1">Fecha de ingreso</p>
                                    <input className="inputForm w100  ml1 " type="datetime-local" placeholder=""/>
                                </div>
                                <div className="flex w100 mt1 nPaddingLeftResponsive" style={{ paddingLeft: '2rem'}}>
                                    <p className="formTitle w100 mr1">Mecanico asignado</p>
                                    <input className="inputForm w100 ml1" type="text" placeholder=""/>
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
                                                label: 'Jorge Perez',
                                                value: '0',
                                            },
                                            {
                                                label: 'Jose Perez',
                                                value: '1',
                                            },
                                            {
                                                label: 'Pablo Perez',
                                                value: '2',
                                            },
                                            {
                                                label: 'Mauricio Perez',
                                                value: '3',
                                            },
                                            {
                                                label: 'Javier Perez',
                                                value: '4',
                                            }
                                        ]}
                                        separator
                                        placeholder="Seleccionar/Buscar"
                                        className="inputForm"
                                        onChange={(values) => { } } values={[]}                                    />
                                </div>
                                <div className="flex between mt1">
                                    <p className="formTitle">Nombre</p>
                                    <input className="inputForm ml1" type="text" placeholder=""/>
                                </div>
                                <div className="flex between mt1">
                                    <p className="formTitle">Apellido</p>
                                    <input className="inputForm ml1" type="text" placeholder=""/>
                                </div>
                                <div className="flex between mt1">
                                    <p className="formTitle">Celular</p>
                                    <input className="inputForm ml1" type="text" placeholder=""/>
                                </div>
                                <div className="flex between mt1">
                                    <p className="formTitle">Correo</p>
                                    <input className="inputForm ml1" type="text" placeholder=""/>
                                </div>
                                <div className="flex between mt1">
                                    <p className="formTitle">Visita</p>
                                    <input className="inputForm ml1" type="text" placeholder=""/>
                                </div>
                            </div>
                            <div className="cardWhiteForm mt1 w100">
                                <div className="flex between">
                                    <p className="subsubtitle">Vehículo</p>
                                    <Select
                                        options={[
                                            {
                                                label: 'BMW 1',
                                                value: '0',
                                            },
                                            {
                                                label: 'BMW 2',
                                                value: '1',
                                            },
                                            {
                                                label: 'BMW 3',
                                                value: '2',
                                            },
                                            {
                                                label: 'BMW 4',
                                                value: '3',
                                            },
                                            {
                                                label: 'BMW 5',
                                                value: '4',
                                            }
                                        ]}
                                        separator
                                        placeholder="Seleccionar/Buscar"
                                        className="inputForm"
                                        onChange={(values) => { } } values={[]}                                    />
                                </div>
                                <div className="flex between mt1">
                                    <p className="formTitle">Placa</p>
                                    <input className="inputForm ml1" type="text" placeholder=""/>
                                </div>
                                <div className="flex between mt1">
                                    <p className="formTitle">Marca</p>
                                    <input className="inputForm ml1" type="text" placeholder=""/>
                                </div>
                                <div className="flex between mt1">
                                    <p className="formTitle">Modelo</p>
                                    <input className="inputForm ml1" type="text" placeholder=""/>
                                </div>
                                <div className="flex between mt1">
                                    <p className="formTitle">Año</p>
                                    <input className="inputForm ml1" type="text" placeholder=""/>
                                </div>
                                <div className="flex between mt1">
                                    <p className="formTitle">VIN</p>
                                    <input className="inputForm ml1" type="text" placeholder=""/>
                                </div>
                            </div>
                            

                            
                        </div>




                        <div className="cardWhiteForm mt1">
                            <p className="subsubtitle">Estado del vehículo actual</p>
                            <div className="flex between displayBlockResponsive mt1">
                                <div className="w100 mr1 nPaddingLeftResponsive" style={{paddingRight: '2rem'}}>
                                    <div className="flex between mt1">
                                        <p className="formTitle ">Kilometraje</p>
                                        <input className="inputForm ml1" type="text" placeholder=""/>
                                    </div>

                                </div>
                                <div className="w100 nPaddingLeftResponsive" style={{ paddingLeft: '2rem'}}>
                                    <div className="flex between mt1">
                                        <p className="formTitle" >Nivel de aceite</p>
                                        <input className="inputForm ml1" type="text" placeholder=""/>
                                    </div>

                                </div>
                            </div>

                            <div className="flex between displayBlockResponsive">
                                <div className="w100 mr1 nPaddingLeftResponsive" style={{paddingRight: '2rem'}}>
                                    <div className="flex between mt1">
                                        <p className="formTitle ">Nivel de gasolina</p>
                                        <input className="inputForm ml1" type="text" placeholder=""/>
                                    </div>

                                </div>
                                <div className="w100 nPaddingLeftResponsive" style={{ paddingLeft: '2rem'}}>
                                    <div className="flex between mt1">
                                        <p className="formTitle" >Líquido de frenos</p>
                                        <input className="inputForm ml1" type="text" placeholder=""/>
                                    </div>

                                </div>
                            </div>

                            <div className="flex between displayBlockResponsive">
                                <div className="w100 mr1 nPaddingLeftResponsive" style={{paddingRight: '2rem'}}>
                                    <div className="flex between mt1">
                                        <p className="formTitle ">Refrigerante</p>
                                        <input className="inputForm ml1" type="text" placeholder=""/>
                                    </div>

                                </div>
                                <div className="w100 nPaddingLeftResponsive" style={{ paddingLeft: '2rem'}}>
                                    <div className="flex between mt1">
                                        <p className="formTitle" >Fotos actuales(max 4)</p>
                                        <input className="inputForm ml1" type="text" placeholder=""/>
                                    </div>

                                </div>
                            </div>

                            <p className="formTitle mt2">Trabajos a realizar</p>
                            <div className="inline-items">
                                <div className="item-create mt1 ml1">
                                    <div className="flex">
                                        <p>Cambio de bujías x5</p>
                                        <IonIcon className="icon ml1" name="trash-outline"/>
                                    </div>
                                </div>
                                <div className="item-create mt1 ml1">
                                    <div className="flex">
                                        <p>Cambio de liquido refrigerante</p>
                                        <IonIcon className="icon ml1" name="trash-outline"/>
                                    </div>
                                </div>
                                
                            </div>
                            
                            <div className="flex w100">
                                <input className="inputForm mt1 w100" type="text" placeholder="" style={{borderRadius: '.5rem 0rem 0rem .5rem'}}/>
                                <button className="btn-gradient-secondary mt1" style={{border: '1px solid grey', borderRadius: '0px .5rem .5rem 0rem'}} >Añadir</button>
                            </div>
                            <p className="formTitle mt2">Observaciones adicionales</p>
                            <input className="inputForm mt1 w100" type="text" placeholder=""/>
                        </div>



                        <div className="cardWhiteForm mt1">
                            <div className="flex">
                                <p className="subsubtitle">Recordatorios </p>
                                <IonIcon className="ml1" name="eye-off-outline"/>
                            </div>
                            <div className="inline-items">
                                <div className="item-create mt1 ml1">
                                    <div className="flex">
                                        <p>100.000km avisar revision 24/10/2024:11:00</p>
                                        <IonIcon className="icon ml1" name="trash-outline"/>
                                    </div>
                                </div>
                                <div className="item-create mt1 ml1">
                                    <div className="flex">
                                        <p>Cambio de aceite 10/10/2024:11:00</p>
                                        <IonIcon className="icon ml1" name="trash-outline"/>
                                    </div>
                                </div>
                                
                            </div>
                            <div className="flex w100">
                                <input type="datetime-local" className="inputForm mt1" style={{borderRadius: '.5rem 0rem 0rem .5rem'}}/>
                                <input className="inputForm mt1 w100" type="text" placeholder="Descripción" style={{borderRadius: '0rem 0rem 0rem 0rem'}}/>
                                <button className="btn-gradient-secondary mt1" style={{border:'1px solid grey', borderRadius: '0px .5rem .5rem 0rem'}} >Añadir</button>
                            </div>
                        </div>
 
                        <div className="cardWhiteForm mt1">
                            <p className="subsubtitle">Accesorios</p>
                            <div className="inline-items">
                                <div className="item-create mt1 ml1">
                                    <div className="flex">
                                        <p>Kit de auxilio</p>
                                        <IonIcon className="icon ml1" name="trash-outline"/>
                                    </div>
                                </div>
                                <div className="item-create mt1 ml1">
                                    <div className="flex">
                                        <p>Rueda de auxilio</p>
                                        <IonIcon className="icon ml1" name="trash-outline"/>
                                    </div>
                                </div>
                                
                            </div>
                            <div className="flex w100">
                                <input className="inputForm mt1 w100" type="text" placeholder="" style={{borderRadius: '.5rem 0rem 0rem .5rem'}}/>
                                <button className="btn-gradient-secondary mt1" style={{border: '1px solid grey', borderRadius: '0px .5rem .5rem 0rem'}} >Añadir</button>
                            </div>
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

                        <div className=" center mt1 mSidesAuto">
                            <button className="btn-gradient-third mr1">Guardad inspección</button>
                            <button className="btn-gradient-secondary ml1 " >Crear orden de servicio</button>
                        </div>

                        

                    </div>
                </div>
            }
            />
        }
    </div>
}
export default InspectionViewWorkshopLayoutPage;