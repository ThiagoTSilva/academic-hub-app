import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environment/environment';
import { Observable, tap } from 'rxjs';
import { CurriculumResponse } from '../../types/curriculum/curriculum-response.type';
import { CurriculumRequest } from '../../types/curriculum/curriculum-request.type';
import { CourseResponse } from '../../types/course/course-response.type';

@Injectable({
  providedIn: 'root'
})
export class CurriculumService {

  private apiUrl = `${environment.apiBaseUrl}/curriculum-matrix`;
  
    constructor(private http: HttpClient) {  }
  
    private getAuthHeaders() {
      return new HttpHeaders({
        Authorization: `Bearer ${ sessionStorage.getItem('access_token') }`,
        'Content-Type': 'application/json',
      });
    }
  
    viewCurriculumMatrix(id: string): Observable<any> {
      return this.http.get<CurriculumResponse>(`${this.apiUrl}/${id}`, {
        headers: this.getAuthHeaders(),
      });
    }
  
    createCurriculum(curriculum: CurriculumRequest): Observable<any> {
      return this.http.post<CourseResponse>(this.apiUrl, curriculum, {
        headers: this.getAuthHeaders(),
      });
    }
  
}
