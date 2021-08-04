import { Component } from "@angular/core";

@Component({
    //selector afgør hvilket navn vi kan bruge vores component under
    selector: 'app-server',
    //templateURL er vores component html file
    templateUrl: './server.component.html'
})
export class ServerComponent{
    
    //Dette export sørger for at data og metoder kan tilgås fra Html templaten
    serverId = 10;
    serverStatus = 'offline';

    getServerStatus(){
        return this.serverStatus;
    }
}