import { EventEmitter, Injectable } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';
import { StorageService } from './storage.service';

const todoListStorageKey='Todo_List'
const defaultTodoList: TodoItem[]=[
  { title: 'install NodeJS' },
  { title: 'install Angular CLI' },
  { title: 'create new app' },
  { title: 'serve app' },
  { title: 'develop app' },
  { title: 'deploy app' },
]

@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  todoList!: TodoItem[];
  todoListChanged = new EventEmitter<void>();
  constructor(private storageService:StorageService) { 
    this.todoList=storageService.getData(todoListStorageKey)||defaultTodoList
  }
  saveList() {
    this.storageService.setData(todoListStorageKey, this.todoList);
    this.todoListChanged.emit();
  }

  updateItem(item: TodoItem, changes: TodoItem) {
    const index = this.todoList.indexOf(item);
    this.todoList[index] = { ...item, ...changes };
    this.saveList();
  }
  addItem(item: TodoItem) {
    this.todoList.push(item);
    this.saveList();
  }
  deleteItem(item: TodoItem) {
    const index = this.todoList.indexOf(item);
    this.todoList.splice(index, 1);
    this.saveList();
  }
  getToDoList(): TodoItem[]{
    return this.todoList
  }
  deleteAllItemComplete() {
    this.todoList = this.todoList.filter(obj => obj.completed !== true);
    this.saveList();
  }
  getCompletedTaskCount(todoList: TodoItem[]): number {
    return todoList.reduce((count, obj) => count + (obj.completed ? 1 : 0), 0);
  }

  getTotalTaskCount(todoList: TodoItem[]): number {
    return todoList.length;
  }

  getPercentageCompleted(todoList: TodoItem[]): number {
    const completed = this.getCompletedTaskCount(todoList);
    const total = this.getTotalTaskCount(todoList);
    return total > 0 ? (completed / total) * 100 : 0;
  }


}
