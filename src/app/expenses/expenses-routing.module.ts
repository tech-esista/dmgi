import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {ExpensesComponent} from "./expenses.component";
import {ExpenseAlterComponent} from "./alter/alter.component";

const routes: Routes = [
    {
        path: "",
        component: ExpensesComponent
    },
    {
        path: "new",
        component: ExpenseAlterComponent
    },
    {
        path: "alter/:id",
        component: ExpenseAlterComponent
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
export class ExpensesRoutingModule {

}
