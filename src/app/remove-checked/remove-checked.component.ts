import { Component, EventEmitter, Output } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';
import { TodoListService } from '../services/todo-list.service';

@Component({
  selector: 'app-remove-checked',
  templateUrl: './remove-checked.component.html',
  styleUrls: ['./remove-checked.component.css']
})
export class RemoveCheckedComponent {
  @Output() removeChecked = new EventEmitter<TodoItem[]>();
  constructor(private todoListService: TodoListService) {}
  removeItemChecked() {
    this.todoListService.deleteAllItemComplete();
    const updatedTodoList = this.todoListService.getToDoList() || []; // Use existing list or empty array
    this.removeChecked.emit(updatedTodoList);
  }
}
