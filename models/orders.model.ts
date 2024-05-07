import mongoose, {Date, model, ObjectId, Schema} from "mongoose";
import { InventoryModel } from "./inventory.model";

export const OrderStates: String[] = ['Pendiente', 'Confirmado', 'Pagado', 'Enviando', 'Entregado'];

export const getOrderState  = (id: number) => {
  switch ( id ) {
    case 0:
        return 'Pendiente';
        break;
    case 1:
        return 'Confirmado'
        break;
    case 2:
        return 'Pagado'
        break;
    case 3:
        return 'Enviando'
        break;
    case 4:
      return 'Entregado'
      break;
    default: 
        return 'Pendiente'
        break;
 }
}
export type CartProps = {
    item: InventoryModel,
    ammount: number
}
export interface OrderModel extends Document {
  id: string;
  _id: ObjectId;
  name: string;
  lastname: string;
  direction: string;
  maxDate: string;
  payType: Number;
  state: Number;
  nameShop: string;
  ruc: string;
  phone: string;
  items: CartProps[];
  sendPricing: string;
  sendDate: string;
  email: string;
  note: string;
}

/* PetSchema will correspond to a collection in your MongoDB database. */
const OrderSchema = new Schema({
  nameShop: {
    type: String,
    required: [true],
  },
  ruc: {
    type: String,
    required: [true],
  },
  phone: {
    type: String,
    required: [true],
  },
  name: {
    type: String,
    required: [true, "Please provide a name."],
    maxlength: [60, "Name cannot be more than 60 characters"],
  },
  lastname: {
    type: String,
    required: [true, "Please provide a lastname."],
    maxlength: [60, "Name cannot be more than 60 characters"],
  },
  direction: {
    type: String,
    required: [true, "Please provide a direction."],
    maxlength: [60, "Name cannot be more than 60 characters"],
  },
  maxDate: {
    type: String,
    required: [true, "Please provide a Date."],
  },
  state: {
    type: Number,
    required: [true, "Please provide a state."],
    maxlength: [60, "Name cannot be more than 60 characters"],
  },
  
  items: {
    type: Object,
    required: [true, "Please provide a items."],
  },
  payType: {
    type: Number,
    required: [true, "Please provide a pay type."],
  },
  sendPricing: {
    type: String,
    required: [true, "Please provide a Send Pricing."],
  },
  sendDate: {
    type: String,
    required: [true, "Please provide a Date."],
  },
  email: {
    type: String,
    required: [true, "Please provide a email."],
  },
  note: {
    type: String,
    required: [true, "Please provide a note"]
  }
});

export default  mongoose.models.orders || model<OrderModel>("orders", OrderSchema);
