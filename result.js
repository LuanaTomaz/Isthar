document.addEventListener("DOMContentLoaded", () => {
  // Recupera os valores enviados pelo formulário usando GET.
  const params = new URLSearchParams(window.location.search);
  const fields = {
    nome: "result-nome",
    email: "result-email",
    genero: "result-genero",
    livro: "result-livro",
    frequencia: "result-frequencia",
    quantidade: "result-quantidade",
    sugestoes: "result-sugestoes"
  };

  const hasData = [...params.keys()].length > 0;
  if (!hasData) {
    document.querySelector("#greeting").textContent = "Seu perfil começa aqui";
    document.querySelector("#result-message").textContent =
      "Ainda não recebemos suas respostas. Preencha o formulário para criar seu perfil literário.";
    return;
  }

  Object.entries(fields).forEach(([parameter, elementId]) => {
    const element = document.getElementById(elementId);
    if (!element) return;
    const value = params.get(parameter);
    if (value !== null && value.trim() !== "") {
      element.textContent = value;
    }
  });

  const nome = params.get("nome");
  if (nome) {
    document.querySelector("#greeting").textContent = `Olá, ${nome}!`;
    document.querySelector("#result-message").textContent =
      `Cada leitor tem uma história, ${nome}. Este é um retrato dos seus gostos literários.`;
  }
});
