import { Body, Controller, Get, HttpException, Post } from "@nestjs/common";
import { WorkSpaceService } from "../services/workspace.service";
import { AddWorkSpaceDto } from "../dto/workspace-add.dto";

@Controller("workspace")
export class WorkSpaceController {
  constructor(private workspaceService: WorkSpaceService) {}

  @Post("create")
  async createworkspace(@Body() workspacedto: AddWorkSpaceDto) {
    try {
      return await this.workspaceService.createworkspace(workspacedto);
    } catch (error) {
      throw new HttpException(error.message, error.statuscode ?? 400);
    }
  }

  @Get()
  async getall() {
    return await this.workspaceService.findAll();
  }
}
