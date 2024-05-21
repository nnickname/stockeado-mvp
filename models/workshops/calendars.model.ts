import mongoose, {model, ObjectId, Schema} from "mongoose";

export interface CalendarsModel extends Document {
    _id: ObjectId;
    client: any;
    vehicle: any;
    inspection: any;
    owner: string;
    title: string;
    dateStart: string;
    dateEnd: string;
    checked: string;
}

const CalendarSchema = new Schema({
  client: {
    type: Object,
  },
  vehicle: {
    type: Object,
  },
  inspection: {
    type: Object
  },
  owner: {
    type: String,
    required: [true, 'Please provide a owner']
  },
  title: {
    type: String,
    required: [true, "Please provide a title."],
  },
  dateStart: {
    type: String,
    required: [true, "Please provide a dateStart."],
  },
  dateEnd: {
    type: String,
    required: [true, "Please provide a dateENd."],
  },
  checked: {
    type: String,
    required: [true, "Please provide a checked."],
  },
}, { timestamps: true },);
export default  mongoose.models.calendars || model<CalendarsModel>("calendars", CalendarSchema);
