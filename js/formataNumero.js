function formatarCelular(numero) {
    numero = numero.replace(/\D/g, '');
    if (numero.length === 11) {
      return numero.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    } else if (numero.length === 10) {
      return numero.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
    } else {
      return numero;
    }
  }

  function formatarInput() {
    const input = document.getElementById('telefone');
    input.value = formatarCelular(input.value);
  }