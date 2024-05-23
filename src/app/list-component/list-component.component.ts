import { TodoListService } from '../services/todo-list.service';
import { TodoItem } from './../interfaces/todo-item';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.css']
})
export class ListComponentComponent implements OnInit {
  todoList: TodoItem[];

  constructor(private todoListService: TodoListService) {
    this.todoList = this.todoListService.getToDoList();
  }

    ngOnInit() {
      this.todoListService.todoListChanged.subscribe(() => {
      this.todoList = this.todoListService.getToDoList();
    });
  }
  removeItem(item: TodoItem) {
    this.todoListService.deleteItem(item);
  }
  updateItem(item: TodoItem, changes: TodoItem) {
    this.todoListService.updateItem(item, changes);
  }
  
}
