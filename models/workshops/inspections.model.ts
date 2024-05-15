import mongoose, {model, ObjectId, Schema} from "mongoose";

export interface InspectionsModel extends Document {
    _id: ObjectId,
    owner: string,
    dateStart: string,
    workerAssigned: string,
    client: any,
    vehicle: any,
    orders: string[],
    mileage: string,
    oil: string,
    fuel: string,
    brakes: string,
    refrigerant: string,
    tasks: string[],
    accesories: string[],
    observations: string,
    scannerUri: string,
    extradata: string
}

const InspecionsSchema = new Schema({
  dateStart: {
    type: String,
    required: [true, "Please provide a dateStart."],
  },
  owner: {
    type: String,
    required: [true, 'Please provide a owner']
  },
  workerAssigned: {
    type: String,
    required: [true, "Please provide a workerAssigned."],
  },
  client: {
    type: Object,
    required: [true, "Please provide a client."],
  },
  vehicle: {
    type: Object,
    required: [true, "Please provide a vehicle."],
  },
  orders: {
    type: Array,
  },
  mileage: {
    type: String,
    required: [true, "Please provide a mileage."],
  },
  oil: {
    type: String,
    required: [true, "Please provide a oil."],
  },
  fuel: {
    type: String,
    required: [true, "Please provide a fuel."],
  },
  brakes: {
    type: String,
    required: [true, "Please provide a brakes."],
  },
  refrigerant: {
    type: String,
    required: [true, "Please provide a refrigerant."],
  },
  tasks: {
    type: Object,
  },
  accesories: {
    type: Object,
  },
  observations: {
    type: String,
  },
  scannerUri: {
    type: String,
  },
  extradata: {
    type: String,
  },
  
}, { timestamps: true },);
export default  mongoose.models.inspections || model<InspectionsModel>("inspections", InspecionsSchema);
