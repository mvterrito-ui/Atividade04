export function salvarDadosFormulario(form) {
  const dados = {};

  form.querySelectorAll('input, select, textarea').forEach((campo) => {
    const nome = campo.name || campo.id;
    if (nome) {
      dados[nome] = campo.value.trim();
    }
  });

  try {
    localStorage.setItem('dadosCadastro', JSON.stringify(dados));
    console.log('✅ Dados salvos no localStorage:', dados);
  } catch (erro) {
    console.error('❌ Erro ao salvar dados:', erro);
  }
}

export function carregarDadosFormulario(form) {
  const dadosSalvos = localStorage.getItem('dadosCadastro');
  if (!dadosSalvos) return;

  try {
    const dados = JSON.parse(dadosSalvos);

    form.querySelectorAll('input, select, textarea').forEach((campo) => {
      const nome = campo.name || campo.id;
      if (nome && dados[nome] !== undefined) {
        campo.value = dados[nome];
      }
    });

    console.log('✅ Dados carregados do localStorage:', dados);
  } catch (erro) {
    console.error('❌ Erro ao carregar dados:', erro);
  }
}