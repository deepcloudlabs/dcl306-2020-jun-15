import Customer from "./customer.js";
import GoldCustomer from "./gold.js";

let jack = new Customer("12345678910", "jack bauer",
    "jack@example.com", "male");
console.log(jack);
jack.sayHello(); // sayHello -> this -> jack
//jack.sayHello("Merhaba");
// JavaScript
// 1. OOP
// 2. Functional Programming -> function(){} vs. lambda expression
// 3. Event Driven Programming --> Callback Functions
// 4. Asynchronous Functions --> async
window.fullname = "kate austen";

let timer = window.setInterval(jack.sayHello, 1000);

window.setTimeout(function () {
    clearInterval(timer);
}, 5000);
//console.log("I am here at line 20!");

let kate = new GoldCustomer("12345678910", "kate austen",
    "kate@example.com", "female", "5555555");
let jin = new GoldCustomer("12345678910", "jin kwon",
    "jkwon@example.com", "female", "6666666");

//kate.sayHello("Merhaba"); // triggers GoldCustomer's sayHello

let customers = [jin, jack, kate];
// Outer Loop #1
for (let i = 0; i < customers.length; ++i)
    customers[i].sayHello("Merhaba");
// Outer Loop #2
for (let i in customers)
    customers[i].sayHello("Merhaba");
// Outer Loop #3
for (let customer of customers)
    customer.sayHello("Merhaba");
// Inner Loop
customers.forEach((customer) => {
    customer.sayHello("Merhaba");
});
// FilterMapReduce, customers --> Array (immutable operations: forEach, filter, map, reduce)
let femaleNames = customers.filter(customer => { // predicate (customer) => true/false
    return customer.gender === "female"
}).map(customer => {
    return customer.fullname; // customer => customer.fullname
});
console.log(femaleNames);
let femaleCustomerCount = customers.filter(customer => { // predicate (customer) => true/false
    return customer.gender === "female"
}).map(customer => {
    return 1;
}).reduce((count, one) => {
        return count + one;
    }, 0);
console.log(femaleCustomerCount);