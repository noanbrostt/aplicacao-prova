$(document).ready(function(){

    if (window.location.href.includes("10.98.32.42")) {
        urlApi = 'http://10.98.32.42/psi/prova-api/';
    } else {
        urlApi = 'https://colombo.plansul.com.br/psi/prova-api/';
    }

    if (!cookieExists('matricula')) {
        $('#conteudo').load('./views/templates/login.html');
    } else if (cookieExists('provaId')) {
        $('#conteudo').load('./views/views_usuario/prova.html');
    } else if (cookieExists('ultimaRota')) {
        $('#conteudo').load(`./views/views_admin/${getCookie('ultimaRota')}.html`);
    } else if (getCookie('usuario') == 'admin') {
        $('#conteudo').load(`./views/views_admin/habilitar_admin.html`);
    } else {
        $('#conteudo').load('./views/views_usuario/lista_provas.html');
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
        timer: 2800
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
    const cookieValue = `${name}=${utf8ToBase64(value)}; expires=${expirationDate.toUTCString()}; path=/`;
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
            return base64ToUtf8(cookie.substring(name.length, cookie.length));
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

function capitalizeWords(str) {
    return str.toLowerCase().replace(/\b\w/g, function(char) {
        return char.toUpperCase();
    });
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

function getCurrentTime() {
    const now = new Date();

    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0'); // getMonth() retorna meses de 0 a 11
    const day = String(now.getDate()).padStart(2, '0');
    
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

function utf8ToBase64(str) {
    return btoa(unescape(encodeURIComponent(str)));
}

function base64ToUtf8(base64) {
    return decodeURIComponent(escape(atob(base64)));
}

function construirQuestao(questao, numeroQuestao) {
    // Expressão regular para identificar números romanos
    let regex = /\b([IVXLCDMivxlcdm]+)\./g;
    // Função para substituir os números romanos por eles mesmos com <br> antes
    let novoTexto = questao.de_pergunta.replace(regex, '<br>$1.');

    let letra = 'a';
    let questaoHTML = `
      <div class="questao">
        <div class="info">
          <span class="question" co_questao="${questao.co_pergunta}">${numeroQuestao}. ${novoTexto}</span>
        </div>`;

    questao.alternativas.split(';.;').forEach(alternativaComCodigo => {
      let alternativa = alternativaComCodigo.split(':-D');

      questaoHTML += `
        <input type="radio" id="${numeroQuestao}-${letra}" name="${numeroQuestao}" value="${letra}" co_alternativa="${alternativa[0]}" />
        <label for="${numeroQuestao}-${letra}">${letra}) ${alternativa[1]}</label>`;
      letra = proximaLetra(letra);
    });

    questaoHTML += `</div>`;
    return questaoHTML;
}

function proximaLetra(letra) {
return String.fromCharCode(letra.charCodeAt(0) + 1);
};