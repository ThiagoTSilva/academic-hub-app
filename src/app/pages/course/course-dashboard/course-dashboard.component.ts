import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CourseListComponent } from '../course-list/course-list.component';
import { CourseResponse } from '../../../types/course/course-response.type';

@Component({
  standalone: true,
  selector: 'app-course',
  imports: [FormsModule, CommonModule, CourseListComponent, ReactiveFormsModule],
  templateUrl: './course-dashboard.component.html',
  styleUrl: './course-dashboard.component.css'
})
export class CourseDashboardComponent {

   course: CourseResponse[] = []; 

    constructor() {}
  
  
    onUpdateCourse(id: string) {
    }

}
