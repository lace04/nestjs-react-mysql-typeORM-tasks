import {
  Body,
  Controller,
  Param,
  Get,
  Post,
  Delete,
  ParseIntPipe,
  Patch,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from 'src/dto/create-task.dto';
import { UpdateTaskDto } from 'src/dto/update-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private _taskService: TasksService) {}

  @Get()
  getTasks() {
    return this._taskService.getTasks();
  }

  @Get(':id')
  getTask(@Param('id', ParseIntPipe) id: number) {
    return this._taskService.getTask(id);
  }

  @Post()
  createTask(@Body() newTask: CreateTaskDto) {
    return this._taskService.createTask(newTask);
  }

  @Delete(':id')
  deleteTask(@Param('id', ParseIntPipe) id: number) {
    return this._taskService.deleteTask(id);
  }

  @Patch(':id')
  updateTask(
    @Param('id', ParseIntPipe) id: number,
    @Body() task: UpdateTaskDto,
  ) {
    return this._taskService.updateTask(id, task);
  }
}
