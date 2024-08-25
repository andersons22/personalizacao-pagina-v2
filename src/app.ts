document.addEventListener("DOMContentLoaded", function () {
    const userForm = document.getElementById("userForm") as HTMLFormElement;
    const colorForm = document.getElementById("colorForm") as HTMLFormElement;
    const greeting = document.getElementById("greeting") as HTMLParagraphElement;
    const finalMessage = document.getElementById("finalMessage") as HTMLParagraphElement;

    userForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Captura o nome e exibe a mensagem de saudação
        const name = (document.getElementById("nameInput") as HTMLInputElement).value;
        greeting.textContent = `Olá, ${name}. Em qual cor está pensando?`;

        // Esconde o formulário de nome/email e exibe o formulário de escolha de cor
        userForm.style.display = "none";
        colorForm.style.display = "block";
    });

    colorForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Aplica a cor escolhida ao fundo da página
        const color = (document.getElementById("colorInput") as HTMLInputElement).value;
        document.body.style.backgroundColor = color;

        // Esconde o formulário de escolha de cor e exibe a mensagem final
        colorForm.style.display = "none";
        finalMessage.style.display = "block";
    });
});