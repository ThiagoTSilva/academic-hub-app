import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environment/environment';
import { Observable } from 'rxjs';
import { UserResponse } from '../../types/user/user-response.type';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = `${environment.apiBaseUrl}/api/v1/users`;

  constructor(private http: HttpClient) {}

  // Método para obter o token de autenticação
  private getAuthHeaders() {
    return new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('acess_token')}`,
      'Content-Type': 'application/json',
    });
  }

  getUsers(): Observable<UserResponse[]> {
    return this.http.get<UserResponse[]>(this.apiUrl, {
      headers: this.getAuthHeaders(),
    });
  }

  // getUser(id: string): Observable<UserDto> {
  //   return this.http.get<UserDto>(`${this.apiUrl}/${id}`, {
  //     headers: this.getAuthHeaders(),
  //   });
  // }

  // createUser(user: UserCreateDto): Observable<UserDto> {
  //   return this.http.post<UserDto>(this.apiUrl, user, {
  //     headers: this.getAuthHeaders(),
  //   });
  // }

  // updateUser(id: string, user: UserUpdateDto): Observable<UserDto> {
  //   return this.http.put<UserDto>(`${this.apiUrl}/${id}`, user, {
  //     headers: this.getAuthHeaders(),
  //   });
  // }

  deleteUser(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`, {
      headers: this.getAuthHeaders(),
    });
  }
}
