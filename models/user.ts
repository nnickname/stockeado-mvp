import mongoose from "mongoose";

export interface UserModel extends mongoose.Document {
  name: string;
  password: string;
  email: string
}

/* PetSchema will correspond to a collection in your MongoDB database. */
const UserSchema = new mongoose.Schema<UserModel>({
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

export default mongoose.models.User || mongoose.model<UserModel>("User", UserSchema);