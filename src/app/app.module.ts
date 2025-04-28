import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component'; 
import { LoginComponent } from './login/login.component';
import { StartClaimComponent } from './start-claim/start-claim.component';
import { SubmitDocumentsComponent } from './submit-documents/submit-documents.component';
import { FaqComponent } from './faq/faq.component';
import { ContactComponent } from './contact/contact.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';

import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/Claimportal.service';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginComponent,
    StartClaimComponent,
    SubmitDocumentsComponent,
    FaqComponent,
    ContactComponent,
    RegisterComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,          
    ReactiveFormsModule,   
    HttpClientModule,
    CommonModule       
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
