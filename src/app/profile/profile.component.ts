import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
    homePhone: '',
    mobilePhone: '',
    dob: '',
    language: '',
    email: '',
    address1: '',
    contactPhone: '',
    isPrimary: false
  };

  ngOnInit(): void {
    const user: any = JSON.parse(localStorage.getItem('user') || 'null');
    if (user) {
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

  onUpdate(): void {
    localStorage.setItem('userData', JSON.stringify(this.userData));
    alert('Information updated!');
  }

  onCancel(): void {
    const storedData = localStorage.getItem('userData');
    if (storedData) {
      this.userData = JSON.parse(storedData);
    }
  }
}
