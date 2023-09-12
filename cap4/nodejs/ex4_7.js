const prompt = require("prompt-sync")();

const qntdPessoas = Number(prompt("Número de pessoas:"));
const qntdPeixes = Number(prompt("Número de peixes:"));

const valorPessoas = qntdPessoas * 20;

let valorPagar;

if (qntdPeixes > qntdPessoas) {
  const valorPeixes = (qntdPeixes - qntdPessoas) * 12;
  valorPagar = valorPeixes + valorPessoas;
}

console.log(`Pagar R$:${valorPagar.toFixed(2)}`);
