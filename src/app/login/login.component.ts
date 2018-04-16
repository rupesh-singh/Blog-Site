import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';
import {ValidateService} from '../services/validate.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  username: String;
  password: String;

  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService,
    private validateService: ValidateService
  ) { }

  ngOnInit() {
  }

  onLoginSubmit() {
    console.log('chill working');
    const user = {
      email: this.username,
      password: this.password
    };

    if (!this.validateService.validateEmail(user.email)) {
      this.flashMessage.show('Please use a valid email', {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }
    

    this.authService.authenticateUser(user).subscribe(data => {
      console.log('chill working2');
      if (data['success']) {
        console.log('chill working3');
        this.authService.storeUserData(data['token'], data['user']);
        this.flashMessage.show('You are now logged in', {
          cssClass: 'alert-success',
          timeout: 5000});
          
          this.router.navigate(['']);
      } else {
        this.flashMessage.show(data['msg'], {
          cssClass: 'alert-danger',
          timeout: 5000});
        this.router.navigate(['Login']);
      }
    });
  }

}
