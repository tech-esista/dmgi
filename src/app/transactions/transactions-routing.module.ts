import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {TransactionsComponent} from "./transactions.component";
import {TransactionAlterComponent} from "./alter/alter.component";

const routes: Routes = [
    {
        path: "",
        component: TransactionsComponent
    },
    {
        path: "new",
        component: TransactionAlterComponent
    },
    {
        path: "alter/:id",
        component: TransactionAlterComponent
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
export class TransactionsRoutingModule {

}
