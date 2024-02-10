import { Component } from '@angular/core';

interface Task {
  id: string;
  project: string;
  taskName: string;
  description: string;
}

@Component({
  selector: 'app-tasks-info',
  templateUrl: './tasks-info.component.html',
  styleUrls: ['./tasks-info.component.css']
})
export class TasksInfoComponent {
  title = 'task-app';
  isFormOpen = false;
  tasks: Task[] = [];
  projects = ['Project 1', 'Project 2', 'Project 3'];
  task: Task = {
    id: '',
    project: '',
    taskName: '',
    description: ''
  };

  openForm() {
    this.isFormOpen = true;
  }

  addTask() {
    // Add the task to a list or service
    

    this.tasks.push(this.task);
    console.log(this.task);
    this.task = {
      id: '',
      project: '',
      taskName: '',
      description: ''
    };
    this.isFormOpen = false;
  }





    
    
  }




























