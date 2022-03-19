import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";

import * as iziToast from "izitoast";
import {ExpensesService} from "../expenses.service";
import {AuthService} from "../../login/auth.service";

@Component({
    selector: 'app-alter',
    templateUrl: './alter.component.html',
    styleUrls: ['./alter.component.scss', '../../shared/shared.stylesheet.scss']
})
export class ExpenseAlterComponent implements OnInit {

    @ViewChild('form') expenseForm: NgForm;
    expenseId: number;
    userId: number;
    pageLoader: boolean = false;
    btnLoader: boolean = false;

    constructor(
        private expenseService: ExpensesService,
        private authService: AuthService,
        private router: Router,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit(): void {
        this.authService.user$.subscribe(user => {
            this.userId = user.id;
        })
        this.route.params.subscribe((params: any) => {
            if (params.hasOwnProperty("id")) {
                this.pageLoader = true;
                this.expenseService.retrieveExpense(params.id).subscribe((data: any) => {
                    this.pageLoader = false;
                    this.expenseId = data.id;
                    delete data.id;
                    delete data.user_id;
                    delete data.created_at;
                    delete data.updated_at;
                    this.expenseForm.setValue(data)
                }, (error) => {
                    this.pageLoader = false
                })
            }
        })
    }

    alterExpense(form: NgForm) {
        if (this.expenseId) {
            this.updateExpense(form);
        } else {
            this.saveNewExpense(form);
        }
    }

    saveNewExpense(form: NgForm) {
        if (form.form.status === 'INVALID') {
            return
        }

        this.btnLoader = true;

        this.expenseService.addNewExpense(form.value).subscribe(data => {
            this.btnLoader = false;
            iziToast.default
                .success({
                    title: 'Success',
                    message: `Added new expense entry!`,
                    position: 'topRight'
                });
            this.router.navigate(["/", "expenses"])
        }, (error) => {
            this.btnLoader = false;
        })
    }

    updateExpense(form: NgForm) {
        if (form.form.status === 'INVALID') {
            return
        }
        this.btnLoader = true;
        let params = {
            expense_id: this.expenseId,
            ...form.value,
            user_id: this.userId
        };
        this.expenseService.editExpense(params).subscribe(data => {
            this.btnLoader = false;
            iziToast.default
                .success({
                    title: 'Success',
                    message: `Updated expense entry`,
                    position: 'topRight'
                });
            this.router.navigate(["/", "expenses"])
        }, (error) => {
            this.btnLoader = false;
        })
    }


}
