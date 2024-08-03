
let nome = window.document.getElementById("nome")
let email = window.document.querySelector('#email') 
let telefone = window.document.querySelector('#telefone')
let assunto = window.document.querySelector('#assunto')


let nomeOk = false;
let assuntoOk = false;
let emailOk = false;



function validaNome(){
    let nome = document.querySelector("#nome")
    let txtNome = document.querySelector("#txtNome")
    if (nome.value.length  < 3){
        txtNome.innerHTML = "Nome Inválido";
        txtNome.style.color = "white";
        nomeOk = false;

    }   else{
        txtNome.innerHTML = "";
        nomeOk = true;
    }
}

function validaEmail() {
    let email = document.querySelector("#email");
    let txtEmail = document.querySelector("#txtEmail");
    
    if (email.value.indexOf("@") === -1 || email.value.indexOf(".") == -1) {
        txtEmail.innerHTML = "E-mail Inválido";
        txtEmail.style.color = "white";
        emailOk = false;
      
    } else {
        txtEmail.innerHTML = "";
    }   emailOk = true;
}

function formatarTelefone() {
    let telefone = document.querySelector("#telefone");
    let valor = telefone.value;

    valor = valor.replace(/\D/g, '');


    if (valor.length > 10) {
        valor = valor.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
       
    } else if (valor.length > 5) {
        valor = valor.replace(/(\d{2})(\d{5})/, '($1) $2');
        
    } else if (valor.length > 2) {
        valor = valor.replace(/(\d{2})/, '($1) ');
        
    }
    
    telefone.value = valor;
}   

function enviarFormulario(){
    if (nomeOk == true && emailOk == true) {
        alert("Formulário enviado com sucesso!")
    } else {
        alert("Preencha o formulário corretamente antes de enviar.")
    }
}


document.addEventListener('DOMContentLoaded', () => {
    let btnMenu = document.getElementById('btn-menu');
    let menu = document.getElementById('menu-mobile');
    let overlay = document.getElementById('overlay-menu');
    let btnFechar = document.querySelector('#menu-mobile .btn-fechar'); // Botão de fechar dentro do menu

    if (btnMenu && menu && overlay && btnFechar) {
        // Abrir o menu ao clicar no botão
        btnMenu.addEventListener('click', () => {
            menu.classList.add('abrir-menu');
            overlay.style.display = 'block'; // Exibir o overlay
        });

        // Fechar o menu ao clicar no botão de fechar ou no overlay
        btnFechar.addEventListener('click', () => {
            menu.classList.remove('abrir-menu');
            overlay.style.display = 'none'; // Esconder o overlay
        });

        overlay.addEventListener('click', () => {
            menu.classList.remove('abrir-menu');
            overlay.style.display = 'none'; // Esconder o overlay
        });
    } else {
        console.error('Um ou mais elementos não foram encontrados.');
    }
});

