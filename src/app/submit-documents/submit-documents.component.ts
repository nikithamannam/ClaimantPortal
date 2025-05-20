import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/Claimportal.service';

@Component({
  selector: 'app-submit-documents',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './submit-documents.component.html',
  styleUrls: ['./submit-documents.component.css'],
})
export class SubmitDocumentsComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) {}

  filesToUpload: File[] = [];
  claimType: string = '';

  formData: any = {
    submitType: '',
    firstName: '',
    lastName: '',
    dob: '',
    claimNumber: '',
    email: '',
    primaryPhone: '',
    otherPhone: '',
    claimTypeMedical: false,
    claimTypeNonMedical: false,
    atTravel: null,
    seekingMedicalCare: null,
    comments: ''
  };

  claimDocuments: { [key: string]: string[] } = {
    '1': [
      'ITEMIZED RECEIPTS FOR ALL BILLS AND INVOICES',
      'PROOF OF PAYMENT',
      'MEDICAL RECORDS INCLUDING COMPLETE DIAGNOSIS BY ATTENDING PHYSICIAN',
      'PROOF OF TRAVEL',
      'POLICE ACCIDENT REPORT - MVA INCLUDING REPORT NUMBER (IF APPLICABLE)',
      'PHARMACY RECEIPT',
      'PHARMACY TRANSACTION RECEIPT',
      'PROOF OF ARRIVAL TO CANADA',
      'OTHER SUPPORTING DOCUMENTS'
    ],
    '2': [
      'ITEMIZED RECEIPTS FOR ALL BILLS AND INVOICES',
      'PROOF OF PAYMENT',
      'MEDICAL RECORDS INCLUDING COMPLETE DIAGNOSIS BY ATTENDING PHYSICIAN',
      'PROOF OF TRAVEL',
      'POLICE ACCIDENT REPORT - MVA INCLUDING REPORT NUMBER (IF APPLICABLE)',
      'PHARMACY RECEIPT',
      'PHARMACY TRANSACTION RECEIPT',
      'OTHER SUPPORTING DOCUMENTS'
    ],
    '3': [
      'MEDICAL CERTIFICATE',
      'DEATH CERTIFICATE',
      'BOOKING INVOICE',
      'AIRLINE TICKET',
      'PROOF OF CANCELLATION',
      'REFUND STATEMENT',
      'PROOF OF EVENT',
      'PROOF OF PAYMENT',
      'PROOF OF PAYMENT - INTERRUPTION',
      'NEW BOARDING PASSES',
      'OTHER SUPPORTING DOCUMENTS'
    ],
    '4': [
      'BAGGAGE CONTENTS LIST',
      'DAMAGED LUGGAGE REPAIR RECEIPT',
      'PROPERTY IRREGULARITY REPORT',
      'PROOF OF SETTLEMENT',
      'CUSTODY REPORT',
      'PROOF OF DELIVERY',
      'RECEIPTS',
      'FLIGHT DELAY REPORT',
      'OTHER SUPPORTING DOCUMENTS'
    ],
    '5': [
      'INVOICE',
      'ACCOUNT COPY',
      'POLICE REPORT',
      'RECEIPTS',
      'OTHER SUPPORTING DOCUMENTS'
    ],
    '6': ['OTHER SUPPORTING DOCUMENTS'],
    '7': ['OTHER SUPPORTING DOCUMENTS'],
    '8': ['OTHER SUPPORTING DOCUMENTS']
  };

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('user') || 'null');

    if (user) {
      this.formData.firstName = user.firstName || '';
      this.formData.lastName = user.lastName || '';
      this.formData.email = user.email || '';
      this.formData.primaryPhone = user.phoneNumber || '';
      this.formData.dob = user.dateOfBirth ? user.dateOfBirth.split('T')[0] : '';
    }
  }

  onSubmit(): void {
    const contactPayload = {
      ContactUsTypeName: this.formData.submitType === '1' ? 'Completed Claim Forms' : 'Existing Claim Documents',
      PolicyNumber: '',
      FirstName: this.formData.firstName,
      LastName: this.formData.lastName,
      Email: this.formData.email,
      PhoneNumber: this.formData.primaryPhone,
      Request: this.formData.comments,
      DateOfBirth: this.formData.dob,
      ClaimNumber: this.formData.claimNumber,
      ClaimType: this.formData.claimType === 'medical' ? 'Medical' : 'Non-Medical',
      IsAtTravel: this.formData.atTravel,
      IsSeekingMedicalCare: this.formData.seekingMedicalCare,
      IsTripRelated: null
    };

    this.authService.createEmergencyRequest(contactPayload).subscribe({
      next: () => {
        if (this.filesToUpload.length > 0) {
          this.uploadFilesSequentially(0);
        } else {
          alert('Contact submitted successfully, no files to upload.');
        }
      },
      error: (err) => {
        alert('Error submitting contact: ' + err.message);
      }
    });
  }

  uploadFilesSequentially(index: number): void {
    if (index >= this.filesToUpload.length) {
      alert('All documents uploaded successfully!');
      return;
    }

    const file = this.filesToUpload[index];
    this.authService.uploadDocument(file).subscribe({
      next: () => {
        this.uploadFilesSequentially(index + 1);
      },
      error: (err) => {
        alert(`Error uploading file ${file.name}: ` + err.message);
      }
    });
  }

  onFileChange(event: any): void {
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
      return;
    }
    this.filesToUpload = Array.from(files);
  }

  navigateToStartClaim(): void {
    this.router.navigate(['/start-claim']);
  }
}
