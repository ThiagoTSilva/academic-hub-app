import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { LoginResponse } from '../../types/login-response.type';
import { environment } from '../../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  

  private tokenUrl = `${environment.keycloak.tokenUrl}`;
  private clientId = `${environment.keycloak.clientId}`;
  private secret = `${environment.keycloak.client_secret}`

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    const body = new URLSearchParams();
    body.set('grant_type', 'password');
    body.set('client_id', this.clientId);
    body.set('client_secret', this.secret )
    body.set('username', username);
    body.set('password', password);

    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });

    return this.http.post<LoginResponse>(this.tokenUrl, body.toString(), { headers }).pipe(
      tap((value) => {
        sessionStorage.setItem("access_token", value.access_token)
      })
    );
  }
}
