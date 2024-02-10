import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username:string="";
  pswrd:string="";
  msg:string="";

 constructor(private router:Router){


 }
 
  UserCheck()
  {
    if(this.username=="rahulsonkar" && this.pswrd=="rahul@123")
    {
        this.router.navigate(["/home"]);
    }
    else
    this.msg="Please check the username or password";
  }

  OnRegister()
  {
    this.router.navigate(["/register"]);
  }
}
