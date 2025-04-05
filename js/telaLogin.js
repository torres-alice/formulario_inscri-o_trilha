document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    if (email === "admin@email.com" && password === "123456") {
        alert("Login bem-sucedido!");
        window.location.href = "formulario.html";
    } else {
        alert("E-mail ou senha incorretos!");
    }
});