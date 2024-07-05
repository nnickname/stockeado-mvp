"use client";
import { useState } from "react";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(false);

  return (
    <section id="pricing" className="relative z-10 py-8 md:py-10 lg:py-12">
      <div className="container">
        

        <div className="w-full">
          <div
            className="wow fadeInUp mb-8 flex justify-center md:mb-6 lg:mb-6"
            data-wow-delay=".1s"
          >
            <span
              onClick={() => setIsMonthly(true)}
              className={`${
                isMonthly
                  ? "pointer-events-none textPrimary"
                  : "text-dark dark:text-white"
              } mr-4 cursor-pointer text-base font-semibold`}
            >
              Mensual
            </span>
            <div
              onClick={() => setIsMonthly(!isMonthly)}
              className="flex cursor-pointer items-center"
            >
              <div className="relative">
                <div className="h-5 w-14 rounded-full bg-[rgb(197, 197, 202)] shadow-inner"></div>
                <div
                  className={`${
                    isMonthly ? "" : "translate-x-full"
                  } shadow-switch-1 absolute left-0 top-[-4px] flex h-7 w-7 items-center justify-center rounded-full colorPrimary transition`}
                >
                  <span className="active h-4 w-4 rounded-full bg-white"></span>
                </div>
              </div>
            </div>
            <span
              onClick={() => setIsMonthly(false)}
              className={`${
                isMonthly
                  ? "text-dark dark:text-white"
                  : "pointer-events-none textPrimary"
              } ml-4 cursor-pointer text-base font-semibold`}
            >
              Anual{'(Recomendado)'}
            </span>
          </div>
        </div>

        <div className="flex displayBlockResponsive" style={{justifyContent: 'center'}}>
          <PricingBox
            packageName="Full"
            price={isMonthly ? "112" : "1120"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="Recomendado para pequeños/medianos Workshops"
          >
            <OfferList text="Acceso completo" status="active" />
            <OfferList text="Inspecciones" status="active" />
            <OfferList text="Órdenes de servicio" status="active" />
            <OfferList text="Vehiculos" status="active" />
            <OfferList text="Clientes" status="active" />
            <OfferList text="Usuarios" status="active" />
            <OfferList text="Calendario" status="active" />
            <OfferList text="Datos mensuales" status="active" />
            <OfferList text="Soporte" status="active" />
            <OfferList text="3 usuarios" status="inactive" />
            <OfferList text="Cambios en la aplicación" status="inactive" />
          </PricingBox>
          
          <PricingBox
            packageName="Costumizado"
            price={isMonthly ? "0" : "0"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="Recomendado para Workshops con mayor volumen"
          >
            <OfferList text="Acceso completo" status="active" />
            <OfferList text="Inspecciones" status="active" />
            <OfferList text="Órdenes de servicio" status="active" />
            <OfferList text="Vehiculos" status="active" />
            <OfferList text="Clientes" status="active" />
            <OfferList text="Usuarios" status="active" />
            <OfferList text="Calendario" status="active" />
            <OfferList text="Inventario" status="active" />
            <OfferList text="Marketplace" status="active" />
            <OfferList text="Datos mensuales" status="active" />
            <OfferList text="Soporte" status="active" />
            <OfferList text="Usuarios ilimitados" status="active" />
            <OfferList text="Cambios en la aplicación" status="active" />
          </PricingBox>
        </div>
      </div>

      
    </section>
  );
};

export default Pricing;
