import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {

  rname: any
  no:any
  dur:any
  des:any
  img:any
  cat:any
  rdata: any
  rdetail: any = []
  rid:any
  constructor(private ar: ActivatedRoute, private ds: ServiceService, private rout: Router) { }

  ngOnInit(): void {
    this.ar.params.subscribe((data: any) => {
      // console.log(data);   
      this.rdata = data.id
      // console.log(this.rdata);  //name
    })
    
    this.ds.singlerecipieApi(this.rdata).subscribe((data: any) => {
      // console.log(data);
      this.rdetail = data
      // console.log(this.rdetail);  //object
      this.rid=this.rdetail._id
      // console.log(this.rid);   //_id
      this.rname=this.rdetail.rname
      // console.log(this.rname);
      this.no=this.rdetail.no
      // console.log(this.no);
      this.dur=this.rdetail.dur
      // console.log(this.dur);
      this.des=this.rdetail.des
      // console.log(this.des);
      this.img=this.rdetail.img
      // console.log(this.img);
      this.cat=this.rdetail.cat
      // console.log(this.cat);
    })
  }

    updateData(){
      this.ds.editdetails(this.rid,this.rdetail).subscribe((result:any)=>{
        // console.log(result);
        alert("Updated")
        location.reload()
      })
      this.rout.navigateByUrl("adminhome")
  }

  logout(){
    localStorage.removeItem("currentacno")
    localStorage.removeItem("currentuname")
    this.rout.navigateByUrl("")
  }
}
