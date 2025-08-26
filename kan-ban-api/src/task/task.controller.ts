import { Controller, Get, Post, Body } from '@nestjs/common';

// Services
import { TaskService } from './task.service';

// DTO
import { CreateTaskDTO } from './dto/creat-task.dto';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService){}

  @Post()
  create(@Body() createTaskDTO: CreateTaskDTO){
    this.taskService.create(createTaskDTO);
  }
  
}
