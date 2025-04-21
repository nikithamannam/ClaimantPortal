import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../services/Claimportal.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  constructor(private router: Router, private authService:AuthService) {} 

  form = {
    email: '',
    emailConfirm: '',
    day: '',
    month: '',
    year: '',
    phone: '',
    loginId: '',
    firstName: '',
    lastName: '',
    password: '',
    confirmPassword: '',
    terms: false
  };
  
  finishRegistration() {
      console.log("Clicked FINISH!");
      debugger;
    // Additional client-side validations (if not fully covered by template validations)
    if (this.form.email !== this.form.emailConfirm) {
      alert("Emails do not match.");
      return;
    }

    if (this.form.password !== this.form.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    if (!this.form.terms) {
      alert("You must accept the terms and conditions.");
      return;
    }
    
  const dobString = `${this.form.year}-${this.pad(this.form.month)}-${this.pad(this.form.day)}`;
  const dob = new Date(dobString);

  const registrationPayload = {
    firstName: this.form.firstName,
    lastName: this.form.lastName,
    email: this.form.email,
    phoneNumber: this.form.phone,
    password: this.form.password,
    dateOfBirth: dob.toISOString()
  };
  
    this.authService.register(registrationPayload).subscribe({
      next: (res) => {
        console.log("Registration successful:", res);
        alert("Registration successful!");
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.error("Registration error:", err);
        alert("Registration failed!");
      }
    });
    
  
  }
  pad(value: string | number): string {
    return value.toString().padStart(2, '0');
  }


}
