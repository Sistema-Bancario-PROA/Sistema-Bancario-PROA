let formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  let nome = document.getElementById("nome").value;
  let conta = document.getElementById("conta").value;
  let agencia = document.getElementById("agencia").value;
  let saldo = document.getElementById("saldo").value;
  let validacaoCadastro = false;

   while(!validacaoCadastro ){
      if(typeof nome !== "string" || nome.trim() === "" ){
      nome = prompt("O nome digitado é inválido. Digite novamente: ")
      }
      else if (conta.trim() === "" || isNaN(conta) || conta.trim().length < 8){
        conta = prompt("Número de conta inválido. Digite novamente: ")
      }
      else if(agencia.trim() === "" || isNaN(agencia) || conta.trim().length < 4){
        agencia = prompt ("O número da agência é inválido. Digite novamente: ")
      }
      if(isNaN(saldo) || saldo.trim() === "" ){
        saldo = prompt ("O saldo digitado é inválido. Digite novamente: ")
      } else 
        validacaoCadastro = true
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
