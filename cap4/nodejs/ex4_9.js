const prompt = require("prompt-sync")();

const numero = Number(prompt("Insira uma centena: "));

if (numero < 100 || numero >= 1000) {
  console.log("Ops, errou! deve ser uma centena!");
  return;
}

const num1 = Math.floor(numero / 100); //obtém 1º número
const sobra = numero % 100; //o que sobra (dezena)
const num2 = Math.floor(sobra / 10); //obtém nº 2
const num3 = sobra % 10; //nº 3
console.log(`Invertido: ${num3}${num2}${num1}`);
