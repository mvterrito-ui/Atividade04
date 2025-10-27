export function criarCardProjeto({ titulo = '', descricao = '', imagem = '', badge = '', tag = '' }) {
  return `
    <div class="card">
      <h3>${escapeHtml(titulo)}</h3>
      <p>${escapeHtml(descricao)}</p>
      <img src="${escapeHtml(imagem)}" alt="${escapeHtml(titulo)}" class="img-projeto" />
      <span class="badge">${escapeHtml(badge)}</span>
      <span class="tag">${escapeHtml(tag)}</span>
    </div>
  `;
}

// Função auxiliar para evitar injeção de HTML
function escapeHtml(text) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return String(text).replace(/[&<>"']/g, m => map[m]);
}