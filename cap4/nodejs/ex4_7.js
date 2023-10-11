const prompt = require("prompt-sync")();

const qntdPessoas = Number(prompt("Número de pessoas:"));
const qntdPeixes = Number(prompt("Número de peixes:"));
const valorEntrada = 20;
const valorPorPeixe = 12;
const valorPessoas = qntdPessoas * valorEntrada;
let valorPagar;

if (qntdPeixes > qntdPessoas) {
  const peixesExcedente = qntdPeixes - qntdPessoas;
  const valorPeixes = peixesExcedente * valorPorPeixe;
  valorPagar = valorPeixes + valorPessoas;
}

console.log(`Pagar R$:${valorPagar.toFixed(2)}`);
