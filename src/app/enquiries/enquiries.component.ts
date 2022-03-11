import {Component, OnInit} from '@angular/core';
import {EnquiriesService} from "./enquiries.service";

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
        this.enquiriesService.retrieveEnquries().subscribe((data: any) => {
            this.enquiries.push({
                name: "Kunj",
                email: "Tesxt@gmail.com",
                mobile_no: "741258963",
                status_id: 2
            });
            this.loader = false
        })
    }

}
