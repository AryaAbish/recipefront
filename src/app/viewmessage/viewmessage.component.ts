import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-viewmessage',
  templateUrl: './viewmessage.component.html',
  styleUrls: ['./viewmessage.component.css']
})
export class ViewmessageComponent {

  message:any
  constructor(private rout:Router,private ds:ServiceService){}

  ngOnInit():void{
    this.ds.viewmessages().subscribe((data:any)=>{
      // console.log(data);
      this.message=data
    })
  }

  logout(){
    localStorage.removeItem("currentuname")
    this.rout.navigateByUrl("")
  }

  deletemsg(uname:any,message:any){
    this.ds.deletemsg(uname,message).subscribe((result:any)=>{
      // console.log(result);
      alert(result)
      location.reload()
    })
  }
}
