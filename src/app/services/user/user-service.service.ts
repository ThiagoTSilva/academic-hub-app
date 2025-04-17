import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environment/environment';
import { Observable, tap } from 'rxjs';
import { UserResponse } from '../../types/user/user-response.type';
import { UserRequest } from '../../types/user/user.request.type';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = `${environment.apiBaseUrl}/users`;

  constructor(private http: HttpClient) {  }

  private getAuthHeaders() {
    return new HttpHeaders({
      Authorization: `Bearer ${ sessionStorage.getItem('access_token') }`,
      'Content-Type': 'application/json',
    });
  }

  getUsers(): Observable<any> {
    return this.http.get<UserResponse[]>(this.apiUrl, {
      headers : this.getAuthHeaders(),
    }).pipe(
      tap((value) => {
        console.log(value)
      })
    );
  }

  getUser(id: string): Observable<any> {
    return this.http.get<UserResponse>(`${this.apiUrl}/${id}`, {
      headers: this.getAuthHeaders(),
    });
  }

  createUser(user: UserRequest): Observable<any> {
    return this.http.post<UserResponse>(this.apiUrl, user, {
      headers: this.getAuthHeaders(),
    });
  }

  updateUser(id: string, user: UserRequest): Observable<any> {
    return this.http.put<UserResponse>(`${this.apiUrl}/${id}`, user, {
      headers: this.getAuthHeaders(),
    });
  }

  deleteUser(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`, {
      headers: this.getAuthHeaders(),
    });
  }
}
