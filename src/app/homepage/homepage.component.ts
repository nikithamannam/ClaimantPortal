import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NavigationService } from '../services/navigation.service';

@Component({
  selector: 'app-homepage',
  standalone: true,
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
  constructor(public nav:NavigationService) { }
}
