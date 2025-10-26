
export function salvarDadosFormulario(form) {
  const dados = {};


  form.querySelectorAll('input, select, textarea').forEach((campo) => {
    const nome = campo.name || campo.id;
    if (nome) {
      dados[nome] = campo.value;
    }
  });

 
  localStorage.setItem('dadosCadastro', JSON.stringify(dados));
  console.log('Dados salvos no localStorage:', dados);
}


export function carregarDadosFormulario(form) {
  const dadosSalvos = localStorage.getItem('dadosCadastro');
  if (!dadosSalvos) return;

  const dados = JSON.parse(dadosSalvos);


  form.querySelectorAll('input, select, textarea').forEach((campo) => {
    const nome = campo.name || campo.id;
    if (nome && dados[nome]) {
      campo.value = dados[nome];
    }
  });

  console.log('Dados carregados do localStorage:', dados);
}