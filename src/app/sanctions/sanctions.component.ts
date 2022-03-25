import {Component, OnInit} from '@angular/core';

import constants from "../shared/constants";
import {SanctionsService} from "./sanctions.service";

@Component({
    selector: 'app-sanctions',
    templateUrl: './sanctions.component.html',
    styleUrls: ['./sanctions.component.scss', '../shared/shared.stylesheet.scss']
})
export class SanctionsComponent implements OnInit {

    loader: boolean = true;
    sanctions: any[] = [];
    statusList = constants.SANCTIONS_STATUS;

    constructor(private sanctionService: SanctionsService) {
    }

    ngOnInit(): void {
        this.sanctionService.retrieveSanctions().subscribe((data: any) => {
            this.sanctions = data;
            this.loader = false
        }, (error) => {
            this.loader = false
        })
    }
}
