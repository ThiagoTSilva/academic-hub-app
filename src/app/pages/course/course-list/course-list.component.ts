import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CourseResponse } from '../../../types/course/course-response.type';
import { DefaultInputComponent } from '../../../components/default-input/default-input.component';

@Component({
  selector: 'app-course-list',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, DefaultInputComponent],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css'
})
export class CourseListComponent {
  courseForm!: FormGroup;

  @Input() courses: CourseResponse[] = []; 
  @Output() updateCourseEvent = new EventEmitter<string>(); 

  constructor()
  {
    this.courseForm = new FormGroup({
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
