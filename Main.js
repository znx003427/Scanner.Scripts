// Seleciona o botão e a mensagem
const botao = document.getElementById("meuBotao");
const mensagem = document.getElementById("mensagem");

// Adiciona um evento de clique
botao.addEventListener("click", function() {
    mensagem.textContent = "Botão clicado! 🎉";
    mensagem.style.color = "green";

    // Opcional: Altera o botão temporariamente
    botao.textContent = "Clicado!";
    setTimeout(() => {
        botao.textContent = "Clique Novamente!";
    }, 1000);
});



