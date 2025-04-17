import { Component } from '@angular/core';
import { UserService } from '../../../services/user/user-service.service';
import { UserListComponent } from '../user-list/user-list.component';
import { UserResponse } from '../../../types/user/user-response.type';

@Component({
  selector: 'app-user-dashboard',
  imports: [UserListComponent],
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.css'
})
export class UserDashboardComponent {
  users: UserResponse[] = []; 

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
    });
  }


  onUpdateUser(id: string) {

  }

}
