import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      this.user = JSON.parse(storedUser);
      this.getUserDetails(this.user.email);
    }
  }

  getUserDetails(email: string) {
    this.http.get(`https://your-api-url/api/Auth/GetUserByEmail?email=${email}`)
      .subscribe((res: any) => {
        this.user = res;
      });
  }
}
