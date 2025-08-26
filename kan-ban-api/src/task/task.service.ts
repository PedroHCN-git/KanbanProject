import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './entities/task.entity';

// DTO
import { CreateTaskDTO } from './dto/creat-task.dto';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>
  ){}

  async deleteTasks(idList: string[]): Promise<void>{
    const toNumber = idList.map(id => Number(id));
    this.taskRepository.delete(toNumber);
  }

  async deleteTask(id: string): Promise<void>{
    this.taskRepository.delete(Number(id));
  }

  async create(createTaskDTO: CreateTaskDTO): Promise<Task>{
    const task = this.taskRepository.create(createTaskDTO);
    return this.taskRepository.save(task);
  }
}
