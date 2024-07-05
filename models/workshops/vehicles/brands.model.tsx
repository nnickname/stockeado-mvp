import mongoose, {model, ObjectId, Schema} from "mongoose";

export interface VehiclesBrandModel extends Document {
    _id: ObjectId;
    brand: string;
    models: any[];
    
    createdAt: string;
    updatedAt: string;
    createdBy: string;
}

const VehiclesBrandSchema = new Schema({
  brand: {
    type: String,
    required: [true, "Please provide a brand."],
  },
  models: {
    type: Array
  },
  createdBy: {
    type: String
  },
  
  
}, { timestamps: true },);
export default  mongoose.models.vehiclesbrands || model<VehiclesBrandModel>("vehiclesbrands", VehiclesBrandSchema);
