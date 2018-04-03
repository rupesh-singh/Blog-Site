import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddblogComponent } from './addblog/addblog.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';



const appRoutes: Routes = [
  {path: '' , component: HomeComponent},
  {path: 'AddBlog' , component: AddblogComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'Login', component: LoginComponent}
  
];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddblogComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
