export class User {
    public name: string;
    public email: string;
    public statusId: number;
    public apiKey: string;
    public isAdmin: boolean;

    constructor(
        name: string,
        email: string,
        status_id: number,
        apiKey: string,
        isAdmin: boolean,
    ) {

        this.email = email;
        this.name = name;
        this.isAdmin = isAdmin;
        this.statusId = status_id;
        this.apiKey = apiKey;
    }
}
