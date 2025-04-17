import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TokenService } from '../../services/auth/token/token.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  imports: [RouterModule, CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {
  isOpen = false;

    isAdmin = false;
    isCoordinator = false;
    isStudent = false;
  
    constructor(private tokenService: TokenService) {}
  
    ngOnInit(): void {
      const token = sessionStorage.getItem('access_token');
  
      if (token) {
        this.isAdmin = this.tokenService.isAdmin();
        this.isCoordinator = this.tokenService.isCoordinator();
        this.isStudent = this.tokenService.isStudent();
      }
  
    }

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

}
