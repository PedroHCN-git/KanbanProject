import { Controller, Get, Post, Delete, Put, Body, Param } from '@nestjs/common';

// Services
import { TaskService } from './task.service';

// DTO
import { CreateTaskDTO } from './dto/creat-task.dto';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService){}

  @Get()
  getAllTasks(){
    this.taskService.getAllTasks();
  }

  @Delete()
  deleteTasks(@Body() idList: string[]){
    this.taskService.deleteTasks(idList);
  }

  @Delete(':id')
  deleteTask(@Param('id') id: string){
    this.taskService.deleteTask(id);
  }

  @Post()
  create(@Body() createTaskDTO: CreateTaskDTO){
    this.taskService.create(createTaskDTO);
  }

  @Put(':id')
  updateTask(@Param('id') id: string, @Body() createTaskDTO: CreateTaskDTO){
    this.taskService.updateTask(id, createTaskDTO);
  }
  
}
