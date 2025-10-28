# ONG Amigão — Projeto Web Responsivo

Este projeto foi desenvolvido como parte da disciplina de Desenvolvimento Web, com o objetivo de criar uma aplicação acessível, otimizada e pronta para produção. A ONG Amigão é uma organização fictícia dedicada à causa animal, e o site permite visualizar projetos, cadastrar voluntários e navegar de forma responsiva e acessível.

---

##  Estrutura do Projeto


---

# Funcionalidades

- SPA com navegação dinâmica entre páginas
- Cadastro de voluntários com validação de formulário
- Armazenamento local dos dados via `localStorage`
- Cards dinâmicos de projetos gerados via JavaScript
- Menu responsivo com toggle para dispositivos móveis

---

# Acessibilidade (WCAG 2.1 Nível AA)

- Estrutura semântica com uso de `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`
- Navegação por teclado com foco visível
- Contraste mínimo de 4.5:1 garantido em todos os textos
- Imagens com `alt` descritivo
- Botão de menu com `aria-label` para leitores de tela
- Suporte a modo escuro via `prefers-color-scheme`

---

# Validação e Armazenamento

- Validação de campos obrigatórios com feedback visual
- Mensagens de erro dinâmicas e acessíveis
- Dados do formulário salvos e carregados automaticamente via `localStorage`

---

# Otimização para Produção

- Todas as imagens foram comprimidas com TinyPNG
- A minificação de CSS e JS foi testada, mas optou-se por manter os arquivos originais para preservar o layout e evitar conflitos com a navegação SPA
- Justificativa técnica documentada conforme boas práticas

---

# Versionamento com Git/GitHub

- Branches organizados seguindo GitFlow (`main`, `develop`, `feature/...`)
- Commits semânticos (`feat:`, `fix:`, `docs:`)
- Releases com versionamento semântico (`v1.0.0`)
- Pull Requests documentados
- Issues e milestones utilizados para controle de progresso

---

# Tecnologias Utilizadas

- HTML5
- CSS3 com Design System
- JavaScript (ES6 Modules)
- Git/GitHub

---

##Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

---

## Link do Repositório

[https://github.com/seu-usuario/ong-amigao](https://github.com/seu-usuario/ong-amigao)