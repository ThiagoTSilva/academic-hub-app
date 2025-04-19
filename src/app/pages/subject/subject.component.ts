import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SubjectService } from '../../services/subject/subject.service';
import { SubjectResponse } from '../../types/subject/subject-response.type';
import { DefaultInputComponent } from '../../components/default-input/default-input.component';

@Component({
  selector: 'app-subject',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, DefaultInputComponent],
  templateUrl: './subject.component.html',
  styleUrl: './subject.component.css',
  standalone: true
})
export class SubjectComponent implements OnInit {
  subjectsForm!: FormGroup;
  isEditMode = false;

  @Input() subjects: SubjectResponse[] = [];
  @Output() subjectSaved = new EventEmitter<string>();

  constructor(
    private route: ActivatedRoute,
    private subjectService: SubjectService
  ) {
    this.subjectsForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      code: new FormControl(),
      description: new FormControl()
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.subjectService.getSubjectById(id).subscribe((subject) => {
        this.subjectsForm.patchValue(subject);
      });
    }
  }


  onSubmit() {
    if (this.isEditMode) {
      this.subjectService.update(this.subjectsForm.value.id, this.subjectsForm.value).subscribe(() => {
        // redirecionar ou mostrar mensagem
      });
    } else {
      this.subjectService.create(this.subjectsForm.value).subscribe(() => {
        // redirecionar ou mostrar mensagem
      });
    }
  }

}
