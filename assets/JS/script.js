/*----------Variáveis------------*/

let form = document.querySelector('#form');
let campos = document.querySelectorAll('.required');
let required = document.querySelectorAll('.span__required');
let emailRegex = /^\w+([-+']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;


form.addEventListener('submit', (event) => {
    event.preventDefault();
    nameValidate();
    emailValidate();
    mainSenhaValidate();
    confirmarSenha();    
})




/*------Funções para aparecer uma borda e um texto quando não atingir o objetivo-------*/

function setError(index) {
    campos[index].style.border = '3px solid #CC0000';
    required[index].style.display = 'block';
}

/*------Funções para desaparecer uma borda e um texto quando atingir o objetivo-------*/

function removeError(index) {
    campos[index].style.border = '';
    required[index].style.display = 'none';
}

/*------Funções para verificar a condição do nome-------*/

function nameValidate() {
    if (campos[0].value.length < 3) {
        setError (0);
    }
    else {
       removeError(0);
    }
}

/*------Funções para verificar a condição do email-------*/

function emailValidate() {
    if(!emailRegex.test(campos[1].value)) {
        setError (1);
    }
    else {
        removeError (1);
    }    
}

/*------Funções para verificar a condição da senha-------*/

function mainSenhaValidate() {
    if (campos[2].value.length < 8) {
        setError(2);
    }
    else {
        removeError(2);
        confirmarSenha();
    }
}

function confirmarSenha() {
    if (campos[3].value.length != campos[2].value.length) {
        setError(3);
    }
    else {
        removeError(3);
    }
}
