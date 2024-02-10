import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  navbar=false;


constructor(private router: Router) {
}
  ngDoCheck(): void {
    let url = this.router.url;
    if (url === "/client-info" || url === "/home" || url === "/task-info" || url === "/meeting-info" || url === "/project-info") {
      this.navbar = true;
    }
    if (url === "/login" || url==="/register" || url==="/start") {
      this.navbar = false;
    }
}
}

