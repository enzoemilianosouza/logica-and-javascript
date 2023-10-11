const prompt = require("prompt-sync")();

const valor = Number(prompt("valor total da compra R$:"));

const totalParcelas = Math.floor(valor / 20);
const ehParcelavel = totalParcelas !== 0;

if (!ehParcelavel) {
  const qntParcelas = 1;
  const valorPorParcela = calculaValorParcela(valor, qntParcelas);
  imprimeResultado(qntParcelas, valorPorParcela);
  return;
}

if (totalParcelas > 6) {
  const qntParcelas = 6;
  const valorPorParcela = calculaValorParcela(valor, qntParcelas);
  imprimeResultado(qntParcelas, valorPorParcela);
  return;
}

const valorPorParcela = calculaValorParcela(valor, totalParcelas);
imprimeResultado(totalParcelas, valorPorParcela);

function calculaValorParcela(valorTotal, qntParcelas) {
  return valorTotal / qntParcelas;
}

function imprimeResultado(qntParcelas, valorParcela) {
  console.log(
    `pode pagar em ${qntParcelas}x de R$: ${valorParcela.toFixed(2)}`
  );
}

function calculaEimprime() {}

// const aux = Math.floor(valor / 20); //aux = nº de parcelas sem condições
// const parcelas = aux == 0 ? 1 : aux > 6 ? 6 : aux; //ternário
// const valorParcela = valor / parcelas; //cálculo valor da parcela

// if (aux == 0) {
//     parcelas = 1;
//   } else if (aux > 6) {
//     parcelas = 6;
//   } else {
//     parcelas = aux;
//   }
