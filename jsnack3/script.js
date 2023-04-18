const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    if (i % 2 != 0) {
        sum += numbers[i];
    }
}
console.log("La somma è: " + sum)