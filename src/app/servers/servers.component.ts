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
  serverName = '';
  //
  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true
    }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreationStatus = 'Server was created';
    console.log('Logged correctly')
  }

  onUpdateServer(event: any){
    this.serverName = (<HTMLInputElement>event.target).value;

  }

}
