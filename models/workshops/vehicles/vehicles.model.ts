import mongoose, {model, ObjectId, Schema} from "mongoose";

export interface VehiclesModel extends Document {
    _id: ObjectId;
    brand: string;
    model: string;
    owner: string;
    year: string;
    plate: string;
    vin: string;
    createdAt: string;
    updatedAt: string;
    createdBy: string;
    updatedBy: string;
}

const VehiclesSchema = new Schema({
  brand: {
    type: String,
    required: [true, "Please provide a brand."],
  },
  model: {
    type: String,
    required: [true, "Please provide a model."],
  },
  owner: {
    type: String,
    required: [true, 'Please provide a owner']
  },
  year: {
    type: String,
    required: [true, "Please provide a year."],
  },
  plate: {
    type: String,
    required: [true, "Please provide a plate."],
  },
  vin: {
    type: String,
    required: [true, "Please provide a vin."],
  },
  createdBy: {
    type: String
  },
  updatedBy: {
    type: String
  }
  
}, { timestamps: true },);
export default  mongoose.models.vehicles || model<VehiclesModel>("vehicles", VehiclesSchema);
