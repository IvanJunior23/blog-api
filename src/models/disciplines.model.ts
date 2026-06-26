import mongoose, { Schema } from "mongoose";
import { IDiscipline } from "../interfaces/IDiscipline";

const DisciplineSchema = new Schema<IDiscipline>(
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

const DisciplineModel = mongoose.model<IDiscipline>(
  "Discipline",
  DisciplineSchema,
);

export default DisciplineModel;
