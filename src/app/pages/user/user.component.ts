import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserResponse } from '../../types/user/user-response.type';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user/user-service.service';
import { CommonModule } from '@angular/common';
import { DefaultInputComponent } from '../../components/default-input/default-input.component';

@Component({
  selector: 'app-user',
  imports: [CommonModule, ReactiveFormsModule, FormsModule, DefaultInputComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit{

  usersForm!: FormGroup;
  isEditMode = false;

  @Input() subjects: UserResponse[] = [];
  @Output() subjectSaved = new EventEmitter<string>();

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {
    this.usersForm = new FormGroup({
      id: new FormControl(),
      username: new FormControl(),
      role: new FormControl(),
      email: new FormControl()
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.userService.getUserByid(id).subscribe((subject) => {
        this.usersForm.patchValue(subject);
      });
    }
  }


  onSubmit() {
    if (this.isEditMode) {
      this.userService.update(this.usersForm.value.id, this.usersForm.value).subscribe(() => {
        // redirecionar ou mostrar mensagem
      });
    } else {
      this.userService.create(this.usersForm.value).subscribe(() => {
        // redirecionar ou mostrar mensagem
      });
    }
  }

}
