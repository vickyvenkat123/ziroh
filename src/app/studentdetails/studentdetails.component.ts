
import { Component, OnInit } from '@angular/core';

import { UserService } from '../user.service';

@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.css']
})
export class StudentdetailsComponent implements OnInit {
students:any ;
  constructor(private user : UserService) { }

  ngOnInit(){
    this.user.getUsers().subscribe(res=>{
      this.students=res
      console.log(res);
    })
    
  }

}
