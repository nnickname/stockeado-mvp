'use client';
import IonIcon from "@reacticons/ionicons";
import { useRouter } from "next/navigation";
import { FunctionComponent } from "react";

type BackButtonType = {
    route: string;
}
const BackButton: FunctionComponent<BackButtonType> = ({route}) => {
    const router = useRouter();
    return <div className="btn-back" style={{backgroundColor: 'white'}}>
        <button className="flex mr1 mt1 " style={{color: '#3662E3', background: 'white'}} onClick={() => router.push(route)}>
            <IonIcon name="chevron-back-outline" style={{fontSize: '1rem', marginTop: '0rem', marginRight: '0.5rem'}}  className="alignIcon"/>
            <span className="">Atras</span>
        </button>
    </div>
}
export default BackButton;