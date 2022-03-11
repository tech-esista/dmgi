import {Component, OnInit} from '@angular/core';
import {ClientsService} from "./clients.service";

@Component({
    selector: 'app-clients',
    templateUrl: './clients.component.html',
    styleUrls: ['./clients.component.scss', '../shared/shared.stylesheet.scss']
})
export class ClientsComponent implements OnInit {
    loader: boolean = true;
    clients: any[] = [];

    constructor(private clientsService: ClientsService) {
    }

    ngOnInit(): void {
        this.clientsService.retrieveClients().subscribe((data: any) => {
            this.clients = data;
            this.loader = false
        })
    }

}
