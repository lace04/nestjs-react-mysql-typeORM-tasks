import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from 'src/Entities/task.entity';
import { CreateTaskDto } from 'src/dto/create-task.dto';
import { UpdateTaskDto } from 'src/dto/update-task.dto';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task) private _taskRepository: Repository<Task>,
  ) {}

  getTasks() {
    return this._taskRepository.find();
  }

  async getTask(id: number) {
    const taskFound = await this._taskRepository.findOne({
      where: { id },
    });

    if (!taskFound) {
      return new HttpException('Task not found', HttpStatus.NOT_FOUND);
    }

    return taskFound;
  }

  async createTask(task: CreateTaskDto) {
    const taskFound = await this._taskRepository.findOne({
      where: { title: task.title },
    });

    if (taskFound) {
      return new HttpException('Task already exists', HttpStatus.CONFLICT);
    }

    const newTask = this._taskRepository.create(task);
    return this._taskRepository.save(newTask);
  }

  async deleteTask(id: number) {
    const result = await this._taskRepository.delete({ id });
    if (result.affected === 0) {
      return new HttpException('Task not found', HttpStatus.NOT_FOUND);
    }
    return result;
  }

  async updateTask(id: number, task: UpdateTaskDto) {
    const taskFound = await this._taskRepository.findOne({
      where: { id },
    });

    if (!taskFound) {
      return new HttpException('Task not found', HttpStatus.NOT_FOUND);
    }

    const updateTask = Object.assign(taskFound, task);
    return this._taskRepository.save(updateTask);
  }
}
