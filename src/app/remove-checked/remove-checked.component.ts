import { Component, EventEmitter, Output } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';

@Component({
  selector: 'app-remove-checked',
  templateUrl: './remove-checked.component.html',
  styleUrls: ['./remove-checked.component.css']
})
export class RemoveCheckedComponent {
  @Output() removeChecked: EventEmitter<TodoItem> = new EventEmitter<TodoItem>();
  removeCheckedCompleted(){
    this.removeChecked.emit()
  }
}
