function formatarCPF(cpf) {
    
    cpf = cpf.replace(/\D/g, '');
    
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    
    return cpf;
}

function validarCPF(cpf) {
    
    cpf = cpf.replace(/\D/g, '');
    
    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
        return false;
    }
    
    let soma = 0;
    for (let i = 0; i < 9; i++) {
        soma += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.charAt(9))) {
        return false;
    }
    
    soma = 0;
    for (let i = 0; i < 10; i++) {
        soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.charAt(10))) {
        return false;
    }
    
    return true;
}

function verificarCPF(cpfInput) {

    cpfInput.value = formatarCPF(cpfInput.value);
    
    if (!validarCPF(cpfInput.value)) {

        let erro = cpfInput.nextElementSibling;
        if (!erro || !erro.classList.contains('erro-cpf')) {
            erro = document.createElement('div');
            erro.className = 'erro-cpf';
            erro.style.color = 'red';
            erro.style.marginTop = '5px';
            erro.style.fontSize = '0.8em';
            cpfInput.parentNode.insertBefore(erro, cpfInput.nextSibling);
        }
        erro.textContent = 'CPF inválido! Por favor, digite um CPF válido.';
        cpfInput.focus();
        throw new Error('CPF inválido');
    } else {
        const erro = cpfInput.nextElementSibling;
        if (erro && erro.classList.contains('erro-cpf')) {
            erro.remove();
        }
    }
}
