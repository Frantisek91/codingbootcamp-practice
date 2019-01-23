const randInt = (lower, upper) => {
    const raw = Math.random() * (upper - lower);
    return Math.round(raw) + lower;
}

const rollDice = () => { return randInt(1, 6);
}


let roll1 = rollDice();
let roll2 = rollDice();


alert(roll1);
alert(roll2);

------------------------------------------------------------------------
/* Proposed solution */
const salary = (wage, hours, days) => {
    return wage * hours * days;
}

const netsalary = (money, tax) => {
    return (1-tax) * money;
}

let brutsalary = salary (10, 8, 20);
let result = netsalary (brutsalary, 0.2);



/* Martins solution */

const salary = (wage, hours, days) => {
    return wage * hours * days;
}

const taxedSalary = (wage, hours, days, tax) => {
    return salary (wage, hours, days) * (1 - tax);
}

const taxedSalary2 = (amount, tax) => {
    return amount * (1 - tax);
}

let result = taxedSalary(20, 8, 21, 0.25;);
let money = salary (20, 8, 21);
let result2 = taxedSalary2(salary(money, 0.25);
second approach is better allows us to enter the salary itself without knowing hour wage


let wage = 10;
let hours = 8;
let days = 20;

let salary = wage*hours*days;

let tax = salary * 0.2;

let salary = wage * hours * days;
console.log(salary);
alert(salary);

let age = parseInt (prompt("Enter your age"));

if (age >= 18) {
    console.log ("Enter here");
}

else { console.log ("Grow up");

}