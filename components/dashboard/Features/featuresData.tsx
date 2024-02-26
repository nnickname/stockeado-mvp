import { Feature } from "@/types/feature";
import IonIcon from "@reacticons/ionicons";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      <IonIcon size="large" name="gift-outline"/>
    ),
    title: "Recibe sin salir del taller",
    paragraph:"Nos encargamos de llevar lo que hayas pedido para poder ahorrarte tiempo."  },
  {
    id: 1,
    icon: (
      <IonIcon size="large" name="timer-outline"/>
    ),
    title: "Ahorra tiempo",
    paragraph:
      "No busques en múltiples lugares, ni hables con muchos proveedores al mismo tiempo.",
  },
  {
    id: 1,
    icon: (
      <IonIcon size="large" name="bar-chart-outline"/>
    ),
    title: "Historial de compras",
    paragraph:
      "Lleva un registro de tus compras y gestiona tu presupuesto con estadísticas actualizadas.",
  },
 
];
export default featuresData;
