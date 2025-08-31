import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { TaskService } from '../../../core/services/task.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../../../core/services/category.service';
import { Task } from '../../../shared/models/task';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss'
})
export class AddTaskComponent implements OnInit {


  private fb = inject(FormBuilder);
  private tasks = inject(TaskService);
  private route = inject(ActivatedRoute);
  router = inject(Router);
  categoriesSvc = inject(CategoryService);
  isEdit = false;
  id: string | null = null;
  form = this.fb.group({
    title: ['', Validators.required],
    description: [''],
    categoryId: [null as string | null],
    priority: [2, Validators.required],
    dueDate: [null as string | null],
    completed: [false]
  });


  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      const t = this.tasks.get(this.id);
      if (t) {
        this.isEdit = true;
        this.form.patchValue({
          title: t.title,
          description: t.description ?? '',
          categoryId: t.categoryId ?? null,
          priority: t.priority,
          dueDate: t.dueDate ? t.dueDate.substring(0, 10) : null,
          completed: t.completed
        });
      }
    }
  }
  onSubmit() {
    if (this.form.invalid) return;
    const v = this.form.value;
   
    const payload = {
      title: v.title!,
      description: v.description || '',
      categoryId: v.categoryId || undefined,
      priority: v.priority!,
      dueDate: v.dueDate || undefined,
      completed: !!v.completed
    };



    if (this.isEdit && this.id) {
      this.tasks.update(this.id, payload as Partial<Task>);
    } else {
      this.tasks.add(payload as any);
    }
    this.router.navigateByUrl('/tasks');
  }

}
