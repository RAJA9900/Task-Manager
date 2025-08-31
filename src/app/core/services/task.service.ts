import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  private storageKey = 'tm_tasks';
private tasksSig = signal<Task[]>(this.load());
tasks = computed(() => this.tasksSig()); // for signals demo
private load(): Task[] {
const raw = localStorage.getItem(this.storageKey);
return raw ? JSON.parse(raw) as Task[] : [];
}
private persist(list: Task[]) { localStorage.setItem(this.storageKey,
JSON.stringify(list)); }
list() { return this.tasksSig(); }
get(id: string) { return this.tasksSig().find(t => t.id === id); }
add(partial: Omit<Task, 'id' | 'createdAt'>) {
const task: Task = { id: uuid(), createdAt: new
Date().toISOString(), ...partial };
const list = [...this.tasksSig(), task];
this.tasksSig.set(list); this.persist(list);
}
update(id: string, patch: Partial<Task>) {
const list = this.tasksSig().map(t => t.id === id ? { ...t, ...patch } : t);
this.tasksSig.set(list); this.persist(list);
}
remove(id: string) {
const list = this.tasksSig().filter(t => t.id !== id);
this.tasksSig.set(list); this.persist(list);
}
toggleComplete(id: string) {
const t = this.get(id); if (t) this.update(id, { completed: !t.completed });
}

}
