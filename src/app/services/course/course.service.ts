import { Injectable } from '@angular/core';
import { environment } from '../../../environment/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CourseResponse } from '../../types/course/course-response.type';
import { Observable, tap } from 'rxjs';
import { CourseRequest } from '../../types/course/course-request.type';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private apiUrl = `${environment.apiBaseUrl}/users`;

  constructor(private http: HttpClient) {  }

  private getAuthHeaders() {
    return new HttpHeaders({
      Authorization: `Bearer ${ sessionStorage.getItem('access_token') }`,
      'Content-Type': 'application/json',
    });
  }

  getCourse(): Observable<any> {
    return this.http.get<CourseResponse[]>(this.apiUrl, {
      headers : this.getAuthHeaders(),
    }).pipe(
      tap((value) => {
        console.log(value)
      })
    );
  }

  getUser(id: string): Observable<any> {
    return this.http.get<CourseResponse>(`${this.apiUrl}/${id}`, {
      headers: this.getAuthHeaders(),
    });
  }

  createCourse(course: CourseRequest): Observable<any> {
    return this.http.post<CourseResponse>(this.apiUrl, course, {
      headers: this.getAuthHeaders(),
    });
  }

  updateCourse(id: string, course: CourseRequest): Observable<any> {
    return this.http.put<CourseResponse>(`${this.apiUrl}/${id}`, course, {
      headers: this.getAuthHeaders(),
    });
  }

  deleteCourse(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`, {
      headers: this.getAuthHeaders(),
    });
  }
}
