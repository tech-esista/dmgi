import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, map, Observable, tap} from "rxjs";

import {User} from "../models/user.model";
import {environment} from "../../environments/environment";
import {Router} from "@angular/router";

@Injectable({
    providedIn: "root"
})
export class AuthService {
    // @ts-ignore
    private user = new BehaviorSubject<User>(null)
    readonly user$: Observable<User> = this.user.asObservable();

    constructor(private http: HttpClient, private router: Router) {
        this.loadUser();
    }

    getLogin(email: string, password: string) {
        return this.http.post(`${environment.API_HOST}/user/request_account_access`, {email: email, password: password})
            .pipe(
                map((userRes: any) => {
                    return userRes.contents
                }),
                tap(userInfo => {
                    this.setUser(userInfo)
                })
            )
    }

    getUser() {
        return this.user$;
    }

    logout() {
        localStorage.clear();
        this.router.navigateByUrl("login")
    }

    private loadUser() {
        // @ts-ignore
        const user: User = JSON.parse(localStorage.getItem("user"));
        this.user.next(user);
    }

    private setUser(userInfo: any) {
        const userToBeSaved: User = {
            id: userInfo.id,
            name: userInfo.name,
            email: userInfo.email,
            statusId: userInfo.status_id,
            apiKey: userInfo.api_key,
            isAdmin: userInfo.is_admin
        }
        localStorage.setItem("user", JSON.stringify(userToBeSaved));
        this.user.next(userToBeSaved);
    }
}
