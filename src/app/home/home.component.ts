import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  allrecipies:any=[]
  filterrecipies:any=[]

  constructor(private rout:Router,private ds:ServiceService){}

  ngOnInit():void{
    this.ds.allrecipiesApi().subscribe((data)=>{
      // console.log(data);      
      this.allrecipies=data
      this.filterrecipies=this.allrecipies
    })
  }

  filterCategory(catId:any){
    this.filterrecipies=this.allrecipies.filter((item:any)=>item.cat==catId || catId=="")
  }


}
