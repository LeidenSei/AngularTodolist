import { Component, OnInit, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-add-list',
  template: `

<div class="add_input">
    <input #inputElementRef  [value]="title"
       (keyup.enter)="submitValue(getInputValue($event))" placeholder="what needs to be done?">
    <button class="add_button" (click)="submitValue(inputElementRef.value)" style="background-color: rgb(73,156,193);">
        <div class="icon_add" style="color: white;">+</div>
    </button>
</div>
  `,
  styleUrls: ['./add-list.component.css']
})
export class AddListComponent implements OnInit {
  @Output() submit: EventEmitter<string> = new EventEmitter<string>();
  title = 'Hello World';

  constructor() { }                     

  ngOnInit(): void {
  }

  changeTitle(newTitle: string): void {
    this.submit.emit(newTitle);
  }
  submitValue(newTitle: string) {
    this.submit.emit(newTitle);
  }
  getInputValue(event: Event) {
    return (event.target as HTMLInputElement).value;
  }
}
