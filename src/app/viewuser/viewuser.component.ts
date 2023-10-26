import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.css']
})
export class ViewuserComponent {
  userdetails:any

  constructor(private rout:Router,private ds:ServiceService){}

  ngOnInit():void{
    this.ds.viewuser().subscribe((data)=>{
      // console.log(data);
      this.userdetails=data
    })
  }

  logout(){
    localStorage.removeItem("currentuname")
    this.rout.navigateByUrl("")
  }

  delete(uname:any){
    // console.log(uname);
    this.ds.deleteuser(uname).subscribe((result:any)=>{
      // console.log(uname);
      alert("User Deleted")
    })
    this.rout.navigateByUrl("admin/viewuser")
  }

  // block(blocked:any){
  //   this.userdetails.blocked="true"
  //   // console.log(this.userdetails.blocked);    
  // }

}
