import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CurriculumResponse } from '../../../types/curriculum/curriculum-response.type';
import { CurriculumListComponent } from '../curriculum-list/curriculum-list.component';

@Component({
  selector: 'app-curriculum',
  imports: [FormsModule, CommonModule, CurriculumListComponent, ReactiveFormsModule],
  templateUrl: './curriculum-dashboard.component.html',
  styleUrl: './curriculum-dashboard.component.css',
  standalone: true
})
export class CurriculumDashboardComponent {
  curriculum: CurriculumResponse[] = []; 


  onUpdateCurriculum(id: string) {
  }
}
