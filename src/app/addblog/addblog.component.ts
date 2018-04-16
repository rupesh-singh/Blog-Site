import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service'
import {Router} from '@angular/router';

@Component({
  selector: 'app-addblog',
  templateUrl: './addblog.component.html',
  styleUrls: ['./addblog.component.css']
})
export class AddblogComponent implements OnInit {

  name: any;
  date: any;
  title: any;
  content: any;

  constructor(
    private AS: AuthService,
    private router: Router,
//    private TS: BlogService
  ) { }

  ngOnInit() {
}

  addblognow()
  {
    console.log(this.name);
    var Blog={
      "name":this.name,
      "date":this.date,
      "title":this.title,
      "content":this.content
  }
    console.log(Blog);
    this.AS.addblog(Blog).subscribe(data=>{
      if(data['success']==true)
      {
        console.log("blogAdded");
        this.router.navigate(['']);
      }
      else
      {
        console.log("BlogNotAdded");
      }
    });
  }


}

