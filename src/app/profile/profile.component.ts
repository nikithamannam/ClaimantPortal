import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/Claimportal.service'; 

@Component({
  selector: 'app-profile',
  imports:[FormsModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userData: any = {
    firstName: '',
    lastName: '',
    primaryPhone: '',
    otherPhone: '',
    dob: '',
    language: '',
    email: '',
    address1: '',
    contactPhone: '',
    isPrimary: false
  };
  userId: number | null = null;

  ngOnInit(): void {
    const user: any = JSON.parse(localStorage.getItem('user') || 'null');
    if (user) {
      this.userId = user.userId;
      this.userData = {
        ...this.userData,
        firstName: user.firstName || '',
        lastName: user.lastName || '',
        email: user.email || '',
        primaryPhone: user.phoneNumber || '',
        dob: user.dateOfBirth ? user.dateOfBirth.split('T')[0] : ''
      };
    }
    
        if (user && Object.keys(user).length > 0) {
          this.userData.firstName = user.firstName;
          this.userData.lastName = user.lastName;
          this.userData.email = user.email;
          this.userData.primaryPhone = user.phoneNumber;
          this.userData.dob = user.dateOfBirth?.split('T')[0];
        }
  }
  constructor(private authService: AuthService) {}
   onUpdate(): void {
    if (!this.userId) {
      alert('User ID not found. Cannot update.');
      return;
    }

 
  const updatePayload = {
  FirstName: this.userData.firstName,
  LastName: this.userData.lastName,
  PhoneNumber: this.userData.primaryPhone,
  OtherPhone: this.userData.otherPhone ?? '',
  DateOfBirth: this.userData.dob,
  Email: this.userData.email,
  Address: this.userData.address1 ?? '',
};


    debugger;

    this.authService.updateUser(this.userId, updatePayload).subscribe({
      next: (response) => {
        alert('Information updated successfully!');
        const updatedUser = { ...JSON.parse(localStorage.getItem('user') || '{}'), ...this.userData };
        localStorage.setItem('user', JSON.stringify(updatedUser));
      },
      error: (err) => {
        alert('Error updating user information: ' + err.message);
      }
    });
  }

  onCancel(): void {
    const storedData = localStorage.getItem('userData');
    if (storedData) {
      this.userData = JSON.parse(storedData);
    }
  }
}
