import {HttpEventType, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {of, tap} from "rxjs";
import * as iziToast from "izitoast";
import {map} from "rxjs/operators";
import Utils from "../shared/utils.helper";

export class HttpInterceptorService implements HttpInterceptor {
    constructor() {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        return next.handle(req).pipe(
            map((event) => {
                if (event.type === HttpEventType.Response) {
                    if (event.body.status === "success") {
                        if (event.body.hasOwnProperty("contents")) {
                            event = event.clone({body: Utils.manageHttpResponse(event.body.contents)})
                        } else {
                            event = event.clone({body: Utils.manageHttpResponse(event.body.message)})
                        }
                        return event;
                    } else {
                        iziToast.default
                            .error({
                                title: 'Error',
                                message: event.body.message,
                                position: 'topRight'
                            });
                        event = event.clone({body: Utils.manageHttpResponse(null)})
                        return event;
                    }
                } else {
                    return event;
                }
            })
        );
    }
}
