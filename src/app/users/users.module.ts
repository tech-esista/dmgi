import {NgModule} from "@angular/core";

import {UsersComponent} from "./users.component";
import {UserAlterComponent} from "./alter/alter.component";
import {SharedModule} from "../shared/shared.module";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {UsersRoutingModule} from "./users-routing.module";

@NgModule({
    declarations: [
        UsersComponent,
        UserAlterComponent
    ],
    imports: [
        SharedModule,
        UsersRoutingModule,
        CommonModule,
        FormsModule
    ]
})
export class UsersModule {

}
