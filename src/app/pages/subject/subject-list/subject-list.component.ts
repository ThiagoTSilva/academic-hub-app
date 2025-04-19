import { Router } from '@angular/router';
import { routes } from './../../../app.routes';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SubjectResponse } from '../../../types/subject/subject-response.type';
import { DefaultInputComponent } from '../../../components/default-input/default-input.component';
import { CommonModule } from '@angular/common';
import { SubjectService } from '../../../services/subject/subject.service';
import { SubjectComponent } from '../subject.component';

@Component({
  selector: 'app-subject-list',
  imports: [DefaultInputComponent, ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './subject-list.component.html',
  styleUrl: './subject-list.component.css'
})
export class SubjectListComponent {
  subjectForm!: FormGroup;
  error = "";


  @Input() subjects: SubjectResponse[] = [];
  @Output() updateSubjectEvent = new EventEmitter<string>();

  constructor(private subjectService: SubjectService, private router: Router) {
    this.subjectForm = new FormGroup({
      searchId: new FormControl(),
    })

    this.loadSubjects();
  }

  onUpdateSubject(d: string) {
  }

  loadSubjects() {
    this.subjectService.getSubjects().subscribe({
      next: (subjectResponse: SubjectResponse[]) => {
        this.subjects = subjectResponse
      },
      error: () => {
        this.error = 'Falha ao carregar os disciplinas';
      }
    });

  }

  onSearch() {
    const searchId = this.subjectForm.get('searchId')?.value;
    if (searchId) {
      this.subjectService.getSubjectById(searchId).subscribe({
        next: (subjectResponse: SubjectResponse[]) => {
          this.subjects = subjectResponse
        },
        error: () => {
          this.error = 'Falha ao carregar os disciplinas';
        }
      })
      return;
    }
    this.loadSubjects();

  }

  goToCreate(){
    this.router.navigate(['/subject/new'])
  }

  goToEdit(id: string){
    this.router.navigate(['/subject/edit', id]);
  }

}
