import mongoose, {model, ObjectId, Schema} from "mongoose";

export interface OrderWorkshopModel extends Document {
    _id: ObjectId;
    workerAssigned: string;
    dateEnd: string;
    notes: string;
    dateStart: string;
    owner: string;
    client: object;
    vehicle: object;
    tasks: any[];
}

const OrderWorkshopSchema = new Schema({
    workerAssigned: {
        type: String,
        required: [true, "Please provide a worker."],
    },
    dateEnd: {
        type: String,
        required: [true, "Please provide a dateEnd."],
    },
    notes: {
        type: String,
        required: [true, "Please provide a notes."],
    },
    dateStart: {
        type: String,
        required: [true, "Please provide a dateStart."],
    },
    owner: {
        type: String,
        required: [true, "Please provide a owner."],
    },
    client: {
        type: Object,
        required: [true, "Please provide a Client."],
    },
    vehicle: {
        type: Object,
        required: [true, "Please provide a vehicle."],
    },
    tasks: {
        type: Array,
    },
  
}, { timestamps: true },);
export default  mongoose.models.orderservices || model<OrderWorkshopModel>("orderservices", OrderWorkshopSchema);
