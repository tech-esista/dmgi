import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";

import {EnquiriesService} from "./enquiries.service";
import {Enquiry} from "./enquiries.model";

@Component({
    selector: 'app-enquiries',
    templateUrl: './enquiries.component.html',
    styleUrls: ['./enquiries.component.scss', '../shared/shared.stylesheet.scss']
})
export class EnquiriesComponent implements OnInit, OnDestroy {
    private subscription: Subscription;
    enquiries: Enquiry[]
    loader: boolean = true;

    constructor(private enquiryService: EnquiriesService) {
    }

    ngOnInit(): void {
        this.enquiryService.fetchEnquiries().subscribe(data => {
            this.loader = false;
        })
        this.subscription = this.enquiryService.enquiries$
            .subscribe(data => {
                this.enquiries = data;
            })
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}
