import mongoose, {model, ObjectId, Schema} from "mongoose";
export type RequirementsModel = {
    name: string;
    image: string;
    code: string;
}
export type SendedQuotesModel = {
    product: string;
    provider: string;
    brand: string;
    price: string;
    timeDeliveried: string;
    image: string;
}
export interface QutoeModel extends Document {
  _id: ObjectId;
  owner_id: string;
  vehicle: string;
  plate: string;
  date: string;
  requirements: RequirementsModel[];
  sendedQuotes: SendedQuotesModel[];
  state: string;
}

/* PetSchema will correspond to a collection in your MongoDB database. */
const QuotesSchema = new Schema({
  owner_id: {
    type: String,
  },
  vehicle: {
    type: String,
  },
  plate: {
    type: String,
  },
  date: {
    type: String,
  },
  requirements: {
    type: Array,
  },
  sendedQuotes: {
    type: Array,
  },
  state: {
    type: String,
  }
});
export default  mongoose.models.Quotes || model<QutoeModel>("Quotes", QuotesSchema);
