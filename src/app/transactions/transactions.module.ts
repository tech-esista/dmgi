import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

import {TransactionsComponent} from "./transactions.component";
import {TransactionAlterComponent} from './alter/alter.component';
import {TransactionsRoutingModule} from "./transactions-routing.module";
import {SharedModule} from "../shared/shared.module";

@NgModule({
    declarations: [TransactionsComponent, TransactionAlterComponent],
    imports: [
        RouterModule,
        FormsModule,
        CommonModule,
        SharedModule,
        TransactionsRoutingModule
    ]
})
export class TransactionsModule {

}
