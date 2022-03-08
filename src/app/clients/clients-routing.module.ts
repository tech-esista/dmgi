import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ClientsComponent} from "./clients.component";
import {ClientsAlterComponent} from "./alter/alter.component";

const routes: Routes = [
    {
        path: "",
        component: ClientsComponent
    },
    {
        path: "new",
        component: ClientsAlterComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ClientsRoutingModule {

}
