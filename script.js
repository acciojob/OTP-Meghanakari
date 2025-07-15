//your JS code here. If required.
const codeInputs = document.querySelectorAll('.code');

codeInputs.forEach((input, index) => {
    input.addEventListener('input', (e) => {
        if (e.target.value.length === 1 && index < codeInputs.length - 1) {
            codeInputs[index + 1].focus();
        }
    });

    input.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace' && index > 0) {
            if (e.target.value.length === 0) {
                codeInputs[index - 1].focus();
                codeInputs[index - 1].value = '';
            } else {
                e.target.value = '';
            }
        }
    });
});

document.getElementById('code-1').focus();
