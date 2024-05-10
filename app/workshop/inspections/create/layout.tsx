'use client';
import { getUser } from "@/app/api/userr/call";
import SideBarComponent from "@/components/panel/sidebar";
import { UserModel } from "@/models/user.model";
import IonIcon from "@reacticons/ionicons";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import './index.css';
import Select from "react-dropdown-select";

const InspectionWorkshopLayoutPage = () => {
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
                        <h1 className="headerSideBar"> Nuevo informe de inspección</h1>
                        <div style={{background: 'white'}}>
                            <button  onClick={() => router.push('/workshop/inspections')} className="btn-back mr1 mt1"><IonIcon name="arrow-back-outline"/></button>
                        </div>
                    </div>
                    <div className="p1">


                        <div className="flex between">
                            <div>
                                <p className="subtitle mt2" style={{fontWeight: '500'}}>Inspección #21</p>
                            </div>
                            <div className="flex">
                                <p className="subtitle mr1 mt2">Estado</p>
                                <button disabled className="btn-disabled-secondary ml1 mt1">Sin confirmar</button>
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
                                        className="inputForm"
                                        onChange={(values) => { } } values={[]}                                    />
                                </div>
                                <div className="flex between mt1">
                                    <p className="formTitle">Nombre</p>
                                    <input className="inputForm" type="text" placeholder=""/>
                                </div>
                                <div className="flex between mt1">
                                    <p className="formTitle">Apellido</p>
                                    <input className="inputForm" type="text" placeholder=""/>
                                </div>
                                <div className="flex between mt1">
                                    <p className="formTitle">Celular</p>
                                    <input className="inputForm" type="text" placeholder=""/>
                                </div>
                                <div className="flex between mt1">
                                    <p className="formTitle">Correo</p>
                                    <input className="inputForm" type="text" placeholder=""/>
                                </div>
                                <div className="flex between mt1">
                                    <p className="formTitle">Visita</p>
                                    <input className="inputForm" type="text" placeholder=""/>
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
                                        className="inputForm"
                                        onChange={(values) => { } } values={[]}                                    />
                                </div>
                                <div className="flex between mt1">
                                    <p className="formTitle">Placa</p>
                                    <input className="inputForm" type="text" placeholder=""/>
                                </div>
                                <div className="flex between mt1">
                                    <p className="formTitle">Marca</p>
                                    <input className="inputForm" type="text" placeholder=""/>
                                </div>
                                <div className="flex between mt1">
                                    <p className="formTitle">Modelo</p>
                                    <input className="inputForm" type="text" placeholder=""/>
                                </div>
                                <div className="flex between mt1">
                                    <p className="formTitle">Año</p>
                                    <input className="inputForm" type="text" placeholder=""/>
                                </div>
                                <div className="flex between mt1">
                                    <p className="formTitle">VIN</p>
                                    <input className="inputForm" type="text" placeholder=""/>
                                </div>
                            </div>
                            

                            
                        </div>




                        <div className="cardWhiteForm mt1">
                            <p className="subsubtitle">Estado del vehículo actual</p>
                            <div className="flex between displayBlockResponsive mt1">
                                <div className="w100 mr1 nPaddingLeftResponsive" style={{paddingRight: '2rem'}}>
                                    <div className="flex between mt1">
                                        <p className="formTitle ">Kilometraje</p>
                                        <input className="inputForm" type="text" placeholder=""/>
                                    </div>

                                </div>
                                <div className="w100 nPaddingLeftResponsive" style={{ paddingLeft: '2rem'}}>
                                    <div className="flex between mt1">
                                        <p className="formTitle" >Nivel de aceite</p>
                                        <input className="inputForm" type="text" placeholder=""/>
                                    </div>

                                </div>
                            </div>

                            <div className="flex between displayBlockResponsive">
                                <div className="w100 mr1 nPaddingLeftResponsive" style={{paddingRight: '2rem'}}>
                                    <div className="flex between mt1">
                                        <p className="formTitle ">Nivel de gasolina</p>
                                        <input className="inputForm" type="text" placeholder=""/>
                                    </div>

                                </div>
                                <div className="w100 nPaddingLeftResponsive" style={{ paddingLeft: '2rem'}}>
                                    <div className="flex between mt1">
                                        <p className="formTitle" >Líquido de frenos</p>
                                        <input className="inputForm" type="text" placeholder=""/>
                                    </div>

                                </div>
                            </div>

                            <div className="flex between displayBlockResponsive">
                                <div className="w100 mr1 nPaddingLeftResponsive" style={{paddingRight: '2rem'}}>
                                    <div className="flex between mt1">
                                        <p className="formTitle ">Refrigerante</p>
                                        <input className="inputForm" type="text" placeholder=""/>
                                    </div>

                                </div>
                                <div className="w100 nPaddingLeftResponsive" style={{ paddingLeft: '2rem'}}>
                                    <div className="flex between mt1">
                                        <p className="formTitle" >Fotos actuales(max 4)</p>
                                        <input className="inputForm" type="text" placeholder=""/>
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
                            <p className="subsubtitle">Recordatorios(Opcional)</p>
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



                    </div>
                </div>
            }
            />
        }
    </div>
}
export default InspectionWorkshopLayoutPage;