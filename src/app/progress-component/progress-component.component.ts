import { Component } from '@angular/core';
import { TodoListService } from '../services/todo-list.service';
import { TodoItem } from '../interfaces/todo-item';

@Component({
  selector: 'app-progress-component',
  templateUrl: './progress-component.component.html',
  styleUrls: ['./progress-component.component.css']
})
export class ProgressComponentComponent {
  todoList: TodoItem[];

  constructor(private todoListService: TodoListService) {
    this.todoList = this.todoListService.getToDoList();
    
  }
    taskCompleted = this.todoListService.getCompletedTaskCount();
    totalTask= this.todoListService.getTotalTaskCount();
    percentTask= this.todoListService.getPercentageCompleted();
}
