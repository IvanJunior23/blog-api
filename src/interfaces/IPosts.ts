import { Document, Types } from "mongoose";

export interface IPostPayload {
  title: string;
  content: string;
  summary: string;
  imageUrl?: string;
  series?: string;
  semester?: string;
  disciplineId: string;
  authorId: string;
  statusId: string;
}

export interface IPost extends Document {
  title: string;
  content: string;
  summary: string;
  imageUrl?: string;
  series?: string;
  semester?: string;
  discipline: Types.ObjectId;
  author: Types.ObjectId;
  status: Types.ObjectId;
  createDate: Date;
  updateDate: Date;
}
