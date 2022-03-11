import {Component, OnInit} from '@angular/core';
import {EnquiriesService} from "./enquiries.service";
import * as iziToast from "izitoast"

@Component({
    selector: 'app-enquiries',
    templateUrl: './enquiries.component.html',
    styleUrls: ['./enquiries.component.scss', '../shared/shared.stylesheet.scss']
})
export class EnquiriesComponent implements OnInit {
    loader: boolean = true;
    enquiries: any[] = [];

    constructor(private enquiriesService: EnquiriesService) {
    }

    ngOnInit(): void {
        this.enquiriesService.retrieveEnquiries().subscribe((data: any) => {
            this.enquiries = data;
            this.loader = false
        })
    }

}
