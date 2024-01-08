import mongoose from "mongoose";

export class AddWorkSpaceDto {
  name: string;
  id: mongoose.Types.ObjectId;
  registartion_key: string;
}
