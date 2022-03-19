import {Component, OnInit} from '@angular/core';
import {ExpensesService} from "./expenses.service";

@Component({
    selector: 'app-expenses',
    templateUrl: './expenses.component.html',
    styleUrls: ['./expenses.component.scss', '../shared/shared.stylesheet.scss']
})
export class ExpensesComponent implements OnInit {
    loader: boolean = true;
    expenses: any[] = [];

    constructor(private expensesService: ExpensesService) {
    }

    ngOnInit(): void {
        this.expensesService.retrieveExpenses().subscribe((data: any) => {
            this.expenses = data;
            this.loader = false
        }, (error) => {
            this.loader = false
        })
    }
}
