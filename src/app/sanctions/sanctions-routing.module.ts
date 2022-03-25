import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {SanctionsComponent} from "./sanctions.component";
import {SanctionAlterComponent} from "./alter/alter.component";



const routes: Routes = [
    {
        path: "",
        component: SanctionsComponent
    },
    {
        path: "new",
        component: SanctionAlterComponent
    },
    {
        path: "alter/:id",
        component: SanctionAlterComponent
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
export class SanctionsRoutingModule {

}
