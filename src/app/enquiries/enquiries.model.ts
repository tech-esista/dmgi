export class Enquiry {
    public id: number;
    public name: string;
    public mobile_no: string;
    public interested_in: string;
    public address: string;
    public city: string;
    public pincode: string;
    public gender: number;
    public is_family: boolean;
    public no_of_applicants: number;
    public age: number;
    public education: string;
    public profession: string;
    public status_id: number;
    public next_followup_date: string;
    public extra_details: string;

    constructor(
        id: number,
        name: string,
        mobile_no: string,
        interested_in: string,
        address: string,
        city: string,
        pincode: string,
        gender: number,
        is_family: boolean,
        no_of_applicants: number,
        age: number,
        education: string,
        profession: string,
        status_id: number,
        next_followup_date: string,
        extra_details: string,
    ) {
        this.id = id;
        this.name = name;
        this.mobile_no = mobile_no;
        this.interested_in = interested_in;
        this.address = address;
        this.city = city;
        this.pincode = pincode;
        this.gender = gender;
        this.is_family = is_family;
        this.no_of_applicants = no_of_applicants;
        this.age = age;
        this.education = education;
        this.profession = profession;
        this.status_id = status_id;
        this.next_followup_date = next_followup_date;
        this.extra_details = extra_details;
    }
}

