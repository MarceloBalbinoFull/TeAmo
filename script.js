// Referências para o campo de senha, botão de envio e a mensagem de erro
const submitBtn = document.getElementById("submitBtn");
const senhaInput = document.getElementById("Senha");
const errorMessage = document.getElementById("error-message");
const successHeart = document.getElementById("success-heart");
const sadFace = document.getElementById("sad-face");

// Função para verificar a senha ao clicar no botão
submitBtn.addEventListener("click", function(event) {
    const senha = senhaInput.value;

    // Previne o envio do formulário (se houvesse um formulário real)
    event.preventDefault();

    // Inicialmente esconder as mensagens e os corações
    errorMessage.style.display = "none";
    successHeart.style.display = "none";
    sadFace.style.display = "none";

    // Verifica se a senha está correta
    if (senha !== "Te amo") {
        // Senha incorreta: exibe a mensagem de erro e carinhas tristes
        errorMessage.style.display = "block";
        sadFace.style.display = "block"; // Mostra a carinha triste
    } else {
        // Senha correta: exibe o coração pulsante
        successHeart.style.display = "block"; // Mostra o coração pulsante
    }
});