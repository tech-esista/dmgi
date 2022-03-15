import {Component, OnInit} from '@angular/core';

import {UsersService} from "./users.service";
import constants from "../shared/constants";

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss', "../shared/shared.stylesheet.scss"]
})
export class UsersComponent implements OnInit {

    loader: boolean = true;
    users: any[] = [];
    statusList = constants.USER_STATUS;

    constructor(private usersService: UsersService) {
    }

    ngOnInit(): void {
        this.usersService.retrieveUsers().subscribe((data: any) => {
            this.users = data;
            this.loader = false
        })
    }

}
