export function iniciarValidacao() {
  const form = document.querySelector('form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    let valido = true;

    const campos = form.querySelectorAll('input[required], select[required]');
    campos.forEach((campo) => {
      const valor = campo.value.trim();
      const mensagemExistente = campo.parentNode.querySelector('.mensagem-erro');

      if (!valor) {
        campo.classList.add('erro');
        valido = false;

        if (!mensagemExistente) {
          const msg = document.createElement('span');
          msg.className = 'mensagem-erro';
          msg.textContent = 'Este campo é obrigatório.';
          campo.parentNode.appendChild(msg);
        }
      } else {
        campo.classList.remove('erro');
        if (mensagemExistente) {
          mensagemExistente.remove();
        }
      }
    });

    if (!valido) {
      e.preventDefault();
      alert('Por favor, preencha todos os campos obrigatórios.');
    }
  });
}