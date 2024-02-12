'use client';
import BackgroundImage from "@/components/marketplace/background/background";
import HeaderMarketPlace from "@/components/marketplace/header";
import CardMarketPlace from "@/components/marketplace/item";
import { TypeCategories, TypeOfPiece, TypeBrands } from "@/models/brands";
import type { NextPage } from "next";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import MpLogo1 from '../../../public/images/logo/mplogo1.png';
import MpLogo2 from '../../../public/images/logo/mplogo2.png';
import MpLogo3 from '../../../public/images/logo/mplogo3.png';
import MpLogo4 from '../../../public/images/logo/mplogo4.png';
import '../index.css';
const MarketPlaceURLPage: NextPage = () => {
    const searchParams = useSearchParams()
    const search = searchParams.get('id')
    console.log(search);
    return <>
    <HeaderMarketPlace/>
    <BackgroundImage/>
    <div className="marketplace">


      <div className="sidebarM">
        <h1>Categorias</h1>
        {TypeCategories.map((e, index) => {
          return <div key={index} style={{display: 'flex', marginTop: '.4rem'}}>
            <input type='checkbox' style={{marginRight: '.5rem'}}/>
            <p>{e}</p>
            
          </div>
        })}
        <div style={{marginTop:'.5rem', marginBottom: '.5rem', width: '100%', height: '1px', background: 'rgba(0,0,0, 0.2)'}}></div>

        <h1>Tipo de pieza</h1>
        {TypeOfPiece.map((e, index) => {
          return <div key={index} style={{display: 'flex', marginTop: '.4rem'}}>
            <input type='checkbox' style={{marginRight: '.5rem'}}/>
            <p>{e}</p>
            
          </div>
        })}

        <div style={{marginTop:'.5rem', marginBottom: '.5rem', width: '100%', height: '1px', background: 'rgba(0,0,0, 0.2)'}}></div>
      
        <h1>Marcas</h1>
        {TypeBrands.map((e, index) => {
          return <div key={index} style={{display: 'flex', marginTop: '.4rem'}}>
            <input type='checkbox' style={{marginRight: '.5rem'}}/>
            <p>{e}</p>
            
          </div>
        })}
      
      </div>


      <div className="contentM">
        <p> Tiendas mas visitadas</p>
        <div  style={{marginTop: '3rem' ,display: 'flex', justifyContent: 'space-between'}}>

          <div className="brands">
            <Image src={MpLogo1} alt=""/>
          </div>
          <div className="brands">
            <Image src={MpLogo2} alt=""/>
          </div>
          <div className="brands">
            <Image src={MpLogo3} alt=""/>
          </div>
          <div className="brands">
            <Image src={MpLogo4} alt=""/>
          </div>
          <div className="brands">
            <Image src={MpLogo4} alt=""/>
          </div>
        </div>
        <div style={{marginTop: '3rem', padding: '.6rem', width: '100%', borderRadius: '.5rem', border: '1px solid rgba(0, 0, 0, 0.2)'}}>
          <p>Se encontraron <span style={{fontWeight: '700'}}>180 productos</span></p>
        </div>
        <div className="gridItems">
          <CardMarketPlace/>
          <CardMarketPlace/>
          <CardMarketPlace/>
          <CardMarketPlace/>
          <CardMarketPlace/>
          <CardMarketPlace/>
          <CardMarketPlace/>

        </div>
      </div>
    </div>
  </>
}
export default MarketPlaceURLPage;