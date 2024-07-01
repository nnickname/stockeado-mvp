"use client";
import IonIcon from "@reacticons/ionicons";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer
        className="wow fadeInUp dark:bg-gray-dark relative z-10 bg-white pt-16 md:pt-20 lg:pt-24"
        data-wow-delay=".1s"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-5/12">
              <div className="mb-12 max-w-[360px] lg:mb-16">
                <Link href="/" className="mb-8 inline-block">
                  <Image
                    src="/images/logo/logopreferente.png"
                    alt="logo"
                    className="w-full dark:hidden"
                    width={140}
                    height={30}
                    style={{transform: 'translateX(-15%)'}}
                  />
                  <Image
                    src="/images/logo/logopreferente.png"
                    alt="logo"
                    className="hidden w-full dark:block"
                    width={140}
                    height={30}
                  />
                </Link>
                
                <div className="flex items-center">
                  <a
                      target="_blank"
                      href="https://www.linkedin.com/company/stockeado/"
                      className="dark:text-body-color-dark mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:hover:text-primary"
                    >
                      <IonIcon style={{color: 'grey', fontSize: '1.5rem', margin: '1rem', cursor: 'pointer'}} name="logo-linkedin"/>
                    </a>
                    <a
                      target="_blank"
                      href="https://www.instagram.com/stockeado_/"
                      className="dark:text-body-color-dark mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:hover:text-primary"
                    >
                      <IonIcon style={{color: 'grey', fontSize: '1.5rem', margin: '1rem', cursor: 'pointer'}} name="logo-instagram"/>
                    </a>

                </div>
              </div>
            </div>

            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                  Links
                </h2>
                <ul>
                  <li>
                    <a
                      href="/workshops"
                      className="dark:text-body-color-dark mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:hover:text-primary"
                    >
                      Crear cuenta como taller
                    </a>
                  </li>
                  <li>
                    <a
                      href="/providers"
                      className="dark:text-body-color-dark mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:hover:text-primary"
                    >
                      Crear cuenta como proveedor
                    </a>
                  </li>
                  <li>
                    <a
                      href="/signin"
                      className="dark:text-body-color-dark mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:hover:text-primary"
                    >
                      Ingresar
                    </a>
                  </li>
                  <li>
                    <a
                      href="/marketplace"
                      className="dark:text-body-color-dark mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:hover:text-primary"
                    >
                      Marketplace
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                  Terms
                </h2>
                <ul>
                  
                  <li>
                    <a
                      href="/privacy"
                      className="dark:text-body-color-dark mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:hover:text-primary"
                    >
                      Política de Privacidad
                    </a>
                  </li>
                  <li>
                    <a
                      href="/terms"
                      className="dark:text-body-color-dark mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:hover:text-primary"
                    >
                      Términos y condiciones
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-3/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                  Soporte
                </h2>
                <ul>
                  <li>
                    <a
                    target="_blank"
                      href="https://api.whatsapp.com/send?phone=+51941531016&text=¿En que podemos ayudarte?"
                      className="dark:text-body-color-dark mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:hover:text-primary"
                    >
                      WhatsApp
                    </a>
                  </li>
                  
                </ul>
              </div>
            </div>
          </div>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]"></div>
          <div className="py-8">
            <p className="text-center text-base text-body-color dark:text-white">
                Desarrollado por @Stockeado{" "}
              
            </p>
          </div>
        </div>
        
      </footer>
    </>
  );
};

export default Footer;

