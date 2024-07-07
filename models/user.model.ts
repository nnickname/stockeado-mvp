import mongoose, {model, ObjectId, Schema} from "mongoose";

export interface UserModel extends Document {
  _id: ObjectId;
  name: string;
  lastname: string;
  nameShop: string;
  phone: string;
  image: string;
  imageLogo: string;
  direction: string;
  password: string;
  email: string;
  visits: number;
  type: string;
  ruc: string;
  accesories: string[],
  services: any[],
  role: string;
  owner: string;
  footerpdf: string;
  createdAt: string;
}

/* PetSchema will correspond to a collection in your MongoDB database. */
const UserSchema = new Schema({
  name: {
    /* The name of this pet */

    type: String,
    required: [true, "Please provide a name."],
  },
  lastname: {
    /* The name of this pet */

    type: String,
  },
  nameShop: {
    /* The name of this pet */

    type: String,
    required: [true, "Please provide a nameShop."],
  },
  phone: {
    type: String,
    
  },
  direction: {
    type: String,
  },
  email: {
    type: String,
    required: [true, "Please provide a email."],
    maxlength: [60, "Email cannot be more than 60 characters"],
  },
  password: {
    type: String,
    required: [true, "Please provide the password owner's name"],
    maxlength: [60, "Password Name cannot be more than 60 characters"],
  },
  visits: {
    type: Number,
    required: [true, "Please provide the Number"],
  },
  image: {
    type: String,
  },
  imageLogo: {
    type: String,
  },
  type: {
    type: String,
    requried: [true, 'Please provide a type']
  },
  owner: {
    type: String
  },
  role: {
    type: String
  },
  accesories: {
    type: Array
  },
  services: {
    type: Array
  },
  ruc: {
    type: String
  },
  footerpdf: {
    type: String
  }
}, {timestamps: true});
export default  mongoose.models.Users || model<UserModel>("Users", UserSchema);
