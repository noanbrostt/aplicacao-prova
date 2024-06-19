$(document).ready(function(){
    $('#conteudo').load('./views/login.html');
    // $('#conteudo').load('./views/lista_provas.html');

    // dificultarInspecionarElemento();
});


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

// Função para deletar um cookie
function deleteCookie(cookieName) {
    document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}