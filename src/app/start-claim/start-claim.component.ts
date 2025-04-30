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
  isSeekingMedicalAttention: string='';

}
