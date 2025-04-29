import { Component, DoCheck} from '@angular/core';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';

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

  constructor(private router: Router) {}

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
    this.router.navigate(['/login']);
  }

  navigateToHomepage() {
    this.router.navigate(['/homepage']);
  }

  navigateToContact() {
    this.router.navigate(['/contact']);
  }

  navigateToProfile(){
    this.router.navigate(['/profile']);
  }

  navigateToLogin(){
    this.router.navigate(['/login'],{fragment:'loginSection'});
  }

  navigateToStartClaim() {
    this.router.navigate(['/start-claim']);
  }
  
  navigateToSubmitDocuments() {
    this.router.navigate(['/submit-documents']);
  }
  
  navigateToFAQ() {
    this.router.navigate(['/faq']);
  }

  navigateToDashboard(){
    this.router.navigate(['/dashboard']);
  }
}
