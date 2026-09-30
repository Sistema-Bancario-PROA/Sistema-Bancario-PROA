let formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  let nome = document.getElementById("nome").value;
  let conta = document.getElementById("conta").value;
  let agencia = document.getElementById("agencia").value;
  let saldo = document.getElementById("saldo").value;

  if (nome == "") {
    alert("Digite seu nome!");
    return;
  }

  if (conta == "") {
    alert("Digite o número da conta!");
    return;
  }

  if (agencia == "") {
    alert("Digite a agência!");
    return;
  }

  if (saldo == "") {
    alert("Digite o saldo!");
    return;
  }

  if (saldo < 0) {
    alert("O saldo não pode ser negativo!");
    return;
  }

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
