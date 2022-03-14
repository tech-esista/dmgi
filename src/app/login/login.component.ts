import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "./auth.service";
import {NgForm} from "@angular/forms";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss', '../shared/shared.stylesheet.scss']
})
export class LoginComponent implements OnInit {
    btnLoader: boolean = false;

    constructor(private router: Router, private authService: AuthService) {
    }

    ngOnInit(): void {
    }

    getLogin(form: NgForm) {
        if (form.form.status === "INVALID") {
            return;
        }
        this.btnLoader = true;
        this.authService.getLogin(form.form.value.email, form.form.value.password).subscribe(() => {
            this.router.navigate(["enquiries"]);
            this.btnLoader = false;
        })
    }
}
