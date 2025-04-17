import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CurriculumResponse } from '../../../types/curriculum/curriculum-response.type';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DefaultInputComponent } from '../../../components/default-input/default-input.component';

@Component({
  selector: 'app-curriculum-list',
  imports: [CommonModule, ReactiveFormsModule, DefaultInputComponent],
  templateUrl: './curriculum-list.component.html',
  styleUrl: './curriculum-list.component.css'
})
export class CurriculumListComponent {
  curriculumForm!: FormGroup;

  @Input() curriculum: CurriculumResponse[] = []; 
  @Output() updateCurriculumEvent = new EventEmitter<string>(); 

  constructor(){
    this.curriculumForm = new FormGroup({
      searchId: new FormControl(),
    })
  }

  onUpdateCurriculum() {
  }

  onSearch(){

  }

}
