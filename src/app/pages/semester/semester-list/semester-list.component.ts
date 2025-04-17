import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SemesterResponse } from '../../../types/semester/semester-response.type';
import { DefaultInputComponent } from '../../../components/default-input/default-input.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-semester-list',
  imports: [DefaultInputComponent, ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './semester-list.component.html',
  styleUrl: './semester-list.component.css'
})
export class SemesterListComponent {

  semesterForm!: FormGroup;

  @Input() semester: SemesterResponse[] = []; 
  @Output() updateSemesterEvent = new EventEmitter<string>(); 

  constructor()
  {
    this.semesterForm = new FormGroup({
      searchId: new FormControl(),
    })
  }

  onUpdateCourse(d: string) {
  }

  ngOnInit() {
    this.getCourses(); 
  }
  
  getCourses() {

  }
  
  onSearch() {

  }

}
