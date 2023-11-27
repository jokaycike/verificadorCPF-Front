function BuscarAPI() {
  var cpfInput = document.getElementById('caixa-texto').value;
  fetch('https://localhost:7078/api/Verificador?CPF=' + cpfInput)
    .then((response) => {
      return response.json();
    })
    .then((responseData) => {
      if (responseData['valido'] == false) {
        cpfOK.style.display = "none";
        MensagemSucesso.style.display = "none";
        mensagemErro.style.display = "block";
        respostaErro.innerHTML =  data['Mensagem'];
      }
      else {
        cpfOK.style.display = "block";
        MensagemSucesso.style.display = "block";
        mensagemErro.style.display = "none";
      }
      CPFFormatado.innerHTML = responseData['cpf'];
      EstadoCPF.innerHTML = responseData['Estado'];

      DataHora.innerHTML = responseData['Data'];
    });
}


function Inicio() {
  cpfOK.style.display = "none";
  MensagemSucesso.style.display = "none";
  mensagemErro.style.display = "none";
}

window.onload = Inicio;

