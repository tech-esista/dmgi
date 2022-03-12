import {Component, OnInit, Input} from '@angular/core';
import constants from "../constants";

@Component({
    selector: 'app-status-tag',
    templateUrl: './status-tag.component.html',
    styleUrls: ['./status-tag.component.scss']
})
export class StatusTagComponent implements OnInit {

    @Input() status : number;
    className: string = "badge-light";
    statusText: string;

    constructor() {

    }

    ngOnInit(): void {
        let index = constants.STATUSES.findIndex(status => status.id === this.status)
        if(index != -1){
            this.className = constants.STATUSES[index].className;
            this.statusText = constants.STATUSES[index].text;
        }
    }

}
