import { TodoListService } from '../services/todo-list.service';
import { TodoItem } from './../interfaces/todo-item';
import { Component, OnInit } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {
  todoList: TodoItem[];

  constructor(private todoListService: TodoListService,private cdRef: ChangeDetectorRef) {
    this.todoList = this.todoListService.getToDoList();
  }
  ngOnInit() {
    this.todoListService.todoListChanged.subscribe(() => {
    this.todoList = this.todoListService.getToDoList();
  });
}
  addItem(title: string) {
    this.todoListService.addItem({ title });
  }
}
