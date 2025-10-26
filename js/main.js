import { criarCardProjeto } from './templates.js';
import { salvarDadosFormulario, carregarDadosFormulario } from './storage.js';
import { iniciarValidacao } from './form-validation.js';

console.log('mainjs')

function carregarPagina(pagina) {
  fetch(pagina)
    .then(res => res.text())
    .then(html => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      const conteudo = doc.querySelector('main');
      document.querySelector('main').innerHTML = conteudo.innerHTML;
      window.history.pushState({}, '', pagina);
      inicializarPagina();
    })
    .catch(err => {
      document.querySelector('main').innerHTML = `<p>Erro ao carregar página: ${pagina}</p>`;
      console.error(err);
    });
}

function inicializarPagina() {
  const toggle = document.querySelector('.menu-toggle');
  if (toggle) {
    toggle.addEventListener('click', () => {
      document.body.classList.toggle('menu-open');
    });
  }

  if (window.location.pathname.includes('cadastro.html')) {
    iniciarValidacao();
    const form = document.querySelector('form');
    if (form) {
      carregarDadosFormulario(form);
      form.addEventListener('submit', () => {
        console.log('form', form)
        salvarDadosFormulario(form);
      });
    }
  }

  if (window.location.pathname.includes('projetos.html')) {
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
  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', e => {
      const href = link.getAttribute('href');
      if (href.endsWith('.html')) {
        e.preventDefault();
        carregarPagina(href);
      }
    });
  });

  inicializarPagina();
});

