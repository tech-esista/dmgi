import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LandingComponent} from './landing/landing.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
    {
        path: "",
        component: LandingComponent
    },
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "clients",
        loadChildren: () => import('./clients/clients.module').then(m => m.ClientsModule)
    },
    {
        path: "enquiries",
        loadChildren: () => import('./enquiries/enquiries.module').then(m => m.EnquiriesModule)
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
