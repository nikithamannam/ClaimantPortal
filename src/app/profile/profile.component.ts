import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/Claimportal.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports:[CommonModule, FormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  contactFormData: any = {
    firstName: '',
    lastName: '',
    dob: '',
    email: '',
    primaryPhone: '',
  };

  constructor (private authService:AuthService){}
}
