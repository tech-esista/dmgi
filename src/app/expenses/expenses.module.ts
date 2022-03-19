import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

import {ExpensesComponent} from "./expenses.component";
import {ExpenseAlterComponent} from './alter/alter.component';
import {ExpensesRoutingModule} from "./expenses-routing.module";
import {SharedModule} from "../shared/shared.module";

@NgModule({
    declarations: [ExpensesComponent, ExpenseAlterComponent],
    imports: [
        RouterModule,
        FormsModule,
        CommonModule,
        SharedModule,
        ExpensesRoutingModule
    ]
})
export class ExpensesModule {

}
