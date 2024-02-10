import { Component } from '@angular/core';
import { clientdata } from '../clientdata';


@Component({
  selector: 'app-client-info',
  templateUrl: './client-info.component.html',
  styleUrls: ['./client-info.component.css']
})
export class ClientInfoComponent {
  clientinfo:clientdata[]=[
  new clientdata(1, "John Doe", "123 Main Street, Cityville" ),
  new clientdata(2, "Jane Smith", "456 Oak Avenue, Townsville" ),
  new clientdata(3, "Bob Johnson", "789 Pine Road, Villageton"),
]
client:clientdata=new clientdata(0, "", "")

AddNewClient()
  {
     this.clientinfo.push(new clientdata(this.client.id, this.client.cname, this.client.address))
    this.client=new clientdata(0, "","");
  }

  DeleteClient(index:number)
  {
    if(confirm("Are You sure to delete")==true)
    {
    this.clientinfo.splice(index,1)
    }
  }
}


