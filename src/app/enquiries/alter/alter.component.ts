import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import * as iziToast from "izitoast";
import {ActivatedRoute, Router} from "@angular/router";
import Swal from 'sweetalert2'

import {EnquiriesService} from "../enquiries.service";

@Component({
    selector: 'app-alter',
    templateUrl: './alter.component.html',
    styleUrls: ['./alter.component.scss', '../../shared/shared.stylesheet.scss']
})
export class EnquiriesAlterComponent implements OnInit {
    @ViewChild('form') enquiryForm: NgForm;
    enquiryId: number;
    pageLoader: boolean = false;
    btnLoader: boolean = false;

    constructor(private enquiriesService: EnquiriesService,
                private router: Router, private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.route.params.subscribe((params: any) => {
            if (params.hasOwnProperty("id")) {
                this.pageLoader = true;
                this.enquiriesService.retrieveEnquiry(params.id).subscribe((data: any) => {
                    this.pageLoader = false;
                    this.enquiryId = data.id;
                    delete data.id;
                    delete data.created_at;
                    delete data.updated_at;
                    this.enquiryForm.setValue(data)
                })
            }
        })
    }

    alterEnquiry(form: NgForm) {
        if (form.form.status === 'INVALID') {
            return
        }

        this.btnLoader = true;
        let params = form.value;
        if (this.enquiryId) {
            params = {
                id: this.enquiryId,
                ...form.value
            }
        }

        this.enquiriesService.addNewEnquiry(params).subscribe(data => {
            this.btnLoader = false;
            iziToast.default
                .success({
                    title: 'Success',
                    message: `${this.enquiryId ? 'Updated' : 'Added new'} enquiry entry`,
                    position: 'topRight'
                });
            this.router.navigate(["/", "enquiries"])
        })
    }

    convertToClient() {
        // @ts-ignore
        Swal.fire({
            title: 'Are you sure?',
            text: 'By confirming, this enquiry will be converted into client?',
            icon: 'success',
            confirmButtonText: "Make it Client",
            cancelButtonText: "Cancel",
            showCancelButton: true,
            showLoaderOnConfirm: true,
            buttons: true,
            preConfirm: () => {
                this.enquiriesService.convertToClient(this.enquiryId).subscribe((data) => {
                    iziToast.default.success({
                        title: 'Success',
                        message: `Successfully converted into client!`,
                        position: 'topRight'
                    })
                    this.router.navigateByUrl("/clients");
                })
            },
            dangerMode: true,
        })
    }
}
