import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/Claimportal.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports:[CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  selectedTopic: string = '';
  contactFormData: any = {
    policyNum: '',
    firstName: '',
    lastName: '',
    dob: '',
    claimNumber: '',
    email: '',
    primaryPhone: '',
    otherPhone: '',
    comments: ''
  };

  constructor(private contactService: AuthService) {}

  ngOnInit() {
    const user: any = JSON.parse(localStorage.getItem('user') || 'null');
if (user) {
  this.contactFormData = {
    ...this.contactFormData,
    firstName: user.firstName || '',
    lastName: user.lastName || '',
    email: user.email || '',
    primaryPhone: user.phoneNumber || '',
    dob: user.dateOfBirth ? user.dateOfBirth.split('T')[0] : ''
  };
}

    if (user && Object.keys(user).length > 0) {
      this.contactFormData.firstName = user.firstName;
      this.contactFormData.lastName = user.lastName;
      this.contactFormData.email = user.email;
      this.contactFormData.primaryPhone = user.phoneNumber;
      this.contactFormData.dob = user.dateOfBirth?.split('T')[0];
    }
  }

  onSubmit() {
    debugger;
    if (this.selectedTopic === '1') {
      const payload = {
        ContactUsTypeName: 'Emergency Travel Assistance',
        PolicyNumber: this.contactFormData.policyNum,
        FirstName: this.contactFormData.firstName,
        LastName: this.contactFormData.lastName,
        Email: this.contactFormData.email,
        PhoneNumber: this.contactFormData.primaryPhone,
        Request: this.contactFormData.comments,
        DateOfBirth: new Date(this.contactFormData.dob).toISOString(),
        ClaimNumber: this.contactFormData.claimNumber
      };

      this.contactService.createEmergencyRequest(payload).subscribe({
        next: (res) => {
          alert('Emergency travel request submitted successfully!');
        },
        error: (err) => {
          console.error('Error submitting request:', err);
          alert('Something went wrong while submitting your request.');
        }
      });
    }
  }

  onFileChange(event: any) {
    const files = event.target.files;
    if (files.length > 10) {
      alert("You can only upload a maximum of 10 files.");
      return;
    }

    let totalSize = 0;
    for (let i = 0; i < files.length; i++) {
      totalSize += files[i].size;
    }

    if (totalSize > 50 * 1024 * 1024) {
      alert("Combined file size cannot exceed 50 MB.");
    }
  }
}
