let nomeOk = false;
let emailOk = false;

function validaNome() {
    let nome = document.querySelector("#nome")
    let txtNome = document.querySelector("#txtNome")
    if (nome.value.length < 3) {
        txtNome.innerHTML = "Nome Inválido";
        txtNome.style.color = "white";
        nomeOk = false;
    } else {
        txtNome.innerHTML = "";
        nomeOk = true;
    }
}

function validaEmail() {
    let email = document.querySelector("#email");
    let txtEmail = document.querySelector("#txtEmail");

    if (email.value.indexOf("@") === -1 || email.value.indexOf(".") === -1) {
        txtEmail.innerHTML = "E-mail Inválido";
        txtEmail.style.color = "white";
        emailOk = false;
    } else {
        txtEmail.innerHTML = "";
        emailOk = true;
    }
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

function enviarFormulario() {
    if (nomeOk && emailOk) {
        const btnSubmit = document.getElementById('btn-enviar');
        const spinner = document.getElementById('loading-spinner');

        btnSubmit.value = 'Enviando...';
        spinner.style.display = 'inline-block'; // Mostra o spinner
        btnSubmit.disabled = true;

        return true;
    } else {
        alert("Preencha o formulário corretamente antes de enviar.");
        return false;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const btnMenu = document.getElementById('btn-menu');
    const menuMobile = document.getElementById('menu-mobile');
    const overlay = document.getElementById('overlay-menu');
    const btnFechar = menuMobile.querySelector('.btn-fechar');
    const menuLinks = menuMobile.querySelectorAll('nav ul li a');

    // Função para abrir o menu e mostrar o overlay
    function abrirMenu() {
        menuMobile.classList.add('open');
        overlay.classList.add('open');
    }

    // Função para fechar o menu e esconder o overlay
    function fecharMenu() {
        menuMobile.classList.remove('open');
        overlay.classList.remove('open');
    }

    // Adiciona eventos aos botões e links
    if (btnMenu && menuMobile && overlay && btnFechar) {
        btnMenu.addEventListener('click', abrirMenu);

        btnFechar.addEventListener('click', fecharMenu);
        overlay.addEventListener('click', fecharMenu);

        menuLinks.forEach(link => {
            link.addEventListener('click', fecharMenu);
        });
    } else {
        console.error('Um ou mais elementos não foram encontrados.');
    }
});





document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

