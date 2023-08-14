const frm = document.querySelector("form");
const resp1 = document.querySelector("h2");
const resp2 = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const produto = frm.inProduto.value;
  const preco = frm.inPreco.value;

  const valorUnidadeDesconto = preco / 2;
  const valorTotal = preco * 2 + valorUnidadeDesconto;
  resp1.innerText = `${produto} - Promoção: Leve 3 por R$: ${valorTotal.toFixed(
    2
  )}`;
  resp2.innerText = `O 3º Produto custa apenas R$:${valorUnidadeDesconto.toFixed(
    2
  )}`;
});

// Cada etiqueta de produto deve exibir uma msg anuncinando 50% p/ um item na compra de 3und.
