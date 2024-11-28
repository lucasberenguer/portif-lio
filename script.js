document.addEventListener("DOMContentLoaded", () => {
    // Botão na Home
    const verProjetoBtn = document.getElementById("ver-projeto");
    if (verProjetoBtn) {
        verProjetoBtn.addEventListener("click", () => {
            window.location.href = "projeto.html"; // Certifique-se de que o nome do arquivo está correto.
        });
    }

    // Botão na página do Projeto
    const voltarHomeBtn = document.getElementById("voltar-home");
    if (voltarHomeBtn) {
        voltarHomeBtn.addEventListener("click", () => {
            window.location.href = "index.html"; // Certifique-se de que o nome do arquivo está correto.
        });
    }
});
