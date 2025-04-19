import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CourseResponse } from '../../../types/course/course-response.type';
import { DefaultInputComponent } from '../../../components/default-input/default-input.component';
import { CourseService } from '../../../services/course/course.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-list',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, DefaultInputComponent],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css'
})
export class CourseListComponent implements OnInit {
  courseForm!: FormGroup;
  error= ''

  @Input() courses: CourseResponse[] = []; 
  @Output() updateCourseEvent = new EventEmitter<string>(); 

  constructor(private courseService: CourseService, private router: Router)
  {
    this.courseForm = new FormGroup({
      searchId: new FormControl(),
    })

    this.loadCourses(); 
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onUpdateCourse(d: string) {

  }
  
  loadCourses() {
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
      return;
    }
      this.loadCourses();
    
  }

  goToCreate(){
    this.router.navigate(['/course/new'])
  }

  goToEdit(id: string){
    this.router.navigate(['/course/edit', id]);
  }
  
}
