import mongoose, { ObjectId } from "mongoose";

type Sellings = {
    ammount: string,
    price: string,
    order_id: ObjectId
}
export interface UserModel extends mongoose.Document {
  name: string;
  price: string;
  stars: string;
  owner_id: ObjectId;
  type: number;
  categorie: number;
  sellings: Sellings;
  sku: string;
  ammount: number;
}

/* PetSchema will correspond to a collection in your MongoDB database. */
const UserSchema = new mongoose.Schema<UserModel>({
  name: {
    /* The name of this pet */

    type: String,
    required: [true, "Please provide a name."],
    maxlength: [60, "Name cannot be more than 60 characters"],
  },
  
  
});

export default mongoose.models.User || mongoose.model<UserModel>("User", UserSchema);