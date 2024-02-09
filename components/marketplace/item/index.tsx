
import Image from 'next/image';
import ProductImage from '../../../public/images/logo/productImage.png';
import './index.css';
import { Popover } from 'react-tiny-popover';
import { useState } from 'react';
import IonIcon from '@reacticons/ionicons';
const CardMarketPlace = () => {
    const [isPopoverOpen, setIsPopoverOpen] = useState<boolean>(false);
    return <div  className="cardMarketPlace">
        <div className="contentImage">
            <Image  src={ProductImage} alt="Item Image"/>
        </div>
        <div  className="card-content">
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <div>
                    <p>s/. 1130.00</p>
                    <span style={{fontSize: '.8rem', textDecoration: 'line-through', color: 'grey'}}> s/. 1340.00</span>
                </div>
                <Popover
                    containerStyle={{
                        backgroundColor: 'white',
                        padding: '1rem',
                        border: '1px solid rgba(0, 0, 0, 0.2)',
                        borderRadius: '.5rem'
                    }}
                    isOpen={isPopoverOpen}
                    positions={['top', 'bottom', 'left', 'right']} // preferred positions by priority
                    content={
                    <div>
                        <input min='0' style={{padding: '.5rem', border: '1px solid rgba(0,0,0, 0.1)'}} type='number' placeholder='Cantidad'/>
                        <br/>
                        <button style={{marginTop: '1rem', padding: '.5rem', textAlign: 'center', width: '100%', background: 'green', color: 'white'}}>Añadir al carrito</button>

                    </div>
                }
                    >
                    <div style={{padding: '.3rem', borderRadius: '.5rem', color: '#3662E3', fontSize: '1rem', cursor: 'pointer', border: '1px solid rgba(0, 0, 0, 0.1)'}} onClick={() => setIsPopoverOpen(!isPopoverOpen)}>
                        <IonIcon style={{fontSize: '1.5rem'}} name="cart-outline"/>
                    </div>
                </Popover>
            </div>
            <div style={{display: 'flex', marginTop: '.5rem'}}>
            <IonIcon name="star" style={{color: '#FF9017', fontSize: '1.2rem', marginRight: '.2rem'}}/>
            <IonIcon name="star" style={{color: '#FF9017', fontSize: '1.2rem', marginRight: '.2rem'}}/>
            <IonIcon name="star" style={{color: '#FF9017', fontSize: '1.2rem', marginRight: '.2rem'}}/>

            <IonIcon name="star" style={{color: '#FF9017', fontSize: '1.2rem', marginRight: '.2rem'}}/>

            <IonIcon name="star" style={{color: 'grey', fontSize: '1.2rem', marginRight: '.2rem'}}/>

            
            </div>
            <span style={{fontSize: '.8rem', color: 'grey'}}> Cojinete metal de goma - Audi A7 - Original</span>

        </div>
    </div>
}
export default CardMarketPlace;