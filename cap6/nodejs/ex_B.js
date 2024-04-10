const prompt = require("prompt-sync")();

const idadePreferencial = 60;
const arrClientes = [
  {
    nome: "",
    idade: "",
  },
];

do {
  const nomeCliente = prompt("Nome:");
  if (nomeCliente == "fim") {
    break;
  }

  const idadeCliente = Number(prompt("Idade:"));
  arrClientes.push({ nome: nomeCliente, idade: idadeCliente });
} while (true);

console.log("\nFila preferencial");

const filaPref = arrClientes.filter(
  (cliente) => cliente.idade >= idadePreferencial
);
filaPref.forEach((fila, i) => {
  console.log(`${i + 1}. ${fila.nome}`);
});

console.log("\nFila NÃO preferencial");
const filaNpref = arrClientes.filter(
  (cliente) => cliente.idade <= idadePreferencial
);
filaNpref.forEach((fila, i) => {
  console.log(`${i + 1}. ${fila.nome}`);
});
