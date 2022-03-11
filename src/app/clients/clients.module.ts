import {NgModule} from "@angular/core";
import {ClientsComponent} from "./clients.component";
import {RouterModule} from "@angular/router";
import {ClientsRoutingModule} from "./clients-routing.module";
import { ClientsAlterComponent } from './alter/alter.component';
import {SharedModule} from "../shared/shared.module";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

@NgModule({
    declarations: [
        ClientsComponent,
        ClientsAlterComponent
    ],
    imports: [
        RouterModule,
        ClientsRoutingModule,
        SharedModule,
        FormsModule,
        CommonModule
    ],
    exports: []
})
export class ClientsModule {

}
