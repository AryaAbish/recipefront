import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  searchTerm:any=""
  searchKey:any=""
  rname:any
  allrecipies:any=[]
  user:any=""
  message:any
  saved:any=[]
  
  constructor(private rout:Router,private ds:ServiceService,private ar:ActivatedRoute){}

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

  myprofile(){
    this.rout.navigateByUrl("user/userdetails")
  }

  sendmessage(){
    // console.log(this.message);
    this.ds.sendmessage(this.user,this.message).subscribe(data=>{
      alert(data)
    })
  }

  viewwishlist(){
    this.ds.viewwishlist(this.user).subscribe((result)=>{
      // console.log(result);
      this.saved=result
    })
  }

  deletewishlist(rname:any){
    this.ds.deletewishlist(this.user,rname).subscribe((result:any)=>{
      // console.log(result);
      location.reload()
    })
  }

  viewitem(rname:any){
   this.rout.navigateByUrl(`userview/${rname}`)
  }

}
