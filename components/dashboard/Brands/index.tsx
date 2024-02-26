import { Brand } from "@/types/brand";
import Image from "next/image";
import brandsData from "./brandsData";


import audiLogo from '@/public/images/logo/audi.png';
import bmwLogo from '@/public/images/logo/jeep.png';
import geelyLogo from '@/public/images/logo/geely.png';
import hyundaiLogo from '@/public/images/logo/hyundai.png';
import peugeotLogo from '@/public/images/logo/peugeot.png';
import seatLogo from '@/public/images/logo/seat.png';

const Brands = () => {
  return (
    <section className="pt-16">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4" style={{textAlign: 'center'}}>
            <h1 style={{fontSize: '1rem', fontWeight: '300'}} className="mb-5 text-5xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-6xl md:leading-tight">
                  Encuentra repuestos de mas de 30 marcas
            </h1>
            <div
              className="wow fadeInUp bg-gray-light dark:bg-gray-dark flex flex-wrap items-center justify-center rounded-sm px-8 py-8 sm:px-10 md:px-[50px] md:py-[40px] xl:p-[50px] 2xl:px-[70px] 2xl:py-[60px]"
              data-wow-delay=".1s"
              style={{justifyContent: 'space-between'}}
            >
              <img style={{maxWidth: '100px'}} src={audiLogo.src}/>
              <img style={{maxWidth: '100px'}} src={bmwLogo.src}/>
              <img style={{maxWidth: '100px'}} src={geelyLogo.src}/>
              <img style={{maxWidth: '100px'}} src={hyundaiLogo.src}/>
              <img style={{maxWidth: '100px'}} src={seatLogo.src}/>
              <img style={{maxWidth: '100px'}} src={peugeotLogo.src}/>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
