import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(private router:Router) {}

  toLogin(): void {
    this.router.navigate(['/login'], { fragment: 'loginSection' });
  }

  toContactUs(): void {
    this.router.navigate(['/contact']);
  }

  toStartClaim(): void {
    this.router.navigate(['/start-claim']);
  }

  toSubmitDocuments(): void {
    this.router.navigate(['/submit-documents']);
  }

  toFAQ(): void {
    this.router.navigate(['/faq']);
  }

  toClaimStatus(): void {
    this.router.navigate(['/claim-status']);
  }

  toHome(): void {
    this.router.navigate(['/homepage']);
  }

  toProfile(): void{
    this.router.navigate(['/profile'])
  }

  clickOnRegister(): void {
    this.router.navigate(['/register']);
  }
}
