export function criarCardProjeto({ titulo, descricao, imagem, badge, tag }) {
  return `
    <div class="card">
      <h3>${titulo}</h3>
      <p>${descricao}</p>
      <img src="${imagem}" alt="${titulo}" class="img-projeto" />
      <span class="badge">${badge}</span>
      <span class="tag">${tag}</span>
    </div>
  `;
}