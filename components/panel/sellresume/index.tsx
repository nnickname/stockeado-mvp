import IonIcon from '@reacticons/ionicons';
import './index.css';
import Icon1 from '../../../public/images/logo/icon1.png';
import Icon2 from '../../../public/images/logo/icon2.png';
import Icon3 from '../../../public/images/logo/icon3.png';
import Icon4 from '../../../public/images/logo/icon4.png';
import Image from 'next/image';
import { OrderModel } from '@/models/orders.model';
import { FunctionComponent } from 'react';
import { UserModel } from '@/models/user.model';
export const getTotalSellings = (orders: OrderModel[]) => {
    var counter=0;
    orders?.map((e) => {
        if(Number(e?.state) > 3) counter++;
    })
    return counter;
}
const getTotalEarning = (orders: OrderModel[], id: String) => {
    var count = 0;
    orders?.map((e) => {
        if(Number(e?.state) > 3)
        e?.items?.map((a) => {
            if(String(a.item.owner_id) === id) count = count + (Number(a.item?.priceSelling) * a.ammount);
        })
    })
    return count.toFixed(2);
}
const getBenefitEarning = (orders: OrderModel[], id: String) => {
    var count = 0;
    orders?.map((e) => {
        if(Number(e?.state) > 3)
        e?.items?.map((a) => {
            if(String(a.item.owner_id) === id) count = count + (Number(a.item?.price) * a.ammount);
        })
    })
    return count.toFixed(2);
}
const calculatePercentage = (x: number, y: number) => {
    const ammount = ((y / x) * 100);
    if(Number.isNaN(ammount)){
        return 0;
    }
    return ammount.toFixed(1);
}
type SellResumeType = {
    orders: OrderModel[],
    user: UserModel
}
const SellResume: FunctionComponent<SellResumeType> = ({orders, user}) => {
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
                    <p style={{display: 'inline-block'}} >{getTotalSellings(orders)}</p>
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
                    <p style={{display: 'inline-block'}} >s/. {getTotalEarning(orders, String(user?._id))}</p>
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
                    <p style={{display: 'inline-block'}} >s/. {getBenefitEarning(orders, String(user?._id)) ?? 0}</p>
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
                    <p style={{display: 'inline-block'}} >{calculatePercentage(Number(getTotalEarning(orders, String(user?._id))), Number(getBenefitEarning(orders, String(user?._id)))) ?? '0'}%</p>
                    <p style={{marginLeft: '1.5rem', color: 'grey', display:'inline-block'}}>Margen</p>
                </div>
            </div>


            
        </div>

    </div>
}
export default SellResume