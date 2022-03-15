import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import * as iziToast from "izitoast";

import {AuthService} from "../login/auth.service";
import {UsersService} from "../users/users.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss', '../shared/shared.stylesheet.scss']
})
export class ProfileComponent implements OnInit {
    @ViewChild('form') profileForm: NgForm;

    btnLoader: boolean = false;

    constructor(
        private authService: AuthService,
        private userService: UsersService,
        private router: Router) {
    }

    ngOnInit(): void {
        this.authService.user$.subscribe(user => {
            setTimeout(() => {
                this.profileForm.setValue({
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    password: ""
                })
            }, 100)

        })
    }

    updateUser(form: NgForm) {
        if (form.form.status === "INVALID") {
            return
        }
        this.userService.alterUser(form.form.value).subscribe(data => {
            iziToast.default
                .success({
                    title: 'Success',
                    message: `Updated your profile`,
                    position: 'topRight'
                });
        })
    }

}
