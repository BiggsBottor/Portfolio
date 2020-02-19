export class Contact {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;

    constructor(name: string, email: string, phone: string, subject: string, message: string) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.subject = subject;
        this.message = message;
    }
}
