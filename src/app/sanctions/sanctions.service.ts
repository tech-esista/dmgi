import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

import {environment} from "../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class SanctionsService {
    constructor(private http: HttpClient) {
    }

    retrieveSanctions() {
        return this.http.post(`${environment.API_HOST}/user/get_all_sanctions`, {})
    }

    retrieveSanction(sanctionId: number) {
        return this.http.post(`${environment.API_HOST}/user/get_sanction_by_id`, {id: sanctionId})
    }

    addNewSanction(sanctionData: any) {
        return this.http.post(`${environment.API_HOST}/user/request_for_sanction`, sanctionData)
    }

    editSanction(sanctionData: any) {
        return this.http.post(`${environment.API_HOST}/user/edit_sanction`, sanctionData)
    }

    getSanctionByUser(userId: number) {
        return this.http.post(`${environment.API_HOST}/user/set_sanction_by_user_id`, {user_id: userId})
    }
}
