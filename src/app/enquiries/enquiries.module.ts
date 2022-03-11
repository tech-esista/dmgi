import {NgModule} from "@angular/core";
import {EnquiriesComponent} from "./enquiries.component";
import {RouterModule} from "@angular/router";
import {EnquiriesRoutingModule} from "./enquiries-routing.module";
import {SharedModule} from "../shared/shared.module";
import { EnquiriesAlterComponent } from './alter/alter.component';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

@NgModule({
    declarations: [
        EnquiriesComponent,
        EnquiriesAlterComponent,
    ],
    imports: [
        RouterModule,
        EnquiriesRoutingModule,
        SharedModule,
        CommonModule,
        FormsModule
    ]
})
export class EnquiriesModule {

}
