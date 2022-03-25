import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import * as iziToast from "izitoast";

import constants from "../../shared/constants";
import {SanctionsService} from "../sanctions.service";
import {AuthService} from "../../login/auth.service";
import {User} from "../../models/user.model";

@Component({
    selector: 'app-alter',
    templateUrl: './alter.component.html',
    styleUrls: ['./alter.component.scss', '../../shared/shared.stylesheet.scss']
})
export class SanctionAlterComponent implements OnInit {
    @ViewChild('form') sanctionForm: NgForm;
    sanctionId: number;
    user: User;
    pageLoader: boolean = false;
    btnLoader: boolean = false;
    constants = constants;
    loader: boolean = true;

    constructor(
        private sanctionsService: SanctionsService,
        private router: Router,
        private route: ActivatedRoute,
        private authService: AuthService,
    ) {
    }

    ngOnInit(): void {
        this.authService.user$.subscribe(user => {
            this.user = user;
            this.route.params.subscribe((params: any) => {
                if (params.hasOwnProperty("id")) {
                    this.pageLoader = true;
                    this.sanctionsService.retrieveSanction(params.id).subscribe((data: any) => {
                        this.pageLoader = false;
                        this.sanctionId = data.id;
                        let formData = {
                            amount: data.amount,
                            note: data.note,
                            expected_date_for_funds: data.expected_date_for_funds
                        }
                        if (user.isAdmin) {
                            // @ts-ignore
                            formData['status_id'] = data.status_id;
                        }
                        setTimeout(() => {
                            this.sanctionForm.setValue(formData)
                        }, 20)

                    }, (error) => {
                        this.pageLoader = false
                    })
                }
            })
        })

    }


    alterSanction(form: NgForm) {
        if (this.sanctionId) {
            this.updateSanction(form);
        } else {
            this.saveNewSanction(form);
        }
    }

    saveNewSanction(form: NgForm) {
        if (form.form.status === 'INVALID') {
            return
        }

        this.btnLoader = true;
        let params = {
            ...form.value,
            user_id: this.user.id
        };
        this.sanctionsService.addNewSanction(params).subscribe(data => {
            this.btnLoader = false;
            iziToast.default
                .success({
                    title: 'Success',
                    message: `Added new sanction entry!`,
                    position: 'topRight'
                });
            this.router.navigate(["/", "sanctions"])
        }, (error) => {
            this.btnLoader = false;
        })
    }

    updateSanction(form: NgForm) {
        if (form.form.status === 'INVALID') {
            return
        }
        this.btnLoader = true;
        let params = {
            id: this.sanctionId,
            ...form.value,
            user_id: this.user.id
        };
        this.sanctionsService.editSanction(params).subscribe(data => {
            this.btnLoader = false;
            iziToast.default
                .success({
                    title: 'Success',
                    message: `Updated sanction entry`,
                    position: 'topRight'
                });
            this.router.navigate(["/", "sanctions"])
        }, (error) => {
            this.btnLoader = false;
        })
    }

}
