document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("btnSalvar").addEventListener("click", function () {
        const dados = {
            nome: document.getElementById("nome").value,
            cpf: document.getElementById("cpf").value,
            dataNascimento: document.getElementById("dataNascimento").value,
            sexo: document.getElementById("sexo").value,
            email: document.getElementById("email").value,
            telefone: document.getElementById("telefone").value,  
            cep: document.getElementById("cep").value,
            rua: document.getElementById("rua").value,
            numero: document.getElementById("numero").value,
            cidade: document.getElementById("cidade").value,
            estado: document.getElementById("estado").value,
            trilha: document.querySelector('input[type="radio"]:checked')?.value || '',
            termos: document.getElementById("termos").checked
        };

        localStorage.setItem("dadosInscricao", JSON.stringify(dados));
        alert("Informações salvas!");
    });
});


document.getElementById("formInscricao").addEventListener("submit", function (e) {
    e.preventDefault();  

    alert("✅ Inscrição realizada com sucesso!");

     
});
