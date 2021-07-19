import { Component, OnInit } from '@angular/core';

@Component({
  //selecotr: `[app-servers]`
  //selector: '.app-servers',
  selector: 'app-servers',
   templateUrl: './servers.component.html', // vi kan her referere hvilken html fil som denne typescript fil skal bruge
  // template: `
  // <app-server></app-server>
  // <app-server></app-server>`
  // ,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  
  allowNewServer = false;

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true
    }, 2000);
  }

  ngOnInit(): void {
  }

}
