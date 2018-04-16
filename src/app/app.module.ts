import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FlashMessagesModule} from 'angular2-flash-messages';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddblogComponent } from './addblog/addblog.component';
import { HomeComponent } from './home/home.component';
import {FormsModule} from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import {HttpClientModule} from '@angular/common/http';
import {AuthService} from './services/auth.service';
import {ValidateService} from './services/validate.service';
import { AuthGuard } from './guards/auth.guard';
import { SearchblogComponent } from './searchblog/searchblog.component';


const appRoutes: Routes = [
  {path: '' , component: HomeComponent},
  {path: 'AddBlog' , component: AddblogComponent,canActivate: [AuthGuard]},
  {path: 'signup', component: SignupComponent},
  {path: 'Login', component: LoginComponent},
  {path: 'Searchblog',component: SearchblogComponent}
  
];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddblogComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    SearchblogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule.forRoot()
  ],
  providers: [AuthService, ValidateService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
