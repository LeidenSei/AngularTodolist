import { Component } from '@angular/core';
import { TodoListService } from '../services/todo-list.service';
import { TodoItem } from '../interfaces/todo-item';

@Component({
  selector: 'app-progress-color',
  templateUrl: './progress-color.component.html',
  styleUrls: ['./progress-color.component.css']
})
export class ProgressColorComponent {
  todoList: TodoItem[];

  constructor(private todoListService: TodoListService) {
    this.todoList = this.todoListService.getToDoList();
  }
}
