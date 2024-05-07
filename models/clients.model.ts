import mongoose, {model, ObjectId, Schema} from "mongoose";

export interface ClientsModel extends Document {
    _id: ObjectId;
    name: string;
    lastname: string;
    phone: string;
    email: string;
    vehicles: string[];
    inspections: string[];
    services: string[];
}

/* PetSchema will correspond to a collection in your MongoDB database. */
const ClientSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please provide a name."],
  },
  lastname: {
    type: String,
    required: [true, "Please provide a lastname."],
  },
  phone: {
    type: String,
    required: [true, "Please provide a phone."],
  },
  email: {
    type: String,
    required: [true, "Please provide a email."],
  },
  vehicles: {
    type: Array,
    required: [false]
  },
  inspections: {
    type: Array,
    required: [false]
  },
  services: {
    type: Array,
    required: [false]
  }
  
});
export default  mongoose.models.Clients || model<ClientsModel>("clients", ClientSchema);
