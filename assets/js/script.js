let formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  let nome = document.getElementById("nome").value;
  let conta = document.getElementById("conta").value;
  let agencia = document.getElementById("agencia").value;
  let saldo = document.getElementById("saldo").value;

  document.getElementById("resultado").innerHTML =
    "<h2>Conta criada!</h2>" +
    "<p>Nome: " +
    nome +
    "</p>" +
    "<p>Conta: " +
    conta +
    "</p>" +
    "<p>Agência: " +
    agencia +
    "</p>" +
    "<p>Saldo: R$ " +
    saldo +
    "</p>";
});
