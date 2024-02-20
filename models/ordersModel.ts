import mongoose, {Date, model, ObjectId, Schema} from "mongoose";
import { InventoryModel } from "./inventoryModel";

export const OrderStates = ['Pendiente', 'Confirmado', 'Enviando', 'Entregado'];
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
  maxDate: Date;
  payType: Number;
  state: Number;
  shop_id: string
  items: CartProps[]
}

/* PetSchema will correspond to a collection in your MongoDB database. */
const UserSchema = new Schema({
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
    type: Date,
    required: [true, "Please provide a Date."],
  },
  state: {
    type: Number,
    required: [true, "Please provide a state."],
    maxlength: [60, "Name cannot be more than 60 characters"],
  },
  shop_id: {
    type: String,
    required: [true, "Please provide a shop id."],
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
export default  mongoose.models.Orders || model<OrderModel>("Orders", UserSchema);
