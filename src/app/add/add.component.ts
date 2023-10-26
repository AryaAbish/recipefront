import { Component } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  addrecipeform=this.fb.group({
    rname:['',[Validators.required,Validators.pattern('[a-zA-Z0-9\\s]+')]],
    no:['',[Validators.required,Validators.pattern('[0-9]+')]],
    dur:['',[Validators.required]],
    des:['',[Validators.required]],
    img:['',[Validators.required]],
    cat:['',[Validators.required]]
  })

  constructor(private ds:ServiceService,private fb:FormBuilder,private rout:Router){}

  ngOnInit():void{}

  addrecipe(){
    if(this.addrecipeform.valid){
      var path=this.addrecipeform.value
      var rname=path.rname
      // console.log(rname);
      var dur=path.dur
      var no=path.no
      var img=path.img
      var des=path.des
      var cat=path.cat
      // console.log(no);
      // console.log(img);
      // console.log(des);
      this.ds.addrecipesApi(rname,no,dur,des,img,cat).subscribe((response:any)=>{
        alert("New recipe added")
        this.rout.navigateByUrl("adminhome")
      },
      response=>{
        alert(response.error)
      })
    }
    else{
      alert("Invalid Form")
    }
  }

  back(){
    this.rout.navigateByUrl("adminhome")
  }

  
  logout(){
    localStorage.removeItem("currentuname")
    this.rout.navigateByUrl("")
  }
}
