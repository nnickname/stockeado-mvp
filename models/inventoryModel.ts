import {Schema,  model, ObjectId } from "mongoose";
import mongoose from "mongoose";
type SellingsModel = {
    ammount: string,
    price: string,
    order_id: ObjectId
}
export interface InventoryModel extends Document {
  _id: String;
  name: string;
  price: string;
  priceSelling: string;
  stars: number;
  owner_id: ObjectId;
  type: number;
  brand: number;
  categorie: number;
  sellings: SellingsModel[];
  sku: string;
  ammount: number;
  image: string;
  model: string;
  description: string;
  numberPart: string;
  inMP: boolean;
}

/* PetSchema will correspond to a collection in your MongoDB database. */
const InventorySchema = new Schema({
 
  name: {
    /* The name of this pet */

    type: String,
    required: [true, "Please provide a name."],
    maxlength: [60, "Name cannot be more than 60 characters"],
  },
  price: {
    /* The name of this pet */

    type: String,
    required: [true, "Please provide a price."],
    maxlength: [60, "Price cannot be more than 60 characters"],
  },
  stars: {
    /* The name of this pet */

    type: Number,
    required: [true, "Stars"],
  },
  owner_id: {
    /* The name of this pet */

    type: String,
    required: [true, "Please provide a ownerId."],
    maxlength: [50, "OwnerId cannot be more than 60 characters"],
  },
  type: {
    /* The name of this pet */

    type: Number,
    required: [true, "Please provide a type."],
  },
  brand: {
    /* The name of this pet */

    type: Number,
    required: [true, "Please provide a type."],
  },
  categorie: {
    /* The name of this pet */

    type: Number,
    required: [true, "Please provide a Categorie."],
    
  },
  ammount: {
    /* The name of this pet */

    type: Number,
    required: [true, "Please provide a amount."],
    
  },
  sku: {
    /* The name of this pet */

    type: String,
    required: [true, "Please provide a Categorie."],
    
  },
  sellings: {
    type: Object,
    required: [true, "Provide a sellings"]
  },
  image: {
    /* The name of this pet */

    type: String,
    required: [true, "Please provide a image."],
  },
  model: {
    /* The name of this pet */

    type: String,
    required: [true, "Please provide a model."],
  },
  inMP: {
    /* The name of this pet */

    type: Boolean,
    required: [true, "Please provide a boolean."],
  },
  priceSelling: {
    /* The name of this pet */

    type: String,
    required: [true, "Please provide a price of Selling."],
    maxlength: [60, "Price cannot be more than 60 characters"],
  },
  numberPart: {
    /* The name of this pet */

    type: String,
    required: [true, "Please provide a price of Selling."],
    maxlength: [60, "Price cannot be more than 60 characters"],
  },
  description: {
    /* The name of this pet */
    type: String,
    required: [true, "Please provide a price of Selling."],
    maxlength: [60, "Price cannot be more than 60 characters"],
  },
});

export default  mongoose.models.Inventories || model<InventoryModel>("Inventories", InventorySchema);
