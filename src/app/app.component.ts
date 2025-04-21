import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
    localStorage.clear();
    console.log('localStorage cleared on app init');
  }
  //logout
  logout(){
    localStorage.clear();
    this.router.navigate(['/login'],{fragment: 'loginSection'});
  }

  // Navigation methods
  navigateToLogin() {
    this.router.navigate(['/login'], { fragment: 'loginSection' });
  }

  navigateToHomepage() {
    this.router.navigate(['/homepage']);
  }

  navigateToContact() {
    this.router.navigate(['/contact']);
  }
/*
  navigateToStartClaim() {
    this.router.navigate(['/start-claim']);
  }

  navigateToSubmitDocuments() {
    this.router.navigate(['/submit-documents']);
  }

  navigateToFAQ() {
    this.router.navigate(['/faq']);
  }

  navigateToClaimStatus() {
    this.router.navigate(['/claim-status']);
  }
*/
}
