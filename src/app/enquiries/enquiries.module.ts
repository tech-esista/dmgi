import {NgModule} from "@angular/core";
import {EnquiriesComponent} from "./enquiries.component";
import {RouterModule} from "@angular/router";
import {EnquiriesRoutingModule} from "./enquiries-routing.module";
import {SharedModule} from "../shared/shared.module";

@NgModule({
    declarations: [
        EnquiriesComponent,
    ],
    imports: [
        RouterModule,
        EnquiriesRoutingModule,
        SharedModule
    ]
})
export class EnquiriesModule {

}
