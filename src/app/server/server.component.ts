import { Component } from "@angular/core";

@Component({
    //selector afgør hvilket navn vi kan bruge vores component under
    selector: 'app-server',
    //templateURL er vores component html file
    templateUrl: './server.component.html',
    styles: [`
        .online{
            color: white;
        }
    `]
})
export class ServerComponent{
    
    //Dette export sørger for at data og metoder kan tilgås fra Html templaten
    serverId = 10;
    serverStatus = 'offline';

    constructor(){
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    getServerStatus(){
        return this.serverStatus;
    }

    getColor(){
        return this.serverStatus === 'online' ? 'green' : 'red'
    }
}