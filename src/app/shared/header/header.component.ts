import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-header',
  imports:[NgIf],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isLoggedIn = false;
  username = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    const user = localStorage.getItem('user');
    if (user) {
      const userObj = JSON.parse(user);
      this.username = userObj.FirstName;
      this.isLoggedIn = true;
    }
  }

  logout(): void {
    localStorage.removeItem('user');
    this.isLoggedIn = false;
    this.username = '';
    this.router.navigate(['/login']);
  }

  navigateToHomepage() {
    this.router.navigate(['/homepage']);
  }

  navigateToContact() {
    this.router.navigate(['/contact']);
  }
}
