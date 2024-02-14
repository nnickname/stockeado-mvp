import mongoose, {model, ObjectId, Schema} from "mongoose";

export interface UserModel extends Document {
  _id: ObjectId;
  name: string;
  lastname: string;
  nameShop: string;
  phone: string;
  image: string;
  direction: string;
  password: string;
  email: string;
  visits: number;
}

/* PetSchema will correspond to a collection in your MongoDB database. */
const UserSchema = new Schema({
  name: {
    /* The name of this pet */

    type: String,
    required: [true, "Please provide a name."],
    maxlength: [60, "Name cannot be more than 60 characters"],
  },
  lastname: {
    /* The name of this pet */

    type: String,
    required: [true, "Please provide a lastname."],
    maxlength: [60, "Name cannot be more than 60 characters"],
  },
  nameShop: {
    /* The name of this pet */

    type: String,
    required: [true, "Please provide a nameShop."],
    maxlength: [60, "Name cannot be more than 60 characters"],
  },
  phone: {
    type: String,
    required: [true, "Please provide a Phone."],
    maxlength: [60, "Name cannot be more than 60 characters"],
  },
  direction: {
    type: String,
    required: [true, "Please provide a direction."],
    maxlength: [60, "Name cannot be more than 60 characters"],
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
    required: [true, "Please provide the image"],
  },
});
export default  mongoose.models.Users || model<UserModel>("Users", UserSchema);
