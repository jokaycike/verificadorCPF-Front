function BuscarAPI() {
  var cpfInput = document.getElementById('caixa-texto').value;
  fetch('https://localhost:7078/api/Verificador?CPF=' + cpfInput)
    .then((response) => {
      return response.json();
    })
    .then((responseData) => {
      if (responseData['valido'] == false) {
        MensagemSucesso.style.display = "none";
        MensagemErro.style.display = "block";
        RespostaErro.innerHTML =  responseData['mensagem'];
      }
      else {
        MensagemSucesso.style.display = "block";
        MensagemErro.style.display = "none";
      }
      CPFFormatado.innerHTML = responseData['cpf'];
      EstadoCPF.innerHTML = responseData['estado'];

      var data = new Date(responseData['data']);
      var dataFormatada = `${padZero(data.getDate())}/${padZero(data.getMonth() + 1)}/${data.getFullYear()} ${padZero(data.getHours())}:${padZero(data.getMinutes())}:${padZero(data.getSeconds())}`;
      DataHora.innerHTML = dataFormatada;
    });
}

function padZero(num) {
  return num < 10 ? `0${num}` : num;
}

function Inicio() {
  MensagemSucesso.style.display = "none";
  MensagemErro.style.display = "none";
}

window.onload = Inicio;

