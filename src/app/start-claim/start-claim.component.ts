import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-start-claim',
  imports: [CommonModule, FormsModule],
  templateUrl: './start-claim.component.html',
  styleUrl: './start-claim.component.css'
})
export class StartClaimComponent {
  selectedTopic: string = '';
  isSeekingMedicalAttention: string = '';
  isTraveling: string = '';
  selectedProvince: string = '';
  selectedInsurance: string = '';
  provinces: string[] = [
    'Alberta',
    'British Columbia',
    'Manitoba',
    'Newfoundland and Labrador',
    'Ontario',
    'Quebec',
    'Saskatchewan',
    'All others'
  ];

  insurance: string[]=[
    'Group Insurance',
    'Credit Card Insurance',
    'Purchased Insurance',
    'Others'
  ];

}
