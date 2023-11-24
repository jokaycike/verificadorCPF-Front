function BuscarApi(){

  var Recebido = document.getElementById('caixa-texto').value;
  fetch('https://localhost:7078/api/Verificador?CPF=' + Recebido) 
    .then(response => {
      return response.json();
      console.log(response);
    })
    .then(data => {
      /*
      data.forEach(item => {
          console.log('Nome:', item.nome);
          console.log('Idade:', item.idade);
          console.log('Email:', item.email);
          console.log('---');
      */
        });
      // Faça o que precisar com os dados aqui
    })
    .catch(error => {
      // Caso ocorra algum erro na requisição
      console.error('Ocorreu um erro:', error);
    });
}
