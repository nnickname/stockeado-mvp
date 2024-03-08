'use client';
import Image from 'next/image';
import ProductImage from '../../../public/images/logo/productImage.png';
import './index.css';
import { Popover } from 'react-tiny-popover';
import { FunctionComponent, useState } from 'react';
import IonIcon from '@reacticons/ionicons';
import { InventoryModel } from '@/models/inventoryModel';
import { TypeBrands, TypeCategories, TypeOfPiece } from '@/models/brands';
import { CartProps } from '@/models/ordersModel';
import Cookie from 'universal-cookie';
import { setCartCookies } from '@/app/api/inventory/call';
import { useRouter } from 'next/navigation';

type CardProps = {
    item: InventoryModel,
    setCart: any,
    setAmmountItem: any,
    ammountItem: number,
    cart: CartProps[]
}

const CardMarketPlace: FunctionComponent<CardProps> = ({item,setCart, setAmmountItem, ammountItem, cart}) => {
    const [isPopoverOpen, setIsPopoverOpen] = useState<boolean>(false);
    const router = useRouter();
    return <div  className="cardMarketPlace">
        <div className="contentImage">
            <img  style={{cursor: 'pointer', maxHeight: '200px'}} onClick={() => router.push('/marketplace/item?id=' + item._id)} src={item?.image} alt="Item Image"/>
        </div>
        <div  className="card-content">
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <div>
                <span style={{fontSize: '1rem', color: '#3e9c35'}}> s/. {item?.priceSelling ?? 0}</span>

                    <p style={{cursor: 'pointer'}} onClick={() => router.push('/marketplace/item?id=' + item._id)} >{item?.name + ' '}  {item?.model ?? '' }</p>
                </div>
                <div>
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
                        <input value={ammountItem} onChange={(e) => setAmmountItem(Number(e?.target?.value))} min='0' max={item?.ammount} style={{padding: '.5rem', border: '1px solid rgba(0,0,0, 0.1)', width: '100%'}} type='number' placeholder='Cantidad'/>
                        <br/>
                        <button onClick={() => {
                            if(ammountItem > 0 ){
                                const cartCast = [...cart, {
                                    item: item ?? {},
                                    ammount: ammountItem
                                }];
                                setCart(cartCast);
                                sessionStorage.setItem("cart", String(JSON.stringify(cartCast)));
                                setIsPopoverOpen(false);
                            }
                        }} style={{marginTop: '1rem', padding: '.5rem', textAlign: 'center', width: '100%', background: 'green', color: 'white'}}>Añadir al carrito</button>

                    </div>
                }
                    >
                    <div style={{padding: '.3rem', borderRadius: '.5rem', color: '#3662E3', fontSize: '1rem', cursor: 'pointer', border: '1px solid rgba(0, 0, 0, 0.1)'}} onClick={() => {
                        setIsPopoverOpen(!isPopoverOpen),
                        setAmmountItem(0)
                        }}>
                        <IonIcon style={{fontSize: '1.5rem'}} name="cart-outline"/>
                    </div>
                </Popover>
                </div>
            </div>
        </div>
    </div>
}
export default CardMarketPlace;