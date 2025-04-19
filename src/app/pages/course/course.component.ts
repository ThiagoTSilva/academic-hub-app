import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CourseResponse } from '../../types/course/course-response.type';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user/user-service.service';
import { DefaultInputComponent } from '../../components/default-input/default-input.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course',
  imports: [FormsModule, DefaultInputComponent, CommonModule, ReactiveFormsModule],
  templateUrl: './course.component.html',
  styleUrl: './course.component.css'
})
export class CourseComponent implements OnInit{

  courseForm!: FormGroup;
  isEditMode = false;

  @Input() courses: CourseResponse[] = [];
  @Output() subjectSaved = new EventEmitter<string>();

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {
    this.courseForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      duration: new FormControl(),
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.userService.getUserByid(id).subscribe((subject) => {
        this.courseForm.patchValue(subject);
      });
    }
  }


  onSubmit() {
    if (this.isEditMode) {
      this.userService.update(this.courseForm.value.id, this.courseForm.value).subscribe(() => {
        // redirecionar ou mostrar mensagem
      });
    } else {
      this.userService.create(this.courseForm.value).subscribe(() => {
        // redirecionar ou mostrar mensagem
      });
    }
  }

}
