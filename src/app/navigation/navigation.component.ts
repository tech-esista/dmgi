import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../login/auth.service";
import Swal from "sweetalert2";
import {User} from "../models/user.model";

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss', '../shared/shared.stylesheet.scss']
})
export class NavigationComponent implements OnInit {
    user: User;

    constructor(private router: Router, private authService: AuthService) {
    }

    ngOnInit(): void {
        this.authService.user$.subscribe(user => {
            if (user) {
                this.user = user;
            }
        })
    }

    navigateTo(path: string) {
        this.router.navigateByUrl(path);
    }

    logout() {
        // @ts-ignore
        Swal.fire({
            title: 'Are you sure?',
            text: 'You will be logged out!',
            icon: 'warning',
            confirmButtonText: "Sure",
            cancelButtonText: "Keep, Logged In!",
            showCancelButton: true,
            buttons: true,
            preConfirm: () => {
                this.authService.logout();
            },
            dangerMode: true,
        })
    }
}
