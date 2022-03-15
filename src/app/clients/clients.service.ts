import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

import {environment} from "../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class ClientsService {
    constructor(private http: HttpClient) {
    }

    retrieveClients() {
        return this.http.post(`${environment.API_HOST}/enquiry/get_all_csc_clients`, {})
    }

    retrieveClient(clientId: number) {
        return this.http.post(`${environment.API_HOST}/enquiry/get_csc_client_by_id`, {id: clientId})
    }

    updateClient(clientData: any) {
        return this.http.post(`${environment.API_HOST}/enquiry/update_csc_client`, clientData)
    }
}
