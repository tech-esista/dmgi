import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "./auth.service";
import {NgForm} from "@angular/forms";
import {Subscription} from "rxjs";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss', '../shared/shared.stylesheet.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
    btnLoader: boolean = false;
    subscription: Subscription;

    constructor(private router: Router, private authService: AuthService) {
    }

    ngOnInit(): void {
    }

    getLogin(form: NgForm) {
        if (form.form.status === "INVALID") {
            return;
        }
        this.btnLoader = true;
        this.subscription = this.authService.getLogin(form.form.value.email, form.form.value.password).subscribe((data) => {
            this.router.navigate(["enquiries"]);
            this.btnLoader = false;
        }, (error) => {
            this.btnLoader = false;
        })
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
