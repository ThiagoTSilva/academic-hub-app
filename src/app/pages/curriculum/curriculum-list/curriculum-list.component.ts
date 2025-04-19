import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CurriculumResponse } from '../../../types/curriculum/curriculum-response.type';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DefaultInputComponent } from '../../../components/default-input/default-input.component';
import { Router } from '@angular/router';
import { CurriculumService } from '../../../services/curriculum/curriculum.service';
import { TokenService } from '../../../services/auth/token/token.service';

@Component({
  selector: 'app-curriculum-list',
  imports: [CommonModule, ReactiveFormsModule, DefaultInputComponent],
  templateUrl: './curriculum-list.component.html',
  styleUrl: './curriculum-list.component.css'
})
export class CurriculumListComponent implements OnInit {
  curriculumForm!: FormGroup;
  error = '';
  isAdmin = false;
  isCoordinator = false;

  @Input() curriculums: CurriculumResponse[] = [];
  @Output() updateCurriculumEvent = new EventEmitter<string>();

  constructor(private router: Router, private curriculumService: CurriculumService, private tokenService: TokenService) {
    this.curriculumForm = new FormGroup({
      searchId: new FormControl(),
    })
  }

  ngOnInit(): void {

    const token = sessionStorage.getItem('access_token');
  
    if (token) {
      this.isAdmin = this.tokenService.isAdmin();
      this.isCoordinator = this.tokenService.isCoordinator();
    }

    this.curriculumService.viewCurriculumMatrix(this.curriculumForm.value.searchId).subscribe({
      next: (curriculumResponse: CurriculumResponse[]) => {
        this.curriculums = curriculumResponse
      },
      error: () => {
        this.error = 'Falha ao carregar os curriculum';
      }
    });
  }

  onSearch() {

  }

  goToCreate() {
    this.router.navigate(['/curriculum/associate'])
  }

}
