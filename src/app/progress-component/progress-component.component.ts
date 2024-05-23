import { Component, OnInit } from '@angular/core';
import { TodoListService } from '../services/todo-list.service';
import { TodoItem } from '../interfaces/todo-item';

@Component({
  selector: 'app-progress-component',
  templateUrl: './progress-component.component.html',
  styleUrls: ['./progress-component.component.css']
})
export class ProgressComponentComponent implements OnInit {
  todoList: TodoItem[];
  taskCompleted!: number;
  totalTask!: number;
  percentTask!: number;

  constructor(private todoListService: TodoListService) {
    this.todoList = this.todoListService.getToDoList();
    this.updateStatistics();
  }

  ngOnInit(): void {

      this.todoListService.todoListChanged.subscribe(() => {
      this.todoList = this.todoListService.getToDoList();
      this.updateStatistics();
    });
  }

  updateStatistics(): void {
    this.taskCompleted = this.todoListService.getCompletedTaskCount(this.todoList);
    this.totalTask = this.todoListService.getTotalTaskCount(this.todoList);
    this.percentTask = this.todoListService.getPercentageCompleted(this.todoList);
  }
}
