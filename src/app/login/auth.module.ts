import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";

import {LoginComponent} from "./login.component";
import {SharedModule} from "../shared/shared.module";
import {LoginRoutingModule} from "./login-routing.module";

@NgModule({
    declarations: [LoginComponent],
    imports: [
        SharedModule,
        FormsModule,
        LoginRoutingModule
    ]
})
export class AuthModule {

}
