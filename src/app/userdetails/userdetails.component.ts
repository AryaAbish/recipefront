import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent {

  user:any
  userdetail:any
  shareuser:any=""
  psw:any
  newpsw:any
  cpsw:any
  pswmath:any=true
  constructor(private rout:Router,private ds:ServiceService){}

  ngOnInit():void{
    if(localStorage.getItem("currentuname")){
      this.user=localStorage.getItem("currentuname")
      // console.log(this.user);
    }
    
  }

  logout(){
    localStorage.removeItem("currentuname")
    this.rout.navigateByUrl("")
  }

  delete(){
    //share data
    this.shareuser=localStorage.getItem("currentuname")
    // console.log(this.shareuser);
    
  }

  cancel(){
    this.shareuser=""
  }
  deleteAccount(event:any){
    // console.log(event);
    this.ds.deleteuser(event).subscribe((result:any)=>{
      alert(`${event} deleted successfully`)
      this.logout()
    })
  }
   
  changepass(){
    if(this.newpsw!=this.cpsw){
      this.pswmath=false
    }
    else{
      this.pswmath=true
      this.ds.changepassword(this.user,this.psw,this.newpsw).subscribe((result:any)=>{
        console.log(result);
        alert(result) 
        location.reload()
      })
    }
  }

}
