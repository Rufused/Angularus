import { Component, OnInit} from '@angular/core';
import {IUserModel} from "../models/UserModel";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: IUserModel[] = [
    {name:"vasya",age:19,status:false},
    {name:"vasya",age:19,status:true},
    {name:"vasya",age:19,status:false},
    {name:"vasya",age:19,status:true},
    {name:"vasya",age:19,status:false},
    {name:"vasya",age:19,status:true},
    {name:"vasya",age:19,status:false},
    {name:"vasya",age:19,status:true},
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
