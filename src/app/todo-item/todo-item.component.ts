import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';

@Component({
  selector: 'app-todo-item',
  template: `
<div class="list_item">
    <div class="check_item">
      <input type="checkbox" (change)="completeItem()" [checked]="item.completed">
     </div>
    <div class="input_text">
    <input #inputElementRef style="resize:horizontal; width:500px" (keydown.enter)="changeTitle($event,inputElementRef.value)" [disabled]="!statusInput" [value]="item.title">
    </div>
    <div class="list_icon">
      <button (click)="allowChange()"><i class="fa-solid fa-pencil"></i>
      </button>
      <button (click)="removeItem()"><i class="fa-solid fa-x"></i></button>
    </div>
  </div>
`,
  styleUrls: ['./todo-item.component.css']
})

export class TodoItemComponent {
  statusInput: boolean = false;
  @Output() remove: EventEmitter<TodoItem> = new EventEmitter<TodoItem>();

  removeItem() {
    this.remove.emit(this.item);
  }

  @Output() update: EventEmitter<any> = new EventEmitter<any>();
  completeItem(): void {
    this.update.emit({
      item: this.item,
      changes: { completed: !this.item.completed
       }
    });
  }
  
  @Output() updateTitle: EventEmitter<any> = new EventEmitter<any>();
  changeTitle(event:any,typeSub:String): void {
      this.updateTitle.emit({
        item: this.item,
        changes: {
          title : typeSub
         }
      });
  }
  
  allowChange(){
     this.statusInput=!this.statusInput
  }

  @Input()
  item!: TodoItem;



}
