import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

import {environment} from "../../environments/environment";

@Injectable({
    providedIn: "root"
})
export class EnquiriesService {
    constructor(private http: HttpClient) {
    }

    retrieveEnquiries() {
        return this.http.post(`${environment.API_HOST}/enquiry/get_all_enquiries`, {})
    }

    retrieveEnquiry(enquiryId: number) {
        return this.http.post(`${environment.API_HOST}/enquiry/get_enquiry_by_id`, {id: enquiryId})
    }

    addNewEnquiry(enquiryData: any) {
        return this.http.post(`${environment.API_HOST}/enquiry/add_or_update_enquiry`, enquiryData)
    }

    convertToClient(enquiryId: number) {
        return this.http.post(`${environment.API_HOST}/enquiry/convert_enquiry_to_client`, {id: enquiryId})
    }
}
