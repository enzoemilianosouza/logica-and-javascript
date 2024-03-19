// Elabore um programa p/ uma empresa que leia o salário e o tempo que o funcionário trabalha na empresa.
// Sabendo que a cada 4 anos o funcionário recebe um acréscimo de 1% no salário,
// calcule e informe o número de quadriênios a que o funcionário tem direito e o salário final.

const prompt = require("prompt-sync")();

const salario = Number(prompt("Salário"));
const tempo = Number(prompt("Tempo na empresa"));

const quatroAnos = Math.floor(tempo / 4); //faço a divisão e arredondo p/ baixo
const calculoSalario = (salario * quatroAnos) / 100;

console.log(quatroAnos);
console.log(calculoSalario + salario);
