import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponentComponent } from './main-component/main-component.component';
import { AddListComponent } from './add-list/add-list.component';
import { ListComponentComponent } from './list-component/list-component.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { SubComponentComponent } from './sub-component/sub-component.component';
import { RemoveCheckedComponent } from './remove-checked/remove-checked.component';
import { ProgressColorComponent } from './progress-color/progress-color.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponentComponent,
    AddListComponent,
    ListComponentComponent,
    TodoItemComponent,
    SubComponentComponent,
    RemoveCheckedComponent,
    ProgressColorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
