// Função para validar o número inserido pelo usuário
function validarNumero() {
    // Pega o valor digitado no input com id "numero"
    let numero = document.getElementById("numero").value;
    // Pega o elemento onde a mensagem será exibida
    
    let mensagem = document.getElementById("mensagem");
    // Verifica se o campo está vazio

    if (numero === "") {
        // Se estiver vazio, exibe uma mensagem de erro em vermelho
        mensagem.textContent = "Por favor, insira um número.";
        mensagem.style.color = "red";
    }
    else {
        // Converte o valor digitado (string) para número inteiro

        numero = parseInt(numero);
        // Verifica se o número é maior que 10
        if (numero > 10) {
            // Se for maior que 10, exibe a mensagem em verde
            mensagem.textContent = "O número é maior que 10.";
            mensagem.style.color = "green";
        }
        else {
            // Se não for maior que 10, verifica se é maior que 5
            if (numero > 5) {
                // Se for maior que 5 (mas menor ou igual a 10), exibe mensagem em laranja
                mensagem.textContent = "O número é maior que 5, mas menor ou igual a 10.";
                mensagem.style.color = "orange";
            }
            else {
                // Se não atender nenhuma das condições anteriores, o número é 5 ou menor
                mensagem.textContent = "O número é 5 ou menor.";
                mensagem.style.color = "blue";
            }
        }
    }
}