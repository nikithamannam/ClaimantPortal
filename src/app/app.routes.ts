import { Routes } from '@angular/router';
import { HomepageComponent } from "./homepage/homepage.component";
import { LoginComponent } from "./login/login.component";
import { StartClaimComponent } from "./start-claim/start-claim.component";
import { SubmitDocumentsComponent } from "./submit-documents/submit-documents.component";
import { ContactComponent} from "./contact/contact.component";
import { FaqComponent } from "./faq/faq.component";
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
    { path: '', component: HomepageComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent},
    /*{ path: 'start-claim', component: StartClaimComponent },
    { path: 'submit-documents', component: SubmitDocumentsComponent },
    { path: 'faq', component: FaqComponent },*/
     {path : 'dashboard', component: DashboardComponent},
    { path: 'contact', component: ContactComponent },
    { path: 'profile', component: ProfileComponent},
    { path: '**', redirectTo: '' }
  ];
  
