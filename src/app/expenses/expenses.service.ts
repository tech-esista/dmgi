import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

import {environment} from "../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class ExpensesService {
    constructor(private http: HttpClient) {
    }

    retrieveExpenses() {
        return this.http.post(`${environment.API_HOST}/user/get_all_expenses`, {})
    }

    retrieveExpense(expenseId: number) {
        return this.http.post(`${environment.API_HOST}/user/get_expense_by_id`, {expense_id: expenseId})
    }

    addNewExpense(expenseData: any) {
        return this.http.post(`${environment.API_HOST}/user/add_expense`, expenseData)
    }

    editExpense(expenseData: any) {
        return this.http.post(`${environment.API_HOST}/user/edit_expense`, expenseData)
    }

    getExpenseByUser(userId: number) {
        return this.http.post(`${environment.API_HOST}/user/get_expense_by_user_id`, {user_id: userId})
    }
}
