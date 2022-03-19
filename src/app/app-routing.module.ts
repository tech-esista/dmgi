import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LandingComponent} from './landing/landing.component';
import {AuthGuard} from "./guards/auth-guard.service";
import {AdminRoleGuard} from "./guards/admin-role-guard.service";
import {ProfileComponent} from "./profile/profile.component";

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
    {
        path: "profile",
        loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule),
        canActivate: [AuthGuard]
    },
    {
        path: "enquiry",
        loadChildren: () => import('./enquiry/enquiry.module').then(m => m.EnquiryModule),
    },
    {
        path: "expenses",
        loadChildren: () => import('./expenses/expenses.module').then(m => m.ExpensesModule),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
