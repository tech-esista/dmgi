import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import {map} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class ClientsService {
    constructor(private http: HttpClient) {
    }

    retrieveClients() {
        return this.http
            .post(`${environment.API_HOST}/enquiry/get_all_csc_clients`, {})
            .pipe(
                map((httpResponse: any) => {
                        return httpResponse.contents;
                    }
                )
            )
    }

    retrieveClient(clientId: number) {
        return this.http.post(`${environment.API_HOST}/enquiry/get_csc_client_by_id`, {id: clientId})
            .pipe(
                map((httpResponse: any) => {
                        return httpResponse.contents;
                    }
                )
            )
    }

    updaterClient(clientData: any) {
        return this.http.post(`${environment.API_HOST}/enquiry/update_csc_client`, clientData)
            .pipe(
                map((httpResponse: any) => {
                        return httpResponse.contents;
                    }
                )
            )
    }
}
