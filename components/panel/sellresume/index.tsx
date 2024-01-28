import IonIcon from '@reacticons/ionicons';
import './index.css';
import Icon1 from '../../../public/images/logo/icon1.png';
import Icon2 from '../../../public/images/logo/icon2.png';
import Icon3 from '../../../public/images/logo/icon3.png';
import Icon4 from '../../../public/images/logo/icon4.png';
import Image from 'next/image';
const SellResume = () => {
    return <div className="content-frame-container resume">
        <div style={{width: '100%', textAlign: 'left'}}>
            <h1>Resumen de Ventas</h1>
        </div>
        <div className="resumeContainer">
            <div style={{textAlign: 'center', width: '100%', borderRight: '1px solid rgba(230, 230, 230, 0.5)'}}>
                <div className="centerIcon" >
                    <div style={{backgroundColor: '#E8F1FD', borderRadius: '.5rem', padding: '.2rem', width: 'max-content'}}>
                        <Image src={Icon1} alt={''}/>
                    </div>
                </div>
                <div style={{display: 'inline-block'}}>
                    <p style={{display: 'inline-block'}} >832</p>
                    <p style={{marginLeft: '1.5rem', color: 'grey', display:'inline-block'}}>Ventas</p>
                </div>
            </div>

            <div style={{textAlign: 'center', width: '100%', borderRight: '1px solid rgba(230, 230, 230, 0.5)'}}>
                <div className="centerIcon" >

                    <div style={{backgroundColor: '#ECEAFF', borderRadius: '.5rem', padding: '.2rem', width: 'max-content',}}>
                        <Image src={Icon2} alt={''} />
                    </div>
                </div>
                <div style={{display: 'inline-block'}}>
                    <p style={{display: 'inline-block'}} >s/. 16,023</p>
                    <p style={{marginLeft: '1.5rem', color: 'grey', display:'inline-block'}}>Ingresos</p>
                </div>
            </div>

            <div style={{textAlign: 'center', width: '100%', borderRight: '1px solid rgba(230, 230, 230, 0.5)'}}>
                <div className="centerIcon" >
                    <div style={{backgroundColor: '#FFEEDB', borderRadius: '.5rem', padding: '.2rem', width: 'max-content',}}>
                        <Image src={Icon3} alt={''} />
                    </div>
                </div>
                <div style={{display: 'inline-block'}}>
                    <p style={{display: 'inline-block'}} >s/. 2,341</p>
                    <p style={{marginLeft: '1.5rem', color: 'grey', display:'inline-block'}}>Beneficio</p>
                </div>
            </div>

            <div style={{textAlign: 'center', width: '100%'}}>
                <div className="centerIcon" >
                    <div style={{backgroundColor: '#EBFFED', borderRadius: '.5rem', padding: '.2rem', width: 'max-content',}}>
                        <Image src={Icon4} alt={''} />
                    </div>
                </div>
                <div style={{display: 'inline-block'}}>
                    <p style={{display: 'inline-block'}} >75,10%</p>
                    <p style={{marginLeft: '1.5rem', color: 'grey', display:'inline-block'}}>Margen</p>
                </div>
            </div>


            
        </div>

    </div>
}
export default SellResume