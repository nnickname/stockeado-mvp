import IonIcon from "@reacticons/ionicons";
import Link from "next/link";
import { FunctionComponent } from "react";

type BackButtonType = {
    route: string;
}
const BackButton: FunctionComponent<BackButtonType> = ({route}) => {
    return <div className="btn-back" style={{backgroundColor: 'white'}}>
        <Link className="flex mr1 mt1 " style={{color: '#3662E3', background: 'white'}} href={route}>
            <IonIcon name="chevron-back-outline" style={{fontSize: '1.1rem', marginTop: '.1rem'}}  className=" mr1"/>
            <span className="">Atras</span>
        </Link>
    </div>
}
export default BackButton;