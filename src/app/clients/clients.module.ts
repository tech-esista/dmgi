import {NgModule} from "@angular/core";
import {ClientsComponent} from "./clients.component";
import {RouterModule} from "@angular/router";
import {ClientsRoutingModule} from "./clients-routing.module";
import { ClientsAlterComponent } from './alter/alter.component';
import {SharedModule} from "../shared/shared.module";

@NgModule({
    declarations: [
        ClientsComponent,
        ClientsAlterComponent
    ],
    imports: [
        RouterModule,
        ClientsRoutingModule,
        SharedModule
    ],
    exports: []
})
export class ClientsModule {

}
