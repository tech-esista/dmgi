export class User {
    public name: string;
    public email: string;
    public statusId: number;
    public apiKey: string;

    constructor(
        name: string,
        email: string,
        status_id: number,
        apiKey: string
    ) {

        this.email = email;
        this.name = name;
        this.name = name;
        this.statusId = status_id;
        this.apiKey = apiKey;
    }
}
