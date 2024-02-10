
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username: string = "";
  email: string = "";
  password: string = "";
  pnumber: number=0;
  msg="";
  
  

  constructor(private router: Router) {}

  alldetails(){
  if(this.username!==null && this.email!==null && this.password!==null && this.pnumber!==null)
    {
        this.router.navigate(["/home"]);
    }
    else
    {
    this.msg="Please check the username or password";
    }
  }

}