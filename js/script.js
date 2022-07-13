let submit = document.getElementById('submit');

submit.addEventListener("click", validate);

function validate(e) {

    let input = document.getElementById('email');
    let erro = document.getElementById('erro');
    let seta = document.getElementById('seta');


    if (input.value == '') {
        e.preventDefault();
        erro.removeAttribute('hidden');
        seta.removeAttribute('hidden');
        input.focus();
    }
}