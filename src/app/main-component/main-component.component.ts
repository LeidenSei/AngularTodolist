import { TodoListService } from '../services/todo-list.service';
import { TodoItem } from './../interfaces/todo-item';
import { Component } from '@angular/core';
@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent {
  todoList: TodoItem[];

  constructor(private todoListService: TodoListService) {
    this.todoList = this.todoListService.getToDoList();
  }
  addItem(title: string) {
    this.todoListService.addItem({ title });
    }
  removeItemChecked() {
      this.todoListService.deleteAllItemComplete();
  }
}
