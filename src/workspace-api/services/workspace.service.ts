import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { WorkSpace } from "../schema/workspace.schema";
import { Model } from "mongoose";
import { AddWorkSpaceDto } from "../dto/workspace-add.dto";

@Injectable()
export class WorkSpaceService {
  constructor(
    @InjectModel(WorkSpace.name) private WorkSpaceModel: Model<WorkSpace>
  ) {}

  async createworkspace(workspacedto: AddWorkSpaceDto) {
    const creation = await this.WorkSpaceModel.create(workspacedto);
    if (!creation) {
      throw new BadRequestException(`Invalid Details`);
    }
    return creation;
  }

  async findAll(): Promise<WorkSpace[]> {
    const findallworkspace = await this.WorkSpaceModel.find();
    if (!findallworkspace) {
      throw new NotFoundException(`WorkSpace not found`);
    }
    return findallworkspace;
  }
}
