import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

import {SharedModule} from "../shared/shared.module";
import {SanctionsRoutingModule} from "./sanctions-routing.module";
import {SanctionAlterComponent} from "./alter/alter.component";
import {SanctionsComponent} from "./sanctions.component";

@NgModule({
    declarations: [SanctionsComponent, SanctionAlterComponent],
    imports: [
        RouterModule,
        FormsModule,
        CommonModule,
        SharedModule,
        SanctionsRoutingModule
    ]
})
export class SanctionsModule {

}
