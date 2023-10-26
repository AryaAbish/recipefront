import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminviewComponent } from './adminview/adminview.component';
import { UserviewComponent } from './userview/userview.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { SearchPipe } from './pipes/search.pipe';
import { ViewuserComponent } from './viewuser/viewuser.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { DeleteComponent } from './delete/delete.component';
import { ViewmessageComponent } from './viewmessage/viewmessage.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    UserComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AdminviewComponent,
    UserviewComponent,
    AddComponent,
    EditComponent,
    SearchPipe,
    ViewuserComponent,
    UserdetailsComponent,
    DeleteComponent,
    ViewmessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
