import IonIcon from '@reacticons/ionicons';
import './index.css';

import Image from 'next/image';
const InventoryResume = () => {
    return <div className="content-frame-container resume">
        <div style={{width: '100%', textAlign: 'left'}}>
            <h1>Resumen de Inventario</h1>
            <div className="resumeContainer" style={{display: 'flex'}}>

                <div style={{padding: '1rem', paddingRight: '3rem', borderRight: '1px solid rgba(230, 230, 230, 0.5)'}}>
                    <h1 style={{color: '#1570EF', marginBottom: '.3rem'}}>Marcas</h1>
                    <p>14</p>
                </div>

                <div style={{padding: '1rem', width: '100%', borderRight: '1px solid rgba(230, 230, 230, 0.5)'}}>
                    <h1 style={{color: '#E19133', marginBottom: '.3rem'}}>Total productos</h1>
                    <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '.3rem'}}>
                        <p>1245</p>
                        <p> 425.200</p>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <p style={{color: '#858D9D', fontSize: '.8rem'}}>Productos</p>
                        <p style={{color: '#858D9D', fontSize: '.8rem'}}> Valor en soles</p>
                    </div>
                </div>

                <div style={{padding: '1rem', width: '100%', borderRight: '1px solid rgba(230, 230, 230, 0.5)'}}>
                    <h1 style={{color: '#58D365', marginBottom: '.3rem'}}>Total ventas</h1>
                    <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '.3rem'}}>
                        <p>132</p>
                        <p> 164.000</p>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <p style={{color: '#858D9D', fontSize: '.8rem'}}>Unidades</p>
                        <p style={{color: '#858D9D', fontSize: '.8rem'}}> Valor en soles</p>
                    </div>
                </div>

                <div style={{padding: '1rem', width: '100%'}}>
                    <h1 style={{color: '#F36960', marginBottom: '.3rem'}}>Marcas</h1>
                    <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '.3rem'}}>
                        <p>12</p>
                        <p> 5</p>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <p style={{color: '#858D9D', fontSize: '.8rem'}}>Productos</p>
                        <p style={{color: '#858D9D', fontSize: '.8rem'}}> Sin Stock</p>
                    </div>
                </div>

            </div>
        </div>
        

    </div>
}
export default InventoryResume;