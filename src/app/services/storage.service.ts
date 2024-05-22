import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }
  getData<T>(key: string): T|null{
    const data = localStorage.getItem(key);
    if(data===null){
      return null;
    }
    return JSON.parse(data) as T;
  }
  setData(key: string, data: any) {
    localStorage.setItem(key, JSON.stringify(data));
  }

}
