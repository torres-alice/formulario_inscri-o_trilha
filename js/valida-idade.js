            const idade = document.getElementById('idade').value;
            const idadeError = document.getElementById('idadeError');
            if (!/^\d+$/.test(idade) || parseInt(idade) <= 0 || parseInt(idade) > 120) {
                idadeError.style.display = 'block';
                isValid = false;
            } else {
                idadeError.style.display = 'none';
            }