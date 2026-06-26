import { Document } from "mongoose";

export interface IUser extends Document {
  name: string;
  username: string;
  password: string;
  email: string;
  mobilePhone?: string;
  externalId?: string;
  creationDate: Date;
  lastLogin?: Date;
  isActive: boolean;
}
