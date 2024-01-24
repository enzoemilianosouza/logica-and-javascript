const form = document.querySelector("form");
const resp = document.querySelector("h3");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const valueNumber = form.inNumber.value;
  const result = valueNumber % 2;

  //   if (result == 0) {
  //     resp.innerText = `${valueNumber} É PAR`;
  //   } else {
  //     resp.innerText = `${valueNumber} É ÍMPAR`;
  //   }

  result == 0
    ? (resp.innerText = `${valueNumber} É PAR`)
    : (resp.innerText = `${valueNumber} É ÍMPAR`);
});
