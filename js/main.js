import { criarCardProjeto } from './templates.js';
import { salvarDadosFormulario, carregarDadosFormulario } from './storage.js';
import { iniciarValidacao } from './form-validation.js';

console.log('main.js carregado');

function carregarPagina(pagina) {
  fetch(pagina)
    .then(res => res.text())
    .then(html => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      const novoConteudo = doc.querySelector('main');
      const atualMain = document.querySelector('main');

      if (novoConteudo && atualMain) {
        atualMain.innerHTML = novoConteudo.innerHTML;
        window.history.pushState({}, '', pagina);
        inicializarPagina(); // reativa scripts e eventos
      }
    })
    .catch(err => {
      document.querySelector('main').innerHTML = `<p>Erro ao carregar página: ${pagina}</p>`;
      console.error('Erro ao carregar página:', err);
    });
}

function inicializarPagina() {
  const toggle = document.querySelector('.menu-toggle');
  if (toggle) {
    toggle.addEventListener('click', () => {
      document.body.classList.toggle('menu-open');
    });
  }

  const pathname = window.location.pathname;

  // Validação e salvamento do formulário
  if (pathname.includes('cadastro.html')) {
    iniciarValidacao();
    const form = document.querySelector('form');
    if (form) {
      carregarDadosFormulario(form);
      form.addEventListener('submit', () => {
        salvarDadosFormulario(form);
      });
    }
  }

  // Renderização dos projetos
  if (pathname.includes('projetos.html')) {
    const container = document.querySelector('#cards-projetos');
    if (container) {
      const projetos = [
        {
          titulo: 'Feira de Adoção',
          descricao: 'Evento para adoção de pets.',
          imagem: 'imagens/adocao.jpg',
          badge: 'Evento',
          tag: 'Adoção'
        },
        {
          titulo: 'Campanha de Vacinação',
          descricao: 'Vacinação gratuita para animais de rua.',
          imagem: 'imagens/vacinacao.jpg',
          badge: 'Saúde',
          tag: 'Vacinas'
        }
      ];
      container.innerHTML = projetos.map(criarCardProjeto).join('');
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // Intercepta cliques no menu para navegação SPA
  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', e => {
      const href = link.getAttribute('href');
      if (href && href.endsWith('.html')) {
        e.preventDefault();
        carregarPagina(href);
      }
    });
  });

  inicializarPagina(); // ativa scripts da página inicial
});