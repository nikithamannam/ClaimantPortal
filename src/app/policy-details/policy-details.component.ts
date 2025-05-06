import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-policy-details',
  imports: [CommonModule, FormsModule],
  templateUrl: './policy-details.component.html',
  styleUrl: './policy-details.component.css'
})
export class PolicyDetailsComponent {
  policyNum: any ='';
  leadInsured: any ='';
  org: any='';
  dependants: any='';
}
