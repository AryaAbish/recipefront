import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  pswMatch:boolean=false

  registerModelform=this.fb.group({
   uname:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]+')]],
    psw:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]+')]],
    cpsw:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]+')]]
  })

  constructor(private fb:FormBuilder,private rout:Router,private ds:ServiceService){}

  ngOnInit():void{}

  signup(){
    // alert("signupworked")
    // console.log(this.registerModelform.value.uname);
    var path=this.registerModelform.value
    var uname=path.uname
    var psw=path.psw
    var cpsw=path.cpsw
    
    if(this.registerModelform.valid){
      if(psw==cpsw){
        this.pswMatch=false
        this.ds.signupApi(uname,psw).subscribe((response:any)=>{
          alert(`${response.uname} registered...`)
          this.rout.navigateByUrl("login")
        },
        response=>{
          alert(response.error)
        })
      }
      else{
      // alert("Password doesnt match")
      this.pswMatch=true
    }
    }
    else{
      alert("invalid Form")
    }
  }
}
