import { Component } from '@angular/core';

interface Project {
  id: string;
  name: string;
  duration: string;
}

@Component({
    selector: 'app-project-info',
    templateUrl: './project-info.component.html',
    styleUrls: ['./project-info.component.css'],
})
export class ProjectInfoComponent {
  isFormOpen = false;
  projects: Project[] = [];
  project: Project = {
    id: '',
    name: '',
    duration: ''
  };

  openForm() {
    this.isFormOpen = true;
  }

  addProject() {
    this.projects.push(this.project);
    console.log(this.project);
    this.project = {
      id: '',
      name: '',
      duration: ''
    };
    this.isFormOpen = false;
  }
}

