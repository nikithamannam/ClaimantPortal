import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'claimantPortal';
  constructor(private router: Router) {}

  ngOnInit(): void {}
  //logout
  logout(){
    localStorage.clear();
    this.router.navigate(['/login'],{fragment: 'loginSection'});
  }

}
