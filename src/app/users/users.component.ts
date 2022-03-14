import {Component, OnInit} from '@angular/core';
import {UsersService} from "./users.service";

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss', "../shared/shared.stylesheet.scss"]
})
export class UsersComponent implements OnInit {

    loader: boolean = true;
    users: any[] = [];

    constructor(private usersService: UsersService) {
    }

    ngOnInit(): void {
        this.usersService.retrieveUsers().subscribe((data: any) => {
            this.users = data;
            this.loader = false
        })
    }

}
