import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-userview',
  templateUrl: './userview.component.html',
  styleUrls: ['./userview.component.css']
})
export class UserviewComponent {

  rname: any
  rdata: any
  rdetail: any = []
  comment: any
  com: any
  uname: any
  constructor(private rout: Router, private ds: ServiceService, private ar: ActivatedRoute) { }

  ngOnInit(): void {
    this.ar.params.subscribe((data: any) => {
      // console.log(data.id);
      this.rdata = data.id
      // console.log(this.rdata);
      this.uname = localStorage.getItem("currentuname")
      // console.log(this.uname);
    })
    this.ds.singlerecipieApi(this.rdata).subscribe((data: any) => {
      // console.log(data);
      this.rdetail = data
      // console.log(this.rdetail);
      // console.log(this.rdetail.comment);
      this.comment = this.rdetail.comment
    })
  }
  logout() {
    localStorage.removeItem("currentuname")
    this.rout.navigateByUrl("")
  }

  submitcomment() {
    // console.log(this.com);
    if (this.com != null) {
      this.ds.comment(this.rdata, this.com, this.uname).subscribe((result: any) => {
        // console.log(result);
        location.reload()
      })
    }
    else {
      alert("Enter Comment")
    }
  }

  wishlist(){
    this.ds.wishlist(this.uname,this.rdata,this.rdetail.img).subscribe(result=>{
      // console.log(result);
      alert(result)
    },result=>{
      alert(result.error);
    })
  }

}
