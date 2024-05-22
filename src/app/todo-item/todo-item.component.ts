import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';

@Component({
  selector: 'app-todo-item',
  template: `
<div class="list_item">
    <div class="check_item">
      <input type="checkbox" (change)="completeItem(inputElementRef.value)" [checked]="item.completed">
     </div>
    <div class="input_text">
      <input #inputElementRef style="resize:horizontal; width:500px" [value]="item.title">
    </div>
    <div class="list_icon">
      <button (click)="completeItem(inputElementRef.value)"><i class="fa-solid fa-pencil"></i>
      </button>
      <button (click)="removeItem()"><i class="fa-solid fa-x"></i></button>
    </div>
  </div>
`,
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Output() remove: EventEmitter<TodoItem> = new EventEmitter<TodoItem>();
  removeItem() {
    this.remove.emit(this.item);
  }

  @Output() update: EventEmitter<any> = new EventEmitter<any>();
  completeItem(typeSub:String): void {
    this.update.emit({
      item: this.item,
      changes: { completed: !this.item.completed
       }
    });
  }

  @Input()
  item!: TodoItem;
}
