import { TokenService } from './../../services/auth/token/token.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-dashboard',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  isAdmin = false;
  isCoordinator = false;
  isStudent = false;
  userName: string = "";

  constructor(private tokenService: TokenService) {}

  ngOnInit(): void {
    const token = sessionStorage.getItem('access_token');

    if (token) {
      this.userName = this.tokenService.getUserName();
      this.isAdmin = this.tokenService.isAdmin();
      this.isCoordinator = this.tokenService.isCoordinator();
      this.isStudent = this.tokenService.isStudent();
    }

  }
}
