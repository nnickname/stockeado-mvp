import mongoose, {model, ObjectId, Schema} from "mongoose";

export interface ImageModel extends Document {
  _id: ObjectId;
  name: string;
  type: string;
  data: string;
  
}
const ImageSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please provide a name."],
  },
  type: {
    type: String,
    required: [true, "Please provide a type."],
  },
  data: {
    type: String,
    required: [true, "Please provide a data."],
  },
  
  
}, {timestamps: true});
export default  mongoose.models.Images || model<ImageModel>("Images", ImageSchema);
