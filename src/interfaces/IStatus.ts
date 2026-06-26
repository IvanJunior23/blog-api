import { Document } from "mongoose";

export interface IStatus extends Document {
  label: string;
  order: number;
  isActive: boolean;
}
