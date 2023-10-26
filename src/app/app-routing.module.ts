import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { AdminviewComponent } from './adminview/adminview.component';
import { UserviewComponent } from './userview/userview.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ViewuserComponent } from './viewuser/viewuser.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { ViewmessageComponent } from './viewmessage/viewmessage.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'adminhome',component:AdminComponent},
  {path:'userhome',component:UserComponent},
  {path:'adminview/:id',component:AdminviewComponent},
  {path:'userview/:id',component:UserviewComponent},
  {path:'admin/addrecipes',component:AddComponent},
  {path:'edit/:id',component:EditComponent},
  {path:'admin/viewuser',component:ViewuserComponent},
  {path:'user/userdetails',component:UserdetailsComponent},
  {path:'admin/viewmessage',component:ViewmessageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
