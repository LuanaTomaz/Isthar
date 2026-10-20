document.addEventListener("DOMContentLoaded", () => {
  // Menu adaptável para telas menores
  const menuToggle = document.querySelector(".menu-toggle");
  const mainNav = document.querySelector(".main-nav");

  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = mainNav.classList.toggle("is-open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
      menuToggle.textContent = isOpen ? "×" : "☰";
    });
  }

  // Validação adicional do formulário; os atributos HTML também validam os campos.
  const form = document.querySelector("#reader-form");
  if (form) {
    form.addEventListener("submit", (event) => {
      const nome = document.querySelector("#nome").value.trim();
      const livro = document.querySelector("#livro").value.trim();
      const quantidade = Number(document.querySelector("#quantidade").value);

      if (nome.length < 2) {
        event.preventDefault();
        alert("Por favor, informe um nome com pelo menos 2 caracteres.");
        document.querySelector("#nome").focus();
        return;
      }

      if (livro.length === 0) {
        event.preventDefault();
        alert("Por favor, informe seu livro favorito.");
        document.querySelector("#livro").focus();
        return;
      }

      if (!Number.isInteger(quantidade) || quantidade < 0 || quantidade > 100) {
        event.preventDefault();
        alert("Informe um número inteiro entre 0 e 100 para livros por mês.");
        document.querySelector("#quantidade").focus();
      }
    });
  }

  // Sinopses dos livros em uma janela acessível
  const synopsisDialog = document.querySelector("#synopsis-dialog");
  const dialogTitle = document.querySelector("#dialog-title");
  const dialogText = document.querySelector("#dialog-text");
  document.querySelectorAll(".synopsis-button").forEach((button) => {
    button.addEventListener("click", () => {
      if (synopsisDialog && dialogTitle && dialogText) {
        dialogTitle.textContent = button.dataset.title;
        dialogText.textContent = button.dataset.synopsis;
        synopsisDialog.showModal();
      }
    });
  });

  const closeDialog = document.querySelector(".close-dialog");
  if (closeDialog && synopsisDialog) {
    closeDialog.addEventListener("click", () => synopsisDialog.close());
    synopsisDialog.addEventListener("click", (event) => {
      if (event.target === synopsisDialog) synopsisDialog.close();
    });
  }
});
