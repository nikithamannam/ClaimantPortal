import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../services/Claimportal.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import * as CryptoJS from 'crypto-js';

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
  
  finishRegistration(regForm: any) {
    // Mark all controls as touched to trigger validation messages
    Object.keys(regForm.controls).forEach(field => {
      const control = regForm.controls[field];
      control.markAsTouched({ onlySelf: true });
    });
  
    if (regForm.invalid || this.form.email !== this.form.emailConfirm || this.form.password !== this.form.confirmPassword) {
      return; // Stop if invalid
    }
  
    const dobString = `${this.form.year}-${this.pad(this.form.month)}-${this.pad(this.form.day)}`;
    const dob = new Date(dobString);

     const hashedPassword = CryptoJS.SHA256(this.form.password).toString(CryptoJS.enc.Hex);
  
    const registrationPayload = {
      firstName: this.form.firstName,
      lastName: this.form.lastName,
      email: this.form.email,
      phoneNumber: this.form.phone,
      password: hashedPassword,
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
    const num = typeof value === 'string' ? parseInt(value, 10) : value;
    return num < 10 ? `0${num}` : `${num}`;
  }
  
  
  


}
