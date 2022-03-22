import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";

import * as iziToast from "izitoast";
import {TransactionsService} from "../transactions.service";
import {AuthService} from "../../login/auth.service";
import constants from "../../shared/constants";

@Component({
    selector: 'app-alter',
    templateUrl: './alter.component.html',
    styleUrls: ['./alter.component.scss', '../../shared/shared.stylesheet.scss']
})
export class TransactionAlterComponent implements OnInit {

    @ViewChild('form') transactionForm: NgForm;
    transactionId: number;
    userId: number;
    pageLoader: boolean = false;
    btnLoader: boolean = false;
    constants: any = constants;

    constructor(
        private transactionsService: TransactionsService,
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
                this.transactionsService.retrieveTransaction(params.id).subscribe((data: any) => {
                    this.pageLoader = false;
                    this.transactionId = data.id;
                    delete data.id;
                    delete data.user_id;
                    delete data.created_at;
                    delete data.updated_at;
                    this.transactionForm.setValue(data)
                }, (error) => {
                    this.pageLoader = false
                })
            }
        })
    }

    alterTransaction(form: NgForm) {
        if (this.transactionId) {
            this.updateTransaction(form);
        } else {
            this.saveNewTransaction(form);
        }
    }

    saveNewTransaction(form: NgForm) {
        if (form.form.status === 'INVALID') {
            return
        }

        this.btnLoader = true;
        let params = {
            ...form.value,
            user_id: this.userId
        };
        this.transactionsService.addNewTransaction(params).subscribe(data => {
            this.btnLoader = false;
            iziToast.default
                .success({
                    title: 'Success',
                    message: `Added new transaction entry!`,
                    position: 'topRight'
                });
            this.router.navigate(["/", "transactions"])
        }, (error) => {
            this.btnLoader = false;
        })
    }

    updateTransaction(form: NgForm) {
        if (form.form.status === 'INVALID') {
            return
        }
        this.btnLoader = true;
        let params = {
            id: this.transactionId,
            ...form.value,
            user_id: this.userId
        };
        this.transactionsService.editTransaction(params).subscribe(data => {
            this.btnLoader = false;
            iziToast.default
                .success({
                    title: 'Success',
                    message: `Updated transaction entry`,
                    position: 'topRight'
                });
            this.router.navigate(["/", "transactions"])
        }, (error) => {
            this.btnLoader = false;
        })
    }


}
