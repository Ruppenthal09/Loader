// Função para trocar o loader
function mostrarVersao(versao) {
    const container = document.getElementById("loader-container");

    // Remove qualquer loader anterior
    container.innerHTML = "";

    // Cria um elemento div para o loader
    const loader = document.createElement("div");
    loader.className = `loader-v${versao}`;

    // Adiciona 3 pontinhos dentro do loader
    for (let i = 0; i < 3; i++) {
        const ponto = document.createElement("span");
        loader.appendChild(ponto);
    }

    // Coloca o loader na tela
    container.appendChild(loader);
}

// Mostra a primeira versão ao carregar a página
mostrarVersao(1);
