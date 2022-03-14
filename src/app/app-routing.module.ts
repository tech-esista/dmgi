import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LandingComponent} from './landing/landing.component';
import {AuthGuard} from "./guards/auth-guard.service";
import {AdminRoleGuard} from "./guards/admin-role-guard.service";

const routes: Routes = [
    {
        path: "",
        component: LandingComponent
    },
    {
        path: "login",
        loadChildren: () => import('./login/auth.module').then(m => m.AuthModule)
    },
    {
        path: "clients",
        canActivate: [AuthGuard],
        loadChildren: () => import('./clients/clients.module').then(m => m.ClientsModule)
    },
    {
        path: "enquiries",
        canActivate: [AuthGuard],
        loadChildren: () => import('./enquiries/enquiries.module').then(m => m.EnquiriesModule)
    },
    {
        path: "users",
        canActivate: [AuthGuard, AdminRoleGuard],
        loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
