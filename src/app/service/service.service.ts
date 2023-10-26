import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  //object of behaviour subject
  search=new BehaviorSubject("")

  constructor(private http:HttpClient) { }

  //register
  signupApi(uname:any,psw:any){
    const bodyData={
      uname,psw
    }
    return this.http.post('http://localhost:3000/user/register',bodyData)
  }

  //login
  loginApi(uname:any,psw:any){
    const bodyData={
      uname,psw
    }
    return this.http.post('http://localhost:3000/user/login',bodyData)
  }

  //add recipes
  addrecipesApi(rname:any,no:any,dur:any,des:any,img:any,cat:any){
    const bodyData={
      rname,no,dur,des,img,cat
    }
    return this.http.post('http://localhost:3000/admin/addrecipies',bodyData)
  }

  //get all data
  allrecipiesApi(){
    return this.http.get('http://localhost:3000/recipies/allrecipies')
  }

  //get single recipe
  singlerecipieApi(rname:any){
    return this.http.get('http://localhost:3000/recipies/singlerecipies/'+rname)
  }

  //edit details
  editdetails(id:any,rdetail:any){
    return this.http.put('http://localhost:3000/recipies/edit/'+id,rdetail)
  }

  //delete
  deleterecipies(rname:any){
    return this.http.delete('http://localhost:3000/recipies/delete/'+rname)
  }

  //view user by admin
  viewuser(){
    return this.http.get('http://localhost:3000/admin/viewuser')
  }

  //delete user
  deleteuser(uname:any){
    return this.http.delete('http://localhost:3000/delete/'+uname)
  }

  //send message
  sendmessage(uname:any,messageuser:any){
    const bodyData={
      uname,
      messageuser
    }
    return this.http.post('http://localhost:3000/user/message/',bodyData)
  }

  //view messages
  viewmessages(){
    return this.http.get('http://localhost:3000/admin/viewmessage')
  }

  //delete message
  deletemsg(uname:any,messageuser:any){
    const bodyData={
      uname,messageuser
    }
    return this.http.put('http://localhost:3000/admin/deletemsg',bodyData)
  }
  
  //change pswd
  changepassword(uname:any,psw:any,newpsw:any){
    const bodyData={
      psw,newpsw
    }
    return this.http.put('http://localhost:3000/user/changepsw/'+uname,bodyData)
  }

  //comment
  comment(rname:any,comment:any,uname:any){
    const bodyData={
      rname,comment,uname
    }
    return this.http.post('http://localhost:3000/user/comment',bodyData)
  }

  //delete comment
  deletecomment(comment:any,uname:any,rname:any){
    const bodyData={
      comment,uname,rname
    }
    return this.http.put('http://localhost:3000/deletecomment',bodyData)
  }

  //wishlist
  wishlist(uname:any,rname:any,img:any){
    const bodyData={
      uname,rname,img
    }
    return this.http.post('http://localhost:3000/user/wishlist',bodyData)
  }

  //view wishlist
  viewwishlist(uname:any){
    return this.http.get('http://localhost:3000/user/viewwishlist/'+uname)
  }

  //delete wishlist
  deletewishlist(uname:any,rname:any){
    const bodyData={
      uname,rname
    }
    return this.http.put('http://localhost:3000/user/deletewishlist',bodyData)

  }

}
