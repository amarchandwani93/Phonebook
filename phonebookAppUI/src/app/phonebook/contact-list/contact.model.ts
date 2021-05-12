export class Contact{
    public firstName: string;
    public lastName: string;
    public phoneNumber: number;
    public countryCode: number;

    constructor(fName: string, lName: string, phNo: number, cc: number) {
        this.firstName = fName;
        this.lastName = lName;
        this.phoneNumber = phNo;
        this.countryCode = cc;
    }
}
