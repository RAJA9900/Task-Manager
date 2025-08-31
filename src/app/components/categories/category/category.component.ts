import { Component, inject } from '@angular/core';
import { CategoryService } from '../../../core/services/category.service';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IfAdminDirective } from '../../../core/directives/if-admin.directive';

@Component({
  selector: 'app-category',
  standalone:true,
  imports: [NgFor,FormsModule,IfAdminDirective],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent {

  svc = inject(CategoryService);
name = '';
add(){ this.svc.add(this.name.trim()); this.name=''; }

}
