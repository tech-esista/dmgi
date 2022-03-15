import {Component, OnInit, Input} from '@angular/core';
import constants from "../constants";

@Component({
    selector: 'app-status-tag',
    templateUrl: './status-tag.component.html',
    styleUrls: ['./status-tag.component.scss']
})
export class StatusTagComponent implements OnInit {

    @Input() status: number;
    @Input() statusList: any;
    className: string = "badge-light";
    statusText: string;

    constructor() {

    }

    ngOnInit(): void {
        let index = this.statusList.findIndex((status: any) => status.id === this.status);
        if (index != -1) {
            this.className = this.statusList[index].className;
            this.statusText = this.statusList[index].text;
        }
    }

}
