import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators"

import {environment} from "../../environments/environment";

@Injectable({
    providedIn: "root"
})
export class EnquiriesService {

    constructor(private http: HttpClient) {
    }

    retrieveEnquries() {
        return this.http
            .post(`${environment.API_HOST}/enquiry/get_all_enquiries`, {})
            .pipe(
                map((httpResponse: any) => {
                        return httpResponse.contents;
                    }
                )
            )
    }
}
