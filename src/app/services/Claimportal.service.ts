import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:5033/api/User';

  constructor(private http: HttpClient) {}

  private getJsonHeaders(): HttpHeaders {
    return new HttpHeaders({ 'Content-Type': 'application/json' });
  }

  register(userData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/Register`, userData);
  }

  login(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/Login`, user, {
      headers: this.getJsonHeaders()
    });
  }

  createEmergencyRequest(contactData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/ContactUs`, contactData, {
      headers: this.getJsonHeaders()
    });
  }

  updateUser(id: number, userDetails: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/UpdateUser/${id}`, userDetails);
  }

  uploadDocument(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post(`${this.baseUrl}/UploadDocument`, formData);
  }
}
