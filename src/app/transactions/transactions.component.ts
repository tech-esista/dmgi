import {Component, OnInit} from '@angular/core';
import {TransactionsService} from "./transactions.service";
import constants from "../shared/constants";

@Component({
    selector: 'app-transactions',
    templateUrl: './transactions.component.html',
    styleUrls: ['./transactions.component.scss', '../shared/shared.stylesheet.scss']
})
export class TransactionsComponent implements OnInit {
    loader: boolean = true;
    transactions: any[] = [];
    statusList = constants.TRANSACTION_TYPES;
    currentBalance: number;

    constructor(private transactionsService: TransactionsService) {
    }

    ngOnInit(): void {
        this.transactionsService.retrieveTransactions().subscribe((data: any) => {
            this.transactions = data.transactions;
            this.currentBalance = data.current_balance;
            this.loader = false
        }, (error) => {
            this.loader = false
        })
    }
}
