import { Component } from '@angular/core';
import * as moment from 'moment';


@Component({
  selector: 'app-root',
  template : `
  <head>
  <style>
  .div1{
    background-color : #29d3e6;
    padding: 0px 25px 25px 100px;
    border-style: dotted;
    margin : 25px 500px 75px 300px;
  }
  #exit{
  position: relative;
  left: 583px;
  border: 6px solid #d60f0f;
  }
  </style>
  </head>
  <h1>Hi I am {{name}}</h1>
  <button (click)="onclick()">{{btnstr}}</button>
  <br><br>
  <table *ngIf ="flag">
  <tr>
    <th>Name</th>
  </tr>
  <tr *ngFor = "let row of data; let i = index">
    <td>{{row.Name}}</td>
    <td><button (click)="viewidentity(i)">View</button></td>
  </tr>
  </table>
  <div class="div1" *ngIf = "flag && flag2 && flag3">
  <button id="exit" (click)="exit()">X</button>
  <h1>Id : {{iId}}</h1>
  <h1>Name : {{iName}}</h1>
  <h1>Country : {{iCountry}}</h1>
  <h1>DOB : {{iDob}}</h1>
  </div>
  <h1>{{momenttest()}}</h1>
  <h1><{{k}}</h1>
  `
})
export class AppComponent {
  name = "Ankit"
  btnstr = "Show Data";
  iName:string="";
  iId:string="";
  iCountry = "";
  iDob = "";
  constructor(){
  }
  public headers = ["Id","Name","Country"];
  public data =[
    {
      Id : "1",
      Name : "Ankit",
      Country : "India",
      Dob : "05/14/1999"
    },
    {
      Id : "2",
      Name : "Milind",
      Country : "America", 
      Dob : "1997/14/07"
    },
    {
      Id : "3",
      Name : "Jayant",
      Country : "Russia",
      Dob : "15/1998/03"
    }
  ];
  public flag:boolean =false;
  flag2:boolean=false;
  onclick(){
    this.flag = !this.flag;
    if(this.flag)
      this.btnstr = "Close Data";
    else
      this.btnstr = "Show Data";
      this.flag2=false;
    }
    index:number=-1;
    obj :any;
    viewidentity(i:number){
      this.flag3 = true;
      this.flag2=true;
      this.obj = this.data[i];
      this.iName = this.obj.Name;
      this.iId = this.obj.Id;
      this.iCountry = this.obj.Country;
      if(i==0){
        this.iDob = moment(this.obj.Dob,"MM/DD/YYYY").format("DD/MM/YYYY");
      }
      else if(i==1){
        this.iDob = moment(this.obj.Dob,"YYYY/DD/MM").format("DD/MM/YYYY");
      }
      else if(i==2){
        this.iDob = moment(this.obj.Dob,"DD/YYYY/MM").format("DD/MM/YYYY");
      }
      //this.iDob = this.obj.Dob;
    }
    flag3:boolean= true;
    exit(){
      this.flag3 = false
    }
    k:any;
    momenttest(){
    this.k = moment(new Date().toDateString()).format("DD/MM/YYYY")
  }
}

