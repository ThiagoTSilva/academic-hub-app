import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SemesterResponse } from '../../types/semester/semester-response.type';
import { ActivatedRoute } from '@angular/router';
import { SemesterService } from '../../services/semester/semester.service';
import { CommonModule } from '@angular/common';
import { DefaultInputComponent } from '../../components/default-input/default-input.component';

@Component({
  selector: 'app-semester',
  imports: [FormsModule, CommonModule, ReactiveFormsModule, DefaultInputComponent],
  templateUrl: './semester.component.html',
  styleUrl: './semester.component.css',
  standalone: true
})
export class SemesterComponent implements OnInit {
  semesterForm!: FormGroup;
  isEditMode = false;

  @Input() semester: SemesterResponse[] = [];
  @Output() semesterSaved = new EventEmitter<string>();

  constructor(
    private route: ActivatedRoute,
    private semesterService: SemesterService
  ) {
    this.semesterForm = new FormGroup({
      year: new FormControl(),
      semester: new FormControl(),
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.semesterService.getSemesterById(id).subscribe((subject) => {
        this.semesterForm.patchValue(subject);
      });
    }
  }


  onSubmit() {
    if (this.isEditMode) {
      this.semesterService.update(this.semesterForm.value.id, this.semesterForm.value).subscribe(() => {
        // redirecionar ou mostrar mensagem
      });
    } else {
      this.semesterService.create(this.semesterForm.value).subscribe(() => {
        // redirecionar ou mostrar mensagem
      });
    }
  }

}
