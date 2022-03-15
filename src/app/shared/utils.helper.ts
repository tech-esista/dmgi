export default class Utils {
    static manageHttpResponse(httpResponse: any) {
        if (httpResponse) {
            return httpResponse;
        } else {
            //todo terrible idea of throwing error
            throw new Error();
            // return throwError(null);
        }
    }
}
