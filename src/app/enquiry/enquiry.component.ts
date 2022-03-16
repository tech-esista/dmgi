import {Component, OnInit} from '@angular/core';

import constants from "../shared/constants";
import {EnquiriesService} from "../enquiries/enquiries.service";
import * as iziToast from "izitoast";
import {NgForm} from "@angular/forms";

@Component({
    selector: 'app-enquiry',
    templateUrl: './enquiry.component.html',
    styleUrls: ['./enquiry.component.scss', '../shared/shared.stylesheet.scss']
})
export class EnquiryComponent implements OnInit {
    btnLoader: boolean = false;
    constants = constants;
    state: string = "form"

    constructor(private enquiriesService: EnquiriesService) {
    }

    ngOnInit(): void {
    }

    newEnquiry(form: NgForm) {
        if (form.form.status === 'INVALID') {
            return
        }

        this.btnLoader = true;
        let params = form.value;

        this.enquiriesService.addNewEnquiry(params).subscribe(data => {
            this.btnLoader = false;
            this.state = "successMsg";
        }, (error) => {
            this.btnLoader = false;
        })
    }
}
