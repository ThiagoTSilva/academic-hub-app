import { UserService } from './../../../services/user/user-service.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserResponse } from '../../../types/user/user-response.type';
import { DefaultInputComponent } from '../../../components/default-input/default-input.component';

@Component({
  selector: 'app-user-list',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, DefaultInputComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
  standalone: true
})
export class UserListComponent {

  userForm!: FormGroup;
  error = '';

  @Input() users: UserResponse[] = [];
  @Output() updateUserEvent = new EventEmitter<string>();

  constructor(private userservice: UserService) {
    this.userForm = new FormGroup({
      searchId: new FormControl(),
    })

    this.getUsers();
  }

  onUpdateUser(userId: string) {
    this.updateUserEvent.emit(userId);
  }


  getUsers() {
    this.userservice.getUsers().subscribe({
      next: (usersResponse: UserResponse[]) => {
        this.users = usersResponse;
      },
      error: () => {
        this.error = 'Falha ao carregar os usuários';
      }
    });
  }

  onSearch() {
    const searchId = this.userForm.get('searchId')?.value;
    if (searchId) {

      this.userservice.getUserByid(searchId).subscribe({
        next: (usersResponse: UserResponse[]) => {
          this.users = usersResponse;
        },
        error:() => {
          this.error = 'Falha ao carregar os usuários';
          this.getUsers();
        }
      })

      return;
    } 
    this.getUsers();
  }

}
