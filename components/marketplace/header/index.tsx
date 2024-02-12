"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import './index.css';
import IonIcon from "@reacticons/ionicons";
import { Popover } from "react-tiny-popover";
import productImage from '../../../public/images/logo/productImage.png';
const HeaderMarketPlace = () => {
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };
  const [isPopoverOpen, setIsPopoverOpen] = useState<boolean>(false);

  const usePathName = usePathname();

  return (
    <>
      <header
        style={{zIndex: 55}}
        className={`header left-0 top-0 flex w-full items-center ${
          sticky
            ? "dark:bg-gray-dark dark:shadow-sticky-dark fixed z-[9999] bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm transition"
            : "absolute bg-transparent"
        }`}
      >
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className=" px-4 xl:mr-12">
              <Link
                href="/"
                className={`header-logo block w-full ${
                  sticky ? "py-5 lg:py-2" : "py-8"
                } `}
              >
                <Image
                  src="/images/logo/color.png"
                  alt="logo"
                  width={140}
                  height={30}
                  className="w-full dark:hidden"
                />
                <Image
                  src="/images/logo/white.png"
                  alt="logo"
                  width={140}
                  height={30}
                  className="hidden w-full dark:block"
                />
              </Link>
            </div>
            <div className="input-search">
                <IonIcon name="search-outline" className="iconinput"/>
                <input placeholder="Busca por SKU, nombre de producto, marcas y tiendas" type='text'/>
                <button >
                    Buscar
                </button>


            </div>
            <Popover
            children={<div></div>}
                    containerStyle={{
                        minWidth: '350px',
                        backgroundColor: 'white',
                        padding: '1rem',
                        border: '1px solid rgba(0, 0, 0, 0.2)',
                        borderRadius: '0rem 0rem .5rem .5rem'
                    }}
                    isOpen={isPopoverOpen}
                    positions={['bottom', 'left', 'right', 'top']} // preferred positions by priority
                    content={
                    <div>


                    <div>
                        <div style={{display: 'flex', justifyContent: 'space-between', paddingBottom: '1rem'}}>
                        <p className="dark:text-body-color-dark mb-1 text-base !leading-relaxed text-body-color sm:text-sm md:text-sm" >
                          Imagen</p>
                          <p className="dark:text-body-color-dark mb-1 text-base !leading-relaxed text-body-color sm:text-sm md:text-sm" >
                          Nombre</p>
                          <p className="dark:text-body-color-dark mb-1 text-base !leading-relaxed text-body-color sm:text-sm md:text-sm" >
                          Cantidad</p>
                          <p className="dark:text-body-color-dark mb-1 text-base !leading-relaxed text-body-color sm:text-sm md:text-sm" >
                          Precio</p>
                          <p className="dark:text-body-color-dark mb-1 text-base !leading-relaxed text-body-color sm:text-sm md:text-sm" >
                          Action</p>
                          
                        </div>

                        <div style={{display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(220, 220, 220, .3)'}}>
                          <Image style={{width: '35px', height: '35px'}} src={productImage} alt='Product Image' />
                          <p style={{maxWidth: '100px'}} className="dark:text-body-color-dark mb-1 text-base !leading-relaxed text-body-color sm:text-sm md:text-sm" >
                          Cojinete metal de goma</p>
                          <p className="dark:text-body-color-dark mb-1 text-base !leading-relaxed text-body-color sm:text-sm md:text-sm" >
                          6</p>
                          <p className="dark:text-body-color-dark mb-1 text-base !leading-relaxed text-body-color sm:text-sm md:text-sm" >
                          s/. 1.320</p>
                          <button style={{color: '#ff6347'}}><IonIcon name="trash-outline" color='#ff6347'/></button>
                        </div>


                        
                      </div>
                      <div style={{marginTop: '1rem', display: 'flex', justifyContent: 'space-between'}}>
                        <p style={{fontSize: '1.1rem'}}>Total</p>
                        <p>s/. 10.030.00</p>
                      </div>
                      <button style={{padding: '.5rem', textAlign: 'center', width:'100%', background: 'linear-gradient(180deg, #127FFF 0%, #3662E3 100%)', color: 'white'}}>Ir a pagar</button>
                    </div>
                }
                    >
                    <div className="cart" onClick={() => setIsPopoverOpen(!isPopoverOpen)}>
                        <IonIcon name="cart-outline"/>
                        <p>Mi Carrito{' (7)'}</p>
                    </div>
              </Popover>
            
            
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderMarketPlace;