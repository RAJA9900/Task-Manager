import { DatePipe, NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PriorityPipe } from '../../../shared/pipes/priority.pipe';
import { TruncatePipe } from '../../../shared/pipes/truncate.pipe';
import { HighlightDirective } from '../../../core/directives/highlight.directive';
import { Task } from '../../../shared/models/task';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [NgClass, DatePipe, PriorityPipe, TruncatePipe, HighlightDirective,
    RouterModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.scss'
})
export class TaskItemComponent {


  @Input() task!: Task;
  @Output() remove = new EventEmitter<string>();
  @Output() toggle = new EventEmitter<string>();
  get isOverdue() {
    return !!this.task.dueDate && !this.task.completed && new
      Date(this.task.dueDate) < new Date();
  }

}
