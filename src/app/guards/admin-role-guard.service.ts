import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Injectable} from "@angular/core";
import {Observable, take, map} from "rxjs";

import {AuthService} from "../login/auth.service";
import {User} from "../models/user.model";

@Injectable({
    providedIn: "root"
})
export class AdminRoleGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return this.authService.user$.pipe(
            take(1),
            map((user: User) => {
                if (user && user.isAdmin) {
                    return true;
                }
                return this.router.createUrlTree(["/clients"])
            })
        )
    }
}
