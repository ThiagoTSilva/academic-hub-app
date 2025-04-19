import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SemesterResponse } from '../../types/semester/semester-response.type';
import { SemesterRequest } from '../../types/semester/semester-request.type';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class SemesterService {

  private apiUrl = `${environment.apiBaseUrl}/disciplines`;
  
  constructor(private http: HttpClient) {  }

  private getAuthHeaders() {
    return new HttpHeaders({
      Authorization: `Bearer ${ sessionStorage.getItem('access_token') }`,
      'Content-Type': 'application/json',
    });
  }

  getSemester(): Observable<any> {
    return this.http.get<SemesterResponse[]>(this.apiUrl, {
      headers : this.getAuthHeaders(),
    });
  }

  getSemesterById(id: string): Observable<any> {
    return this.http.get<SemesterResponse>(`${this.apiUrl}/${id}`, {
      headers: this.getAuthHeaders(),
    });
  }

  create(course: SemesterRequest): Observable<any> {
    return this.http.post<SemesterResponse>(this.apiUrl, course, {
      headers: this.getAuthHeaders(),
    });
  }

  update(id: string, course: SemesterRequest): Observable<any> {
    return this.http.put<SemesterResponse>(`${this.apiUrl}/${id}`, course, {
      headers: this.getAuthHeaders(),
    });
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`, {
      headers: this.getAuthHeaders(),
    });
  }
}
