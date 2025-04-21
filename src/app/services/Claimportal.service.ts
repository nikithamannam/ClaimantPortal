import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:5033/api/User'; // change this to your actual backend URL

  constructor(private http: HttpClient) {}

  register(userData: any): Observable<any> {
    console.log("Calling backend register API:", this.baseUrl);
    return this.http.post(`${this.baseUrl}/Register`, userData);
  }
  
  login(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/Login`, user, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }
  
  createEmergencyRequest(contactData: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post(
      `${this.baseUrl}/EmergencyTravelAssistance`,
      contactData,
      { headers }
    );
  }

}
