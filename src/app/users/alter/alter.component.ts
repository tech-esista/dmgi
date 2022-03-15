import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import * as iziToast from "izitoast";

import constants from "../../shared/constants"
import {UsersService} from "../users.service";

@Component({
    selector: 'app-alter',
    templateUrl: './alter.component.html',
    styleUrls: ['./alter.component.scss', "../../shared/shared.stylesheet.scss"]
})
export class UserAlterComponent implements OnInit {
    @ViewChild('form') userForm: NgForm;
    userId: number;
    pageLoader: boolean = false;
    btnLoader: boolean = false;
    constants = constants;

    constructor(
        private userService: UsersService,
        private router: Router,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit(): void {
        this.route.params.subscribe((params: any) => {
            if (params.hasOwnProperty("id")) {
                this.pageLoader = true;
                this.userService.retrieveUser(params.id).subscribe((data: any) => {
                    this.pageLoader = false;
                    this.userId = data.id;
                    const formData = {
                        name: data.name,
                        email: data.email,
                        password: "",
                        is_admin: data.is_admin,
                        status_id: data.status_id
                    }
                    this.userForm.setValue(formData)
                })
            }
        })
    }

    alterUser(form: NgForm) {
        if (form.form.status === 'INVALID') {
            return
        }

        this.btnLoader = true;
        let params = {
            id: this.userId,
            ...form.value
        }

        this.userService.alterUser(params).subscribe(data => {
            this.btnLoader = false;
            iziToast.default
                .success({
                    title: 'Success',
                    message: `Updated user entry`,
                    position: 'topRight'
                });
            this.router.navigate(["/", "users"])
        })
    }
}
