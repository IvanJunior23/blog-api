import { Document } from "mongoose";

export interface IDiscipline extends Document {
  label: string;
  order: number;
  isActive: boolean;
}
