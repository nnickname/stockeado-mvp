import mongoose, {model, ObjectId, Schema} from "mongoose";

export interface UserModel extends Document {
  _id: ObjectId;
  name: string;
  password: string;
  email: string
}

/* PetSchema will correspond to a collection in your MongoDB database. */
const UserSchema = new Schema({
  name: {
    /* The name of this pet */

    type: String,
    required: [true, "Please provide a name."],
    maxlength: [60, "Name cannot be more than 60 characters"],
  },
  email: {
    /* The name of this pet */

    type: String,
    required: [true, "Please provide a email."],
    maxlength: [60, "Email cannot be more than 60 characters"],
  },
  password: {
    /* The owner of this pet */

    type: String,
    required: [true, "Please provide the password owner's name"],
    maxlength: [60, "Password Name cannot be more than 60 characters"],
  },
  
});
export default  mongoose.models.Users || model<UserModel>("Users", UserSchema);
