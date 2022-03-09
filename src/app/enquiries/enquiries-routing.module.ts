import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {EnquiriesComponent} from "./enquiries.component";
import {EnquiriesAlterComponent} from "./alter/alter.component";

const routes: Routes = [
    {
        path: "",
        component: EnquiriesComponent
    }, {
        path: "new",
        component: EnquiriesAlterComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]

})
export class EnquiriesRoutingModule {

}
