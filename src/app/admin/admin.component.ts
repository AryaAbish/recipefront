import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  searchTerm:any=""
  searchKey:any=""

  allrecipies:any=[]
  user:any=""
  constructor(private rout:Router,private ds:ServiceService){}

  ngOnInit():void{

    if(!localStorage.getItem("currentuname")){
      alert("Please Login")
      this.rout.navigateByUrl("login")
    }

    this.ds.allrecipiesApi().subscribe((data)=>{
      // console.log(data);      
      this.allrecipies=data
    }) 
    
    //subscribe behaviour subject
    this.ds.search.subscribe((item:any)=>{
      // console.log(item);
      this.searchKey=item
    })

    if(localStorage.getItem("currentuname")){
      this.user=localStorage.getItem("currentuname")
      // console.log(this.user);
    }

  }

  search(event:any){
    this.searchTerm=event.target.value
    // console.log(this.searchTerm);

     //send data to behaviour subject object
     this.ds.search.next(this.searchTerm)
  }  

  logout(){
    localStorage.removeItem("currentuname")
    this.rout.navigateByUrl("")
  }

  addrecipies(){
    this.rout.navigateByUrl("admin/addrecipes")
  }

  viewuser(){
    this.rout.navigateByUrl("admin/viewuser")
  }

  viewmessage(){
    this.rout.navigateByUrl("admin/viewmessage")
  }
}

