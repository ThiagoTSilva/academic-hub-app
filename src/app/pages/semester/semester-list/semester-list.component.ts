import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SemesterResponse } from '../../../types/semester/semester-response.type';
import { DefaultInputComponent } from '../../../components/default-input/default-input.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-semester-list',
  imports: [DefaultInputComponent, ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './semester-list.component.html',
  styleUrl: './semester-list.component.css'
})
export class SemesterListComponent implements OnInit {

  semesterForm!: FormGroup;

  @Input() semesters: SemesterResponse[] = []; 
  @Output() updateSemesterEvent = new EventEmitter<string>(); 

  constructor(private router: Router)
  {
    this.semesterForm = new FormGroup({
      searchId: new FormControl(),
    })
  }

  onUpdateCourse(d: string) {
  }

  ngOnInit() {
    this.loadCourses(); 
  }

  loadCourses(){

  }

  onSearch(){

  }
  

  goToCreate(){
    this.router.navigate(['/semester/new'])
  }

  goToEdit(id: string){
    this.router.navigate(['/semester/edit', id]);
  }

}
