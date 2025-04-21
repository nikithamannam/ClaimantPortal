import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/Claimportal.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  form = {
    email: '',
    password: '',
    remember: false
  };

  constructor(private router: Router, private route: ActivatedRoute, private authService: AuthService) {}

  ngAfterViewInit(): void {
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        const element = document.getElementById(fragment);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  }

  onLogin() {
    debugger;
    if (!this.form.email || !this.form.password) {
      alert('Please fill in both email and password.');
      return;
    }
  
    const payload = {
      email: this.form.email,
      password: this.form.password
    };
  
    this.authService.login(payload).subscribe({
      next: (res) => {
        console.log('✅ Login successful:', res);
    
        // ✅ Store just the user data
        localStorage.setItem('user', JSON.stringify(res.user));
    
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        console.error('Login failed:', err);
        alert('Login failed! Please check your email and password.');
      }
    });
    
  }
  
  

  clickOnRegister(): void {
    this.router.navigate(['/register']);
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

  navigateToLogin() {
    this.router.navigate(['/login'], { fragment: 'loginSection' });
  }
}
