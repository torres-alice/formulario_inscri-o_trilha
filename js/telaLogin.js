document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const cpfDigitado = document.getElementById("cpf").value;
    const senhaDigitada = document.getElementById("password").value;

     
    const cpfCorreto = "103.163.403-75";
    const senhaCorreta = "senha123";

    if (cpfDigitado === cpfCorreto && senhaDigitada === senhaCorreta) {
        alert("Login bem-sucedido!");
        setTimeout(() => {
        window.location.href = "index.html"; 
        }, 1000)
    } else {
        alert("CPF ou senha incorretos!");
    }
});
 