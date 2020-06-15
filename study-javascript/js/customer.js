// OOP -> ES6 (class, constructor, extends ...)
export default class Customer {
    constructor(identity, fullname, email, gender = "female") {
        this.identity = identity;
        this.fullname = fullname;
        this.email = email;
        this.gender = gender;
        this.sayAlternativeHello = this.sayAlternativeHello.bind(this);
        for (let member of this){
            if (typeof member === "function"){
                member = member.bind(this);
            }
        }
    }

    sayHello = (greeting = "Hello") => {
        console.log(`${greeting}, ${this.fullname}!`);
    }
    sayAlternativeHello(greeting){
        console.log(`${greeting}, ${this.fullname}!`);
    }
}