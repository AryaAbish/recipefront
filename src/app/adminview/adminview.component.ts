import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-adminview',
  templateUrl: './adminview.component.html',
  styleUrls: ['./adminview.component.css']
})
export class AdminviewComponent {

  rname:any
  rdata:any
  rdetail:any=[]
  comment:any
  com:any
  uname:any
  user:any
  constructor(private rout:Router,private ds:ServiceService, private ar:ActivatedRoute){}

  ngOnInit():void{

    this.uname=localStorage.getItem("currentuname")
// console.log(this.uname);

    this.ar.params.subscribe((data:any)=>{
      this.rdata=data.id
          // console.log(this.rdata);
    })
    this.ds.singlerecipieApi(this.rdata).subscribe((data:any)=>{
      // console.log(data);
      this.rdetail=data
      // console.log(this.rdetail);
      this.comment=this.rdetail.comment

    })
  }

  delete(){
    this.ds.deleterecipies(this.rdata).subscribe((result:any)=>{
      alert("Recipe Deleted")
      this.rout.navigateByUrl("adminhome")
    })
  }

  logout(){
    localStorage.removeItem("currentuname")
    this.rout.navigateByUrl("")
  }

  submitcomment(){
   // console.log(this.com);
if(this.com!=null){
  this.ds.comment(this.rdata,this.com,this.uname).subscribe((result:any)=>{
  // console.log(result);
  // alert("Comment Added")
  location.reload()
})
}
else{
  alert("Enter Comment")
}
}

deletecomment(user:any,comment:any){
  this.ds.deletecomment(comment,user,this.rdata)
  .subscribe((result:any)=>{
    // console.log(result);
  })
  location.reload()
}

}
