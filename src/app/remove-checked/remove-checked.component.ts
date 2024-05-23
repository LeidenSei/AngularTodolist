import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';
import { TodoListService } from '../services/todo-list.service';

@Component({
  selector: 'app-remove-checked',
  templateUrl: './remove-checked.component.html',
  styleUrls: ['./remove-checked.component.css']
})
export class RemoveCheckedComponent implements OnInit {
  todoList: TodoItem[] = [];
  constructor(private todoListService: TodoListService) {
    this.todoList = this.todoListService.getToDoList();
  }
  ngOnInit() {
      this.todoListService.todoListChanged.subscribe(() => {
      this.todoList = this.todoListService.getToDoList();
    });
  }
  removeItemChecked() {
    this.todoListService.deleteAllItemComplete();
  }
}
