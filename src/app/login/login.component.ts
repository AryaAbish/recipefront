import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ServiceService } from '../service/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

loginModelform=this.fb.group({
  uname:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]+')]],
  psw:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]+')]],
})

  constructor(private fb:FormBuilder,private ds:ServiceService,private rout:Router){}

  ngOnInit():void{}

  login(){
    if(this.loginModelform.valid){
      var uname=this.loginModelform.value.uname
      var psw=this.loginModelform.value.psw

      this.ds.loginApi(uname,psw).subscribe((response:any)=>{
        alert(`${response.uname} login success..`)
        
        localStorage.setItem("currentuname",response.uname)

        if(uname=="admin"){
          this.rout.navigateByUrl("adminhome")
        }
        else{
          this.rout.navigateByUrl("userhome")
        }
      },
      response=>{
        alert(response.error)
      })
    }
    else{
      alert("Invalid Form")
    }
  }

}
