'use client';
import SideBarComponent from "@/components/panel/sidebar";
import { UserModel } from "@/models/userModel";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { getUser } from "../api/userr/call";
import IonIcon from "@reacticons/ionicons";
import '../createquote/index.css';
import { QutoeModel, RequirementsModel, SendedQuotesModel } from "@/models/quoteModel";
import Modal from "react-responsive-modal";
import productImage from '../../public/images/logo/productImage.png';
import 'react-responsive-modal/styles.css';
import {NotificationManager} from 'react-notifications';
import { confirmQuote, createQuote, editQuote, getQuotes } from "../api/quotess/call";
import { useTheme } from "@table-library/react-table-library/theme";
import { getTheme } from "@table-library/react-table-library/baseline";
import { CompactTable } from '@table-library/react-table-library/compact';
const EditQuoteLayoutPage = () => {
    const router = useRouter();
    const [useQuote, setuseQuote] = useState<QutoeModel>();
    const [user, setUser] = useState<UserModel>(null);
    const [vehicle, setVehicle] = useState<string>('');
    const [plate, setPlate] = useState<string>('');
    const [date, setDate] = useState<string>(null);
    const [requeriments, setRequeriments] = useState<RequirementsModel[]>();

    // PRODUCT
    const [imageLogo, setImageLogo] = useState('');
    const [nameAdd, setName] = useState<string>('');
    const [codeAdd, setCode] = useState<string>('');
    const [open, setOpen] = useState<boolean>();
    // QUOTES
    const [imageRequest, setImageRequest] = useState('');
    const [product, setProduct] = useState<string>('');
    const [provider, setProvider] = useState<string>('');
    const [brand, setBrand] = useState<string>('');
    const [time, setTime] = useState<string>('');
    const [price, setPrice] = useState<string>('');

    const [openQuotes, setOpenQuotes] = useState<boolean>();
    const [quotes, setQuotes] = useState<SendedQuotesModel[]>();
    const buildForm = async () => {
        if(vehicle !== '' && plate !== '' && date !== null){
                const object = {
                    _id: useQuote?._id,
                    owner_id: user?._id,
                    vehicle,
                    plate,
                    date,
                    requirements: requeriments ?? [],
                    sendedQuotes: quotes ?? [],
                    state: useQuote?.state
                }
                const response = await editQuote(object);
                if(response !== null) {
                    window.location.reload();
                } else NotificationManager.error('Ocurrio un problema', 'Error');
        } else NotificationManager.error('Completa los datos', 'Error');
    }
    const confirmBuildQuote =  async () => {
        const response = await confirmQuote(String(useQuote?._id));
        if(response !== null) {
            router.push('/quotes')
        } else NotificationManager.error('Ocurrio un problema', 'Error');
    }
    const toUser = async () => {
        const userr = await getUser();
        if(userr === undefined || userr === null){
            router.push('/');
            return;
        }
        if(userr?.type !== 'workshop'){
            return router.push('/hub')
        }
        const quotesCast = await getQuotes(userr?._id);
        const urlParams = new URLSearchParams(window.location.search);
        let id = urlParams.get('id');
        if(id !== null && id?.length > 0){
            const quoteSelected = quotesCast?.find(i => i._id === id);
            if(quoteSelected !== null && quoteSelected !== undefined){
                setuseQuote(quoteSelected);
                setRequeriments(quoteSelected?.requirements);
                setQuotes(quoteSelected?.sendedQuotes);
                setVehicle(quoteSelected?.vehicle);
                setPlate(quoteSelected?.plate);
                setDate(quoteSelected?.date);
            } else router.push('/quotes');
        } else router.push('/quotes');
        setUser(userr);
        
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
    const onChangeImageQuotes = async (event) => {
        const file = event.target.files[0];
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
            setImageRequest(String(fileReader.result));
        };
        fileReader.onerror = (error) => {
          console.log(error);
        };
    }
    const [width, setWidth] = useState(0)
    const handleResize = () => setWidth(window.innerWidth)
    useEffect(() => {
        toUser();
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    const COLUMNSPRODUCT = [
        {
            label: 'Imagen',
            renderCell: (item) => <img style={{width: '105px', maxHeight: '105px'}} src={item?.image} alt='Product Image' />
            ,
        },
        { label: 'Nombre de Producto', renderCell: (item) => <p>{item?.name}</p> },
        
        { label: 'Código de repuesto', renderCell: (item) => <p>{item?.code}</p> },
        
        {
          label: '',
          renderCell: (item) => 
            <IonIcon onClick={() => {
                setRequeriments(requeriments?.filter((obj, indexx) => item?.name !== requeriments[indexx].name))
            }} name="trash-outline" style={{cursor: 'pointer', color: '#E43E1B', fontSize: '1.2rem'}}/>
        
        }
    ];
    const COLUMNSQUOTES = [
        {
            label: 'Imagen',
            renderCell: (item) => <img style={{width: '105px', maxHeight: '105px'}} src={item?.image} alt='Product Image' />
            ,
        },
        { label: 'Nombre de Producto', renderCell: (item) => <p>{item?.product}</p> },
        
        { label: 'Proveedor', renderCell: (item) => <p>{item?.provider}</p> },
        { label: 'Marca', renderCell: (item) => <p>{item?.brand}</p> },
        { label: 'Precio', renderCell: (item) => <p>s/. {item?.price}</p> },
        { label: 'Tiempo de envío', renderCell: (item) => <p> {item?.timeDeliveried}</p>},
        {
          label: '',
          renderCell: (item) => 
            <IonIcon onClick={() => {
                setQuotes(quotes?.filter((obj, indexx) => item?.product !== quotes[indexx].product))
            }} name="trash-outline" style={{cursor: 'pointer', color: '#E43E1B', fontSize: '1.2rem'}}/>
        
        }
    ];
    const themeProducts = useTheme([
        getTheme(),
        {
            Table: `
            --data-table-library_grid-template-columns: 150px 300px 200px 100px !important;
             `,
        },
    ]);
    const themeQuotes = useTheme([
        getTheme(),
        {
            
        },
    ]);
      
    return <>  
        {user === null ? <IonIcon name='chevron-collapse-outline' className="rotateItem" color='#1366D9' style={{fontSize: '1.5rem', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}/> :
        <SideBarComponent user={user} route='quotes' frameContennt={
         <div >
            <p style={{color: 'grey'}}>Editar cotización</p>
            <h1 style={{fontSize: '1.1rem', fontWeight: '500', marginTop: '1rem'}}>Detalle de cotización</h1>
            <div style={{marginTop: '.5rem', display: 'flex', justifyContent: 'space-between'}}>
              <input value={vehicle} onChange={(e) => setVehicle(e.target.value)} placeholder="Vehículo"  className="border-stroke dark:text-body-color-dark dark:shadow-two  w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none" style={{background: 'transparent'}}></input>
              <input value={plate} onChange={(e) => setPlate(e.target.value)} placeholder="Placa" className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border  px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none" style={{background: 'transparent'}}></input>
              <input value={date} onChange={(e) => setDate(e.target.value)} placeholder="Placa" type='datetime-local' className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border  px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none" style={{background: 'transparent'}}></input>

            </div>
            <div style={{display: 'flex', marginTop: '2rem', marginBottom: '1rem'}}>
                <h1 style={{fontSize: '1.1rem', fontWeight: '500'}}>Productos</h1>
                <button className="buttonsWithouthPadding" onClick={() => setOpen(true)} style={{marginLeft: '1rem', fontSize: '.8rem', borderRadius: '.5rem', padding: '.2rem', paddingLeft: '1rem', paddingRight: '1rem', marginRight: '1rem', backgroundColor: 'transparent', color: '#1366D9', border: '1px solid #1366D9'}}>+</button>
                
            </div>
            <div style={{maxWidth: '100%'}}>
                <CompactTable theme={themeProducts} layout={{ custom: true, horizontalScroll: true }}   columns={COLUMNSPRODUCT} data={{nodes: requeriments ?? []}} />
            </div>    
            <div style={{display: 'flex', marginTop: '2rem', marginBottom: '1rem'}}>
                <h1 style={{fontSize: '1.1rem', fontWeight: '500'}}>Cotizaciones</h1>
                <button className="buttonsWithouthPadding" onClick={() => setOpenQuotes(true)} style={{marginLeft: '1rem', fontSize: '.8rem', borderRadius: '.5rem', padding: '.2rem', paddingLeft: '1rem', paddingRight: '1rem', marginRight: '1rem', backgroundColor: 'transparent', color: '#1366D9', border: '1px solid #1366D9'}}>+</button>
                
            </div>
            <div style={{maxWidth: '100%'}}>
                <CompactTable theme={themeQuotes} layout={{ custom: true, horizontalScroll: true }}   columns={COLUMNSQUOTES} data={{nodes: quotes ?? []}} />
            </div>
            <div style={{width: '100%', textAlign: 'center', marginTop: '2rem'}}> 
                <button onClick={() => confirmBuildQuote()} style={{width: 'max-content', background: 'rgb(21, 112, 239)', color: 'white', padding: '.5rem', borderRadius: '.2rem', cursor: 'pointer'}}> Confirmar</button>
                <button onClick={() => buildForm()} style={{marginLeft: '1rem', width: 'max-content', color: 'rgb(21, 112, 239)', background: 'transparent', padding: '.5rem', borderRadius: '.2rem', cursor: 'pointer', border: '1px solid #DEE2E7'}}>Editar Cotización</button>
            </div>
            <Modal closeIcon={<IonIcon name="close"/>} styles={{
              modal : {borderRadius: '1rem', padding: '0rem', maxWidth: width < 921 ? '90%' : '900px'},
              closeIcon: {color: 'white !important'},
              overlay: {backgroundColor: 'rgba(220, 217, 217, 0.5)'}
            }}  open={open} center onClose={() => setOpen(false) }>
              <div style={{padding: '1rem'}}>
                <p style={{color: 'grey'}}>Toca para cambiar la imagen</p>
                <label  htmlFor="imageLogo" style={{cursor: 'pointer'}}>
                    <img style={{width: '150px', height: '150px', borderRadius: '100%', padding: '1rem', marginRight: 'auto', marginLeft: 'auto'}} src={imageLogo !== '' ? imageLogo : productImage.src} alt="Logo"/>
                    <input accept="image" id="imageLogo" onChange={onChangeImageLogo} type='file' placeholder='Subir archivo' style={{
                        visibility: 'hidden', display: 'none'}}/>
                </label>
                <div style={{marginTop: '.5rem', display: 'flex', justifyContent: 'space-between'}}>
                    <input value={nameAdd} onChange={(e) => setName(e.target.value)} placeholder="Nombre de producto"  className="border-stroke dark:text-body-color-dark dark:shadow-two  w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none" style={{background: 'transparent'}}></input>
                    <input value={codeAdd} onChange={(e) => setCode(e.target.value)} placeholder="Codigo de repuesto" className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border  px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none" style={{background: 'transparent'}}></input>
                </div>
                <div style={{width: '100%', textAlign: 'right', marginTop: '2rem'}}> 
                    <div onClick={() => {
                        if(nameAdd !== '' && codeAdd !== ''){
                            const object = {
                                image: imageLogo ?? '',
                                name: nameAdd,
                                code: codeAdd
                            }
                            setRequeriments([...requeriments ?? [], object]);
                            setImageLogo('');
                            setName('');
                            setCode('');
                            setOpen(false);
                        } else NotificationManager.error('Completa el formulario', 'Error');
                        
                    }} style={{color: 'rgb(21, 112, 239)', cursor: 'pointer'}}>Guardar</div>
                </div>
              </div>
          </Modal>
          <Modal closeIcon={<IonIcon name="close"/>} styles={{
              modal : {borderRadius: '1rem', padding: '0rem', maxWidth: width < 921 ? '90%' : '900px'},
              closeIcon: {color: 'white !important'},
              overlay: {backgroundColor: 'rgba(220, 217, 217, 0.5)'}
            }}  open={openQuotes} center onClose={() => setOpenQuotes(false) }>
              <div style={{padding: '1rem'}}>
                <p style={{color: 'grey'}}>Toca para cambiar la imagen</p>
                <label  htmlFor="imageLogo" style={{cursor: 'pointer'}}>
                    <img style={{width: '150px', height: '150px', borderRadius: '100%', padding: '1rem', marginRight: 'auto', marginLeft: 'auto'}} src={imageRequest !== '' ? imageRequest : productImage.src} alt="Logo"/>
                    <input accept="image" id="imageLogo" onChange={onChangeImageQuotes} type='file' placeholder='Subir archivo' style={{
                        visibility: 'hidden', display: 'none'}}/>
                </label>
                <select onChange={(e) => setProduct(e.target.value)}  className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border  px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none" style={{background: 'transparent'}}>
                    <option value=''>{requeriments?.length > 0 ? 'Productos' : 'Todavia no agregaste productos'}</option>
                    {requeriments?.map((e) => <option value={e?.name}>{e?.name}</option>)}
                </select>
                <div style={{marginTop: '.5rem', display: 'flex', justifyContent: 'space-between'}}>
                    <input value={provider} onChange={(e) => setProvider(e.target.value)} placeholder="Proveedor"  className="border-stroke dark:text-body-color-dark dark:shadow-two  w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none" style={{background: 'transparent'}}></input>
                    <input value={brand} onChange={(e) => setBrand(e.target.value)} placeholder="Marca" className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border  px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none" style={{background: 'transparent'}}></input>
                </div>
                <div style={{marginTop: '.5rem', display: 'flex', justifyContent: 'space-between'}}>
                    <input value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Precio"  className="border-stroke dark:text-body-color-dark dark:shadow-two  w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none" style={{background: 'transparent'}}></input>
                    <input value={time} onChange={(e) => setTime(e.target.value)} placeholder="Tiempo de envio" className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border  px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none" style={{background: 'transparent'}}></input>
                </div>
                <div style={{width: '100%', textAlign: 'right', marginTop: '2rem'}}> 
                    <div onClick={() => {
                        if(product !== '' && provider !== '' && brand !== '' && time !== ''){
                            const object = {
                                product,
                                provider,
                                brand,
                                price,
                                timeDeliveried: time,
                                image: imageRequest
                            }
                            setQuotes([...quotes ?? [], object]);
                            setPrice('');
                            setProduct('');
                            setImageRequest('');
                            setTime('');
                            setProvider('');
                            setPrice('');
                            setOpenQuotes(false);
                        } else NotificationManager.error('Completa el formulario', 'Error');
                        
                    }} style={{color: 'rgb(21, 112, 239)', cursor: 'pointer'}}>Guardar</div>
                </div>
              </div>
          </Modal>
         </div>
        }/>
        }
        
        
          
    </>
}
export default EditQuoteLayoutPage;


