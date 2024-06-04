import mongoose, {model, ObjectId, Schema} from "mongoose";

export interface OrderWorkshopModel extends Document {
    _id: ObjectId;
    workerAssigned: string;
    dateEnd: string;
    notes: string;
    dateStart: string;
    owner: string;
    client: any;
    vehicle: any;
    inspection: string;
    tasks: any[];
    workSpace: string;
    totalPrice: string;
    state: string;
    pdfUri: string;
    createdAt: string;
    updatedAt: string;
    createdBy: string;
    updatedBy: string;
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
    totalPrice: {
        type: String,
        required: [true, "Please provide a totalprice"]
    },
    inspection: {
        type: String,
        required: [true, "Please provide a inspections"]
    },
    workSpace: {
        type: String,
        required: [true, "Please prove a space"]
    },
    tasks: {
        type: Array,
    },
    state: {
        type: String,
    },
    pdfUri: {
        type: String
    },
    createdBy: {
        type: String
    },
    updatedBy: {
        type: String
    }
}, { timestamps: true },);
export default  mongoose.models.orderservices || model<OrderWorkshopModel>("orderservices", OrderWorkshopSchema);
