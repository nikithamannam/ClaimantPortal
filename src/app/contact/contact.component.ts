import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/Claimportal.service';
import { SubmitDocumentsComponent } from '../submit-documents/submit-documents.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, SubmitDocumentsComponent],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  schemas: [NO_ERRORS_SCHEMA],
})
export class ContactComponent implements OnInit {
  selectedTopic: string = '';
  selectedFiles: File[] = [];

  contactFormData: any = {
    policyNum: '',
    firstName: '',
    lastName: '',
    dob: '',
    claimNumber: '',
    email: '',
    primaryPhone: '',
    otherPhone: '',
    comments: '',
    claimType: '',
    isAtTravel: null,
    isSeekingMedicalCare: null,
    isTripRelated: null
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
        dob: user.dateOfBirth ? user.dateOfBirth.split('T')[0] : '',
        claimType: user.claimType || '',
        isAtTravel: user.isAtTravel ?? null,
        isSeekingMedicalCare: user.isSeekingMedicalCare ?? null,
        isTripRelated: user.isTripRelated ?? null
      };
    }
  }

  onSubmit() {
    debugger;

    if (!this.selectedTopic) {
      alert('Please select a contact topic.');
      return;
    }

    const payload = {
      ContactUsTypeName: this.getTopicName(this.selectedTopic),
      PolicyNumber: this.contactFormData.policyNum,
      FirstName: this.contactFormData.firstName,
      LastName: this.contactFormData.lastName,
      Email: this.contactFormData.email,
      PhoneNumber: this.contactFormData.primaryPhone,
      Request: this.contactFormData.comments,
      DateOfBirth: new Date(this.contactFormData.dob).toISOString(),
      ClaimNumber: this.contactFormData.claimNumber,
      ClaimType: this.contactFormData.claimType,
      IsAtTravel: this.contactFormData.isAtTravel,
      IsSeekingMedicalCare: this.contactFormData.isSeekingMedicalCare,
      IsTripRelated: this.contactFormData.isTripRelated
    };

    this.contactService.createEmergencyRequest(payload).subscribe({
      next: (res) => {
        alert('Your message has been sent successfully.');
      },
      error: (err) => {
        console.error('Error submitting request:', err);
        alert('Something went wrong while submitting your request.');
      }
    });
  }

  getTopicName(value: string): string {
    switch (value) {
      case '1': return 'Emergency Travel Assistance';
      case '2': return 'Appeals';
      case '3': return 'Other';
      default: return 'General Inquiry';
    }
  }

  onFileChange(event: any) {
    const files = Array.from(event.target.files) as File[];

    if (files.length > 10) {
      alert("You can only upload a maximum of 10 files.");
      return;
    }

    const totalSize = files.reduce((sum, file) => sum + file.size, 0);
    if (totalSize > 50 * 1024 * 1024) {
      alert("Combined file size cannot exceed 50 MB.");
      return;
    }

    this.selectedFiles = files;
  }

  removeFile(index: number) {
    this.selectedFiles.splice(index, 1);
  }
}
