import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/Claimportal.service';
import { NavigationService } from '../services/navigation.service';
import * as CryptoJS from 'crypto-js';

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

  constructor(private router: Router, private route: ActivatedRoute, private authService: AuthService, public nav:NavigationService) {}

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

    const hashedPassword = CryptoJS.SHA256(this.form.password).toString(CryptoJS.enc.Hex);
  
    const payload = {
      email: this.form.email,
      password: hashedPassword
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

  
}
