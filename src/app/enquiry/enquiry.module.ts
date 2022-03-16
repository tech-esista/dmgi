import {NgModule} from "@angular/core";
import {EnquiryComponent} from "./enquiry.component";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {EnquiryRoutingModule} from "./enquiry-routing.module";

@NgModule({
    declarations: [EnquiryComponent],
    imports: [
        RouterModule,
        CommonModule,
        FormsModule,
        EnquiryRoutingModule
    ]
})
export class EnquiryModule {

}
