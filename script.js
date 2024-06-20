$(document).ready(function(){

    if (!cookieExists('matricula')) {
        $('#conteudo').load('./views/login.html');
    } else if (cookieExists('prova')) {
        $('#conteudo').load('./views/prova.html');
    } else {
        $('#conteudo').load('./views/lista_provas.html');
        // $('#conteudo').load('./views/prova.html');
    }

    // dificultarInspecionarElemento();
});

// Chama uma notificação no canto superior direito que dura 2 segundos
function triggerSweetAlertNotification(icon, title) {
    Swal.fire({
        toast: true,
        timerProgressBar: true,
        width: 'fit-content',
        position: "top-end",
        icon: icon,
        title: title,
        showConfirmButton: false,
        timer: 2000
    });
}

// Função que impede uso do botão direito, F12, etc..
function dificultarInspecionarElemento() {
    
    if (document.addEventListener) {
        document.addEventListener("keydown", bloquearSource);
        document.addEventListener("contextmenu", function(e) {
            e.preventDefault();
            return false;
        });
    } else { //Versões antigas do IE
        document.attachEvent("onkeydown", bloquearSource);
        document.attachEvent("oncontextmenu", function(e) {
            e = e || window.event;
            e.returnValue = false;
            return false;
        });
    }

    function bloquearSource(e) {
        e = e || window.event;
    
        var code = e.which || e.keyCode;
    
        if (
            (e.ctrlKey &&
            (code == 83 || code == 85)) //83 = S, 85 = U
            ||
            code == 123 //F12
            ||
            e.shiftKey //Shift
        ) {
            if (e.preventDefault) {
                e.preventDefault();
            } else {
                e.returnValue = false;
            }
    
            return false;
        }
    }
}

// Função para definir um cookie
function setCookie(name, value, daysToExpire) {
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + daysToExpire);
    const cookieValue = `${name}=${value}; expires=${expirationDate.toUTCString()}; path=/`;
    document.cookie = cookieValue;
}

// Função para obter o valor de um cookie específico
function getCookie(cookieName) {
    const name = cookieName + '=';
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(';');
    
    for (let i = 0; i < cookieArray.length; i++) {
        let cookie = cookieArray[i];
        while (cookie.charAt(0) === ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(name) === 0) {
            return cookie.substring(name.length, cookie.length);
        }
    }
    return '';
}

// Função para checkar se um cookie existe
function cookieExists(cookieName) {
    // Obter todos os cookies do documento e separá-los em um array
    const cookies = document.cookie.split(';');

    // Iterar sobre cada cookie para verificar se o cookieName está presente
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim(); // Remover espaços em branco
        // Verificar se o cookie começa com o nome do cookie procurado
        if (cookie.startsWith(`${cookieName}=`)) {
            return true; // Cookie encontrado
        }
    }
    return false; // Cookie não encontrado
}

// Função para deletar um cookie
function deleteCookie(cookieName) {
    document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}

function convertToCamelCase(name) {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}

function getFirstAndLastCamelCase(fullName) {
    // Dividir a string em palavras
    const words = fullName.split(' ');

    // Selecionar a primeira e a última palavra
    const firstName = words[0];
    const lastName = words[words.length - 1];

    // Converter para CamelCase
    const firstNameCamelCase = convertToCamelCase(firstName);
    const lastNameCamelCase = convertToCamelCase(lastName);

    // Juntar as palavras resultantes
    return `${firstNameCamelCase} ${lastNameCamelCase}`;
}