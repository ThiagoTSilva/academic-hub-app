import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SemesterResponse } from '../../../types/semester/semester-response.type';
import { SemesterListComponent } from '../semester-list/semester-list.component';

@Component({
  selector: 'app-semester',
  imports: [FormsModule, CommonModule, SemesterListComponent, ReactiveFormsModule],
  templateUrl: './semester-dashboard.component.html',
  styleUrl: './semester-dashboard.component.css'
})
export class SemesterDashboardComponent {

  semester: SemesterResponse[] = []; 
  
      constructor() {}
    
      onUpdateSemester(id: string) {
      }

}
