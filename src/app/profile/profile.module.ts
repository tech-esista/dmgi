import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {SharedModule} from "../shared/shared.module";
import {ProfileRoutingModule} from "./profile-routing.module";
import {CommonModule} from "@angular/common";

import {ProfileComponent} from "./profile.component";

@NgModule({
    declarations: [ProfileComponent],
    imports: [
        FormsModule,
        RouterModule,
        SharedModule,
        ProfileRoutingModule,
        CommonModule
    ]
})
export class ProfileModule {

}
