export function iniciarValidacao() {
  const form = document.querySelector('form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    let valido = true;

    const campos = form.querySelectorAll('input[required], select[required]');
    campos.forEach((campo) => {
      if (!campo.value.trim()) {
        campo.classList.add('erro');
        valido = false;

        if (!campo.nextElementSibling || !campo.nextElementSibling.classList.contains('mensagem-erro')) {
          const msg = document.createElement('span');
          msg.className = 'mensagem-erro';
          msg.textContent = 'Este campo é obrigatório.';
          campo.parentNode.insertBefore(msg, campo.nextSibling);
        }
      } else {
        campo.classList.remove('erro');
        if (campo.nextElementSibling && campo.nextElementSibling.classList.contains('mensagem-erro')) {
          campo.nextElementSibling.remove();
        }
      }
    });

    if (!valido) {
      e.preventDefault();
      alert('Por favor, preencha todos os campos obrigatórios.');
    }
  });
}

