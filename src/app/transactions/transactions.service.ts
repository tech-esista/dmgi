import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

import {environment} from "../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class TransactionsService {
    constructor(private http: HttpClient) {
    }

    retrieveTransactions() {
        return this.http.post(`${environment.API_HOST}/user/get_all_transactions`, {})
    }

    retrieveTransaction(transactionId: number) {
        return this.http.post(`${environment.API_HOST}/user/get_transaction_by_id`, {id: transactionId})
    }

    addNewTransaction(transactionData: any) {
        return this.http.post(`${environment.API_HOST}/user/add_transaction`, transactionData)
    }

    editTransaction(transactionData: any) {
        return this.http.post(`${environment.API_HOST}/user/edit_transaction`, transactionData)
    }

    getTransactionByUser(userId: number) {
        return this.http.post(`${environment.API_HOST}/user/get_transaction_by_user_id`, {user_id: userId})
    }
}
