import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface AddNewClient {
  name: string;
  email:string;
  address: string;
  password: string;
  conpassword: string;
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  title = 'add-client';

  msg:string="";
  isFormOpen = false;
  nclient: AddNewClient = {
    name: '',
    email: '',
    address: '',
    password: '',
    conpassword: ''
  };


  nclients: AddNewClient[] = [];

  openform()
  {
    this.isFormOpen = true;

  }

  addclient() {
    this.nclients.push(this.nclient);
   console.log(this.nclient);
   if(this.nclient.password=== this.nclient.conpassword)
   {
   this.nclient = {
    name: '',
    email: '',
    address: '',
    password: '',
    conpassword: '',
   };
    this.isFormOpen = false;
   }
   
   else
   this.msg="Please check the username or password";
 }


}
