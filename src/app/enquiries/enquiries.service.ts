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

    retrieveEnquiries() {
        return this.http
            .post(`${environment.API_HOST}/enquiry/get_all_enquiries`, {})
            .pipe(
                map((httpResponse: any) => {
                        return httpResponse.contents;
                    }
                )
            )
    }

    retrieveEnquiry(enquiryId: number) {
        return this.http.post(`${environment.API_HOST}/enquiry/get_enquiry_by_id`, {id: enquiryId})
            .pipe(
            map((httpResponse: any) => {
                    return httpResponse.contents;
                }
            )
        )
    }

    addNewEnquiry(enquiryData: any) {
        return this.http.post(`${environment.API_HOST}/enquiry/add_or_update_enquiry`, enquiryData)
            .pipe(
                map((httpResponse: any) => {
                        return httpResponse.contents;
                    }
                )
            )
    }
}
