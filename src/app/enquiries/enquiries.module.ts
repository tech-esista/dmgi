import {NgModule} from "@angular/core";
import {EnquiriesComponent} from "./enquiries.component";
import {RouterModule} from "@angular/router";
import {EnquiriesRoutingModule} from "./enquiries-routing.module";
import {SharedModule} from "../shared/shared.module";
import { EnquiriesAlterComponent } from './alter/alter.component';

@NgModule({
    declarations: [
        EnquiriesComponent,
        EnquiriesAlterComponent,
    ],
    imports: [
        RouterModule,
        EnquiriesRoutingModule,
        SharedModule
    ]
})
export class EnquiriesModule {

}
