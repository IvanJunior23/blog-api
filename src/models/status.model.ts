import mongoose, { Schema } from "mongoose";
import { IStatus } from "../interfaces/IStatus";

const StatusSchema = new Schema<IStatus>(
  {
    label: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    order: {
      type: Number,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    versionKey: false,
  },
);

const StatusModel = mongoose.model<IStatus>("Status", StatusSchema);

export default StatusModel;
