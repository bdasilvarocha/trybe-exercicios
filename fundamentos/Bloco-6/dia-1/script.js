function criaEstados() {
  let estados = document.getElementById('state');
  let opcaoEstados = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];
  
  for (let index = 0; index < opcaoEstados.length; index += 1) {
    let opcoes = document.createElement('option');
    opcoes.innerText = opcaoEstados[index];
    opcoes.value = opcaoEstados[index];
    estados.appendChild(opcoes);
  }
}
criaEstados()
