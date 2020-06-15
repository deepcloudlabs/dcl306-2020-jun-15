import Customer from "./customer.js";

export default class GoldCustomer extends Customer {
    constructor(identity, fullname, email, gender, phone) {
        super(identity, fullname, email, gender);
        this.phone = phone;
        this.sayHello = this.sayHello.bind(this);
    }

    // i) lambda expression, ii) bind(this)
    sayHello = (greeting) => { // lambda expression!
        console.log(`sending sms message to ${this.phone} @ ${greeting}, ${this.fullname}!`);
    }
}