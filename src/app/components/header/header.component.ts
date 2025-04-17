import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../../services/auth/token/token.service';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private tokenService: TokenService, private router: Router) {}

  logout(): void {
    this.tokenService.logout(); 
    this.router.navigate(['/login']); 
  }

}
