const names = ["Pino", "Gianni", "Ugo"];
const surnames = ["Rossi", "Verdi", "Neri"];
let list = [];
for (let i = 0; i < names.length; i++) {
    list[i] = names[i] + " " + surnames[i];
}
console.log("Lista di invitati: " + list);