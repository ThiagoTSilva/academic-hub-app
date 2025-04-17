import { Component } from '@angular/core';
import { SubjectListComponent } from '../subject-list/subject-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SubjectResponse } from '../../../types/subject/subject-response.type';

@Component({
  selector: 'app-subject-dashboard',
  imports: [SubjectListComponent, ReactiveFormsModule],
  templateUrl: './subject-dashboard.component.html',
  styleUrl: './subject-dashboard.component.css'
})
export class SubjectDashboardComponent {

  subject: SubjectResponse[] = [];

  constructor() { }

  onUpdateSubject(id: string) {
  }

}
