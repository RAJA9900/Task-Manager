import { Routes } from '@angular/router';
import { TaskListComponent } from './components/tasks/task-list/task-list.component';
import { AddTaskComponent } from './components/tasks/add-task/add-task.component';
import { CategoryComponent } from './components/categories/category/category.component';



export const routes: Routes = [
{ path: '', pathMatch: 'full', redirectTo: 'tasks' },
{ path: 'tasks', component: TaskListComponent, title: 'Tasks' },
{ path: 'tasks/new', component: AddTaskComponent, title: 'Add Task' },
{ path: 'tasks/:id', component: AddTaskComponent, title: 'Edit Task' },
{ path: 'categories', component: CategoryComponent, title: 'Categories' },
{ path: '**', redirectTo: 'tasks' }
];
