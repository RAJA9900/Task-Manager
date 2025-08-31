import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Category } from '../../shared/models/category';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }

  private storageKey = 'tm_categories';
private _categories = new BehaviorSubject<Category[]>(this.load());
categories$ = this._categories.asObservable();



private load(): Category[] {
const raw = localStorage.getItem(this.storageKey);
return raw ? JSON.parse(raw) as Category[] : [
{ id: 'gen', name: 'General' },
{ id: 'work', name: 'Work' },
{ id: 'home', name: 'Home' }
];
}

private persist(list: Category[]) {
   localStorage.setItem(this.storageKey,
JSON.stringify(list)); 
}

add(name: string) {
const list = [...this._categories.value, { id: uuid(), name }];
this._categories.next(list); this.persist(list);
}

remove(id: string) {
const list = this._categories.value.filter(c => c.id !== id);
this._categories.next(list); this.persist(list);
}


}
