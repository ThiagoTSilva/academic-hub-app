import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SubjectResponse } from '../../../types/subject/subject-response.type';
import { DefaultInputComponent } from '../../../components/default-input/default-input.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-subject-list',
  imports: [DefaultInputComponent, ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './subject-list.component.html',
  styleUrl: './subject-list.component.css'
})
export class SubjectListComponent {
  subjectForm!: FormGroup;

  @Input() subject: SubjectResponse[] = []; 
  @Output() updateSubjectEvent = new EventEmitter<string>(); 

  constructor()
  {
    this.subjectForm = new FormGroup({
      searchId: new FormControl(),
    })
  }

  onUpdateSubject(d: string) {
  }

  ngOnInit() {
    this.getSubject(); 
  }
  
  getSubject() {

  }
  
  onSearch() {

  }

}
