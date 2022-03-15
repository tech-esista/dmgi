import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

import {environment} from "../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class UsersService {
    constructor(private http: HttpClient) {
    }

    retrieveUsers() {
        return this.http.post(`${environment.API_HOST}/user/get_all_users`, {})
    }

    retrieveUser(userId: number) {
        return this.http.post(`${environment.API_HOST}/user/get_user_profile`, {id: userId})
    }

    alterUser(userData: any) {
        return this.http.post(`${environment.API_HOST}/user/add_or_update_user`, userData)
    }
}
