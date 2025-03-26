document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  const cpf = document.getElementById("cpf").value.replace(/\D/g, "");

  let isValid = true;

  if (cpf.length !== 11 || !validateCPF(cpf)) {
    document.getElementById("cpf-error").textContent = "CPF inválido";
    isValid = false;
  } else {
    document.getElementById("cpf-error").textContent = "";
  }

});


function validateCPF(cpf) {
  if (/^(\d)\1{10}$/.test(cpf)) return false;

  let sum = 0;
  let remainder;

  for (let i = 0; i < 9; i++) {
    sum += parseInt(cpf.charAt(i)) * (10 - i);
  }

  remainder = (sum * 10) % 11;
  if (remainder === 10 || remainder === 11) remainder = 0;
  if (remainder !== parseInt(cpf.charAt(9))) return false;

  sum = 0;
  for (let i = 0; i < 10; i++) {
    sum += parseInt(cpf.charAt(i)) * (11 - i);
  }

  remainder = (sum * 10) % 11;
  if (remainder === 10 || remainder === 11) remainder = 0;
  if (remainder !== parseInt(cpf.charAt(10))) return false;

  return true;
}

function formatCPF(input) {
  let value = input.value.replace(/\D/g, "");
  if (value.length > 11) value = value.slice(0, 11);
  if (value.length > 3 && value.length <= 6) {
    input.value = value.replace(/(\d{3})(\d+)/, "$1.$2");
  } else if (value.length > 6 && value.length <= 9) {
    input.value = value.replace(/(\d{3})(\d{3})(\d+)/, "$1.$2.$3");
  } else if (value.length > 9) {
    input.value = value.replace(/(\d{3})(\d{3})(\d{3})(\d+)/, "$1.$2.$3-$4");
  } else {
    input.value = value;
  }
}