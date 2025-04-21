import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomepageComponent } from "./homepage/homepage.component";
import { LoginComponent } from "./login/login.component";
import { StartClaimComponent } from "./start-claim/start-claim.component";
import { SubmitDocumentsComponent } from "./submit-documents/submit-documents.component";
import { ContactComponent} from "./contact/contact.component";
import { FaqComponent } from "./faq/faq.component";
import { RegisterComponent } from "./register/register.component";
import { DashboardComponent } from "./dashboard/dashboard.component";


const routes: Routes=[
    { path: '', component: HomepageComponent } ,
    { path: '**', redirectTo: '' } ,
    { path: 'start-claim', component: StartClaimComponent },
    { path: 'submit-documents', component: SubmitDocumentsComponent },
    { path: 'faq', component: FaqComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent},
    { path: 'homepage', component: HomepageComponent},
    {path: 'dashboard', component: DashboardComponent},
    // Default route
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule {}