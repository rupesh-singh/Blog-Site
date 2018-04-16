import { Injectable } from '@angular/core';
import {HttpClient , HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {tokenNotExpired} from 'angular2-jwt';

@Injectable()
export class AuthService {
  user: any;
  authToken: any;
  blog: any;
  constructor(private http: HttpClient
  ) { }

registerUser(user) {
    return this.http.post ('http://localhost:3000/users/register', user, {
    headers: new HttpHeaders().set('content-type', 'application/json'),
  });
  }


  authenticateUser(user) {
    console.log('also working');
    console.log(user);
    
    return this.http.post ('http://localhost:3000/users/authenticate', user, {
    headers: new HttpHeaders().set('content-type', 'application/json'),
  });
  }

  storeUserData(token, user) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }
  
  loggedIn() {
    // console.log('loggedIn');
    return tokenNotExpired('id_token');
  }

  getUser()
  {
    //console.log("1"+this.user);
    //console.log(localStorage.getItem('user'));
    return localStorage.getItem('user');
  }

  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }

  addblog(blog:any)
  {
    return this.http.post('http://localhost:3000/blog/add',blog);
  }

  searchblog(name:any)
  {
    return this.http.get('http://localhost:3000/blog/search?name='+name);
  }

  Load()
  {
    return this.http.get('http://localhost:3000/blog/Load');
  }

  setblog(blog:any)
  {
    this.blog=blog;
  }

  getblog()
  {
    return this.blog;
  }


}
