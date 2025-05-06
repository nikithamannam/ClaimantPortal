import { Component, DoCheck} from '@angular/core';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-header',
  imports:[NgIf],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements DoCheck {
  isLoggedIn = false;
  userData: any={
    firstN :' ',
    lastN :' '
  } ;

  constructor(public nav:NavigationService) {}

  ngDoCheck(): void {
    const user: any = JSON.parse(localStorage.getItem('user') || 'null');
    if (user) {
      this.userData.firstN = user.firstName || ' ';
      this.userData.lastN  =user.lastName || ' ';
      this.isLoggedIn = true;
    }
  }

  logout(): void {
    localStorage.removeItem('user');
    this.isLoggedIn = false;
    this.nav.toLogin();
  }

}
