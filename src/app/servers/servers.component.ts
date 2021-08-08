import { Component, OnInit } from '@angular/core';

@Component({
  //selecotr: `[app-servers]`
  //selector: '.app-servers',
  selector: 'app-servers',// der skal altid være en selector
   templateUrl: './servers.component.html', // vi kan her referere hvilken html fil som denne typescript fil skal bruge
  // template: `
  // <app-server></app-server>
  // <app-server></app-server>`
  // ,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  
  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = 'Testserver';
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2'];

  //practice databinding
  userCreationStatus = 'No username added';
  userName = '';
  //
  
  //Practice Directives
  detailShown = false;
  numberLog = [];

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true
    }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! The server name is: ' + this.serverName;
    console.log('Logged correctly')
  }
  //Event binding that passed $event to an output from an input field
  //Denne metode fetcher data fra event(input field) og parser dataen til en string som vi outputter
  onUpdateServer(event: any){
    this.serverName = (<HTMLInputElement>event.target).value;

  }

  onCreateUserName(event: Event){
    this.userCreationStatus = 'Your username is: ' + this.userName
    this.userName = (<HTMLInputElement>event.target).value 
    this.userName = ''
  }

  showDetails(){
    this.detailShown = !this.detailShown
    // this.numberLog.push(this.numberLog.length + 1)
    this.numberLog.push(new Date())
    
  }

  


}
