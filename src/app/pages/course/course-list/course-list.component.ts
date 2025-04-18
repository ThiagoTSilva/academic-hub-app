import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CourseResponse } from '../../../types/course/course-response.type';
import { DefaultInputComponent } from '../../../components/default-input/default-input.component';
import { CourseService } from '../../../services/course/course.service';

@Component({
  selector: 'app-course-list',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, DefaultInputComponent],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css'
})
export class CourseListComponent {
  courseForm!: FormGroup;
  error= ''

  @Input() courses: CourseResponse[] = []; 
  @Output() updateCourseEvent = new EventEmitter<string>(); 

  constructor(private courseService: CourseService)
  {
    this.courseForm = new FormGroup({
      searchId: new FormControl(),
    })

    this.getCourses(); 
  }

  onUpdateCourse(d: string) {

  }
  
  getCourses() {
      this.courseService.getCourses().subscribe({
          next: (coursesResponse: CourseResponse[]) => {
            this.courses = coursesResponse
          },
          error: () => {
            this.error = 'Falha ao carregar os cursos'; 
          }
        });

  }
  
  onSearch() {
    const searchId = this.courseForm.get('searchId')?.value;
    if (searchId) {
      this.courseService.getCourseById(searchId).subscribe({
        next:(coursesResponse: CourseResponse[]) => {
          this.courses = coursesResponse
        },
        error: () => {
          this.error = 'Falha ao carregar os cursos'; 
        }
      })
    }else {
      this.getCourses();
    }
  }
}
