import { Component } from '@angular/core';


interface Meeting {
  meetingid: string;
  startDateTime: Date;
  topic: string;
  clientId: string;
  noOfPersons: number;
}

interface Client {
  id: string;
  name: string;
}



@Component({
  selector: 'app-meetings-info',
  templateUrl: './meetings-info.component.html',
  styleUrls: ['./meetings-info.component.css']
})

export class MeetingsInfoComponent {
  title = 'meeting-app';
  isFormOpen = false;
  meeting: Meeting = {
    meetingid: '',
    startDateTime: new Date(),
    topic: '',
    clientId: '',
    noOfPersons: 0
  };

  clients: Client[] = [
    { id: '1', name: 'Client 1' },
    { id: '2', name: 'Client 2' },
    { id: '3', name: 'Client 3' }
  ];
  meetings: Meeting[] = [];

  openForm() {
    this.isFormOpen = true;
  }

  addMeeting() {
     this.meetings.push(this.meeting);
    console.log(this.meeting);
    this.meeting = {
      meetingid: '',
      startDateTime: new Date(),
      topic: '',
      clientId: '',
      noOfPersons: 0
    };
    this.isFormOpen = false;
  }

  getClientName(clientId: string): string {
    const client = this.clients.find(c => c.id === clientId);
    return client ? client.name : 'Unknown';
  }
}


