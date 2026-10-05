let contas = []

function gerarNumeroConta() {
  let numero

  do {
    numero = Math.floor(10000000 + Math.random() * 90000000)
  } while (contas.some(conta => conta.numero === numero))
  return numero
}

let formulario = document.getElementById("formulario");


formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  let nome = document.getElementById("nome").value;
  let conta
  let agencia = document.getElementById("agencia").value;
  let saldo = document.getElementById("saldo").value;
  let validacaoCadastro = false;

  while (!validacaoCadastro) {
    if (typeof nome !== "string" || nome.trim() === "") {
      nome = prompt("O nome digitado é inválido. Digite novamente: ")
    }
    else if (agencia.trim() === "" || isNaN(agencia) || agencia.trim().length < 4) {
      agencia = prompt("O número da agência é inválido. Digite novamente: ")
    }
    if (isNaN(saldo) || saldo.trim() === "") {
      saldo = prompt("O saldo digitado é inválido. Digite novamente: ")
    } else
      validacaoCadastro = true
  }

  conta = gerarNumeroConta()

  contas.push({
    numero: conta,
    nome: nome,
    agencia: agencia,
    saldo: saldo
  })


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
