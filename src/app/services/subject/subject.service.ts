import { Injectable } from '@angular/core';
import { environment } from '../../../environment/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SubjectResponse } from '../../types/subject/subject-response.type';
import { SubjectRequest } from '../../types/subject/subject-request.type';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

    private apiUrl = `${environment.apiBaseUrl}/disciplines`;
  
    constructor(private http: HttpClient) {  }
  
    private getAuthHeaders() {
      return new HttpHeaders({
        Authorization: `Bearer ${ sessionStorage.getItem('access_token') }`,
        'Content-Type': 'application/json',
      });
    }
  
    getSubjects(): Observable<any> {
      return this.http.get<SubjectResponse[]>(this.apiUrl, {
        headers : this.getAuthHeaders(),
      });
    }
  
    getSubjectById(id: string): Observable<any> {
      return this.http.get<SubjectResponse>(`${this.apiUrl}/${id}`, {
        headers: this.getAuthHeaders(),
      });
    }
  
    create(course: SubjectRequest): Observable<any> {
      return this.http.post<SubjectResponse>(this.apiUrl, course, {
        headers: this.getAuthHeaders(),
      });
    }
  
    update(id: string, course: SubjectRequest): Observable<any> {
      return this.http.put<SubjectResponse>(`${this.apiUrl}/${id}`, course, {
        headers: this.getAuthHeaders(),
      });
    }
  
    delete(id: string): Observable<void> {
      return this.http.delete<void>(`${this.apiUrl}/${id}`, {
        headers: this.getAuthHeaders(),
      });
    }
}
