let numbers = [];
let number = 0;
for (let i = 0; i < 6; i++) {
    number = parseInt(prompt("Inserisci un numero"));
    if (number % 2 != 0) {
        numbers.push(number);
    }
}
console.log("I numeri dispari sono: "+numbers);