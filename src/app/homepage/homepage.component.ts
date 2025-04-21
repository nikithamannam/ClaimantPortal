import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-homepage',
  standalone: true,
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
  constructor(private router: Router) { }
  
   //navigating to login form directly
   navigateToLogin() {
    this.router.navigate(['/login'], { fragment: 'loginSection' });
  }
  
  
  navigateToContact() {
    this.router.navigate(['/contact']);
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
  
  navigateToClaimStatus() {
    this.router.navigate(['/claim-status']);
  }
  
  switchToFrench() {
    console.log('Switching to French');
}
}
