import { Injectable } from '@angular/core';
import { UserTokenResponse } from '../../../types/user-token-response.type';
import { parseJwt } from '../../../utils/auth-utils';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private token: string | null;
  private decodedToken: UserTokenResponse | null;

  constructor() {
    this.token = sessionStorage.getItem('access_token');
    this.decodedToken = this.token ? parseJwt(this.token) : null;
  }

  getToken(): string | null {
    return this.token;
  }

  getUserName(): string {
    return this.decodedToken?.name || this.decodedToken?.preferred_username || '';
  }

  getUserRoles(): string[] {
    const realmRoles = this.decodedToken?.realm_access?.roles || [];
    const clientRoles = this.decodedToken?.resource_access?.['academic-hub-app']?.roles || [];
    return [...realmRoles, ...clientRoles];
  }

  hasRole(role: string): boolean {
    return this.getUserRoles().includes(role);
  }

  isAdmin(): boolean {
    return this.hasRole('admin');
  }

  isCoordinator(): boolean {
    return this.hasRole('coordinator');
  }

  isStudent(): boolean {
    return this.hasRole('student');
  }

  logout() {
    localStorage.removeItem('access_token');
  }

  getCurrentUser() {
    const token = this.getToken();
    if (!token) return null;

    const payload = JSON.parse(atob(token.split('.')[1]));
    return {
      username: payload.preferred_username,
      role: payload.realm_access?.roles[0],
      isLoggedIn: true 
    };
  }
}
