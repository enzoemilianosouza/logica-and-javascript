const prompt = require("prompt-sync")();

// Solicita ao usuário o peso da ração e a quantidade que o gato consome por dia.
const pesoKg = Number(prompt("Peso da ração:"));
const consumoGato = Number(prompt("Quantas gramas o gato consome por dia?"));

// Converte o peso da ração de quilogramas para gramas.
const pesoGr = pesoKg * 1000;

// Calcula quantos dias a ração irá durar e a quantidade que vai sobrar.
const duracao = Math.floor(pesoGr / consumoGato); // A parte inteira da divisão.
const sobra = pesoGr % consumoGato; // O resto da divisão.

// Exibe na tela a duração e a quantidade que sobrou.
console.log("A ração vai durar", duracao, "dias.");
console.log("Vai sobrar", sobra, "gramas de ração.");
