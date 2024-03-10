import mongoose, {Date, model, ObjectId, Schema} from "mongoose";
import { InventoryModel } from "./inventoryModel";

export const OrderStates: String[] = ['Pendiente', 'Confirmado', 'Enviando', 'Entregado'];

export const getOrderState  = (id: number) => {
  switch ( id ) {
    case 0:
        return 'Pendiente';
        break;
    case 1:
        return 'Confirmado'
        break;
    case 2:
        return 'Enviando'
        break;
    case 3:
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
  items: CartProps[]
}

/* PetSchema will correspond to a collection in your MongoDB database. */
const OrderSchema = new Schema({
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
});
export default  mongoose.models.orders || model<OrderModel>("orders", OrderSchema);
