import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserDto } from '../../../models/users/user.dto';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
  standalone: true
})
export class UserListComponent {

  @Input() users: UserDto[] = []; 
  @Output() updateUserEvent = new EventEmitter<string>(); 

  onUpdateUser(userId: string) {
    this.updateUserEvent.emit(userId); 
  }

}
