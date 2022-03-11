import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'app-status-tag',
    templateUrl: './status-tag.component.html',
    styleUrls: ['./status-tag.component.scss']
})
export class StatusTagComponent implements OnInit {

    @Input() statusId : string;

    constructor() {
        console.log(this.statusId)
    }

    ngOnInit(): void {
    }

}
