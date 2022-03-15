import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import * as iziToast from "izitoast";

import constants from "../../shared/constants"
import {ClientsService} from "../clients.service";

@Component({
    selector: 'app-alter',
    templateUrl: './alter.component.html',
    styleUrls: ['./alter.component.scss', '../../shared/shared.stylesheet.scss']
})
export class ClientsAlterComponent implements OnInit {
    @ViewChild('form') clientForm: NgForm;
    clientId: number;
    pageLoader: boolean = false;
    btnLoader: boolean = false;
    constants = constants;

    constructor(private clientService: ClientsService,
                private router: Router, private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.route.params.subscribe((params: any) => {
            if (params.hasOwnProperty("id")) {
                this.pageLoader = true;
                this.clientService.retrieveClient(params.id).subscribe((data: any) => {
                    this.pageLoader = false;
                    this.clientId = data.id;
                    delete data.id;
                    delete data.enquiry_id;
                    delete data.created_at;
                    delete data.updated_at;
                    this.clientForm.setValue(data)
                }, (error) => {
                    this.pageLoader = false;
                })
            }
        })
    }

    alterClient(form: NgForm) {
        if (form.form.status === 'INVALID') {
            return
        }

        this.btnLoader = true;
        let params = {
            id: this.clientId,
            ...form.value
        }

        this.clientService.updateClient(params).subscribe(data => {
            this.btnLoader = false;
            iziToast.default
                .success({
                    title: 'Success',
                    message: `Updated client entry`,
                    position: 'topRight'
                });
            this.router.navigate(["/", "clients"])
        }, (error) => {
            this.btnLoader = false;
        })
    }
}
