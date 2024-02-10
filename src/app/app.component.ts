import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements DoCheck{

  title = 'Client Management';
  navbar=false;
  

  constructor(private router: Router) {

  }

  ngDoCheck(): void {
    let url = this.router.url;
    
    if(url === "/login" || url==="/start" || url==="/register" || url==='') {
      this.navbar = false;

    }
    else
    this.navbar=true;

  
}
}