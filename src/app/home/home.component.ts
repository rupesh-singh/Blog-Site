import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'BlogSite';
  blog: any[];
  flag: any;
  name: any;
  constructor( private TS: AuthService, private router: Router ) { }

  ngOnInit() {
    this.flag=0;
    this.TS.Load().subscribe(data=>{
      console.log(data);
      if(data['success']==true)
      {
        this.blog=data['blog'];
      }
    });
  }

  searchTest()
  {
    console.log(this.name);
    this.TS.searchblog(this.name).subscribe(data=>{
      console.log(data);
      if(data['success']==true)
      {
        console.log('hii success');
       this.blog=data['blog'];
       console.log(this.blog);
       this.flag=1; 
       
      }
    })
  }
  

}
