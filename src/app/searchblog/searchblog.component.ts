import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-searchblog',
  templateUrl: './searchblog.component.html',
  styleUrls: ['./searchblog.component.css']
})
export class SearchblogComponent implements OnInit {
name: any;
blog: any[];
flag: any;
  constructor(
    private TS: AuthService, private router: Router
  ) { }

  ngOnInit() {
    this.flag=0;
    
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
