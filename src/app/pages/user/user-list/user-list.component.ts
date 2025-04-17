import { Component, EventEmitter, Input, Output } from '@angular/core';
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

  @Input() users: UserResponse[] = []; 
  @Output() updateUserEvent = new EventEmitter<string>(); 

  constructor(){
    this.userForm = new FormGroup({
      searchId: new FormControl(),
    })
  }

  onUpdateUser(userId: string) {
    this.updateUserEvent.emit(userId); 
  }

  ngOnInit() {
    this.getUsers(); 
  }
  
  getUsers() {
    // this.allUsers = [...]; 
    // this.users = this.allUsers;
  }
  
  onSearch() {
    // this.users = this.allUsers.filter(user =>
    //   user.username.toLowerCase().includes(this.searchUsername.toLowerCase()) &&
    //   user.email.toLowerCase().includes(this.searchEmail.toLowerCase())
    // );
  }

}
