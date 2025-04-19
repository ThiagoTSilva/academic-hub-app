import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DefaultInputComponent } from '../../components/default-input/default-input.component';
import { CurriculumResponse } from '../../types/curriculum/curriculum-response.type';
import { CurriculumService } from '../../services/curriculum/curriculum.service';

@Component({
  selector: 'app-curriculum',
  imports: [ReactiveFormsModule, CommonModule, DefaultInputComponent],
  templateUrl: './curriculum.component.html',
  styleUrl: './curriculum.component.css'
})
export class CurriculumComponent implements OnInit {
  curriculumForm!: FormGroup;
  isEditMode = false;


  @Input() curriculums: CurriculumResponse[] = [];
  @Output() curriculumSaved = new EventEmitter<string>();

  constructor(private curriculum: CurriculumService) {

    this.curriculumForm = new FormGroup({
      semester: new FormControl(),
      subject: new FormControl(),
      course: new FormControl()
    })
  }

  ngOnInit(): void {

  }

  onSubmit() {

  }
}
