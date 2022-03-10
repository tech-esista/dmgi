import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {map, take, tap} from "rxjs/operators";
import {Enquiry} from "./enquiries.model";
import {BehaviorSubject, Observable, of, Subject} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class EnquiriesService {
    private enquiries = new BehaviorSubject<Enquiry[]>([]);

    public enquiries$ = this.enquiries.asObservable();

    constructor(private httpClient: HttpClient) {
        //
        // .subscribe((enquiriesRes: any) => {
        //     console.log("Still API")
        //     this.enquiries = new BehaviorSubject<Enquiry[]>(enquiriesRes.contents);
        //     this.enquiries$ = this.enquiries.asObservable();
        // })
    }

    fetchEnquiries() {
        if (this.enquiries.getValue() && this.enquiries.getValue().length > 0) {
            return of([]);
        }
        return this.httpClient
            .post<Enquiry[]>(`${environment.API_HOST}/enquiry/get_all_enquiries`, {})
            .pipe(
                map((responseData: any) => {
                    return responseData.contents
                }),
                tap(data => {
                    this.enquiries.next(data);
                })
            )
    }

    addEnquiry(){
        // this.enquiries.next([
        //     ...this.enquiries.getValue(),
        //     new Enquiry(12, "qwertyui")
        // ]);
    }

    private handleServerResponse(data: any) {
        if (data.status == "success") {
            return data.contents
        }
    }
}
