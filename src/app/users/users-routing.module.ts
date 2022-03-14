import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {UsersComponent} from "./users.component";
import {UserAlterComponent} from "./alter/alter.component";

const routes: Routes = [
    {
        path: "",
        component: UsersComponent
    },
    {
        path: "new",
        component: UserAlterComponent
    },
    {
        path: "alter/:id",
        component: UserAlterComponent
    },
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class UsersRoutingModule {

}
