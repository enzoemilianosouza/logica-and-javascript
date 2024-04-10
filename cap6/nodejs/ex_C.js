const prompt = require("prompt-sync")();

const arrSaques = [];

do {
  const saque = Number(prompt("Saque R$:"));
  if (saque == 0) {
    break;
  }

  arrSaques.push(saque);
  if (saque % 10 == 0) {
    console.log("Saque realizado");
  } else {
    console.log("Erro, valor inválido.");
  }
} while (true);

console.log("\nSaques válidos");
console.log("-".repeat(40));

const validos = arrSaques.filter((sa) => sa % 10 == 0);
validos.forEach((sa) => {
  console.log(sa.toFixed(2));
});

console.log("-".repeat(40));
const totalSacado = arrSaques.reduce((acc, sa) => (acc + sa, 0));
totalSacado.toFixed(2);

const invalido = arrSaques.length - validos.length;
console.log("Tentativas inválidas: ", invalido);
