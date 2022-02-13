// let a = prompt('Value 1');
// let b = prompt('Value 2');
let a = 2, b = 1;
let result = (a + b < 4) ? 'Below' : 'Over'

let login = "Director";

let message = (login == "Employee") ? "Hello" : 
    (login == "Director") ? "Greetings" : 
    (login == "") ? "Np login" : "";
console.log(message);