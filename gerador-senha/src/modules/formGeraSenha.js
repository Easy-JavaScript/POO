// Importa a função do modulo geradores
import geraSenha from "./geradores";

// pega os elementos html
const senhaGerada   = document.querySelector('.senha-gerada');
const qtdCaracteres = document.querySelector('.qtd-caracteres');
const chkMinusculas = document.querySelector('.chk-minusculas');
const chkMaiusculas = document.querySelector('.chk-maiusculas');
const chkNumeros    = document.querySelector('.chk-numeros');
const chkSimbolos   = document.querySelector('.chk-simbolos');
const gerarSenha    = document.querySelector('.gerar-senha');

// função anonima exportada para ser usada no main.js
export default () => {
    // evento gerar senha
    gerarSenha.addEventListener('click', () => {
        senhaGerada.innerHTML = gera();
    });
};

function gera() {

    // constante senha recebe os valores retornado da função geraSenha()
    const senha = geraSenha(
        qtdCaracteres.value,
        chkMaiusculas.checked,
        chkMinusculas.checked,
        chkNumeros.checked,
        chkSimbolos.checked
    );

    return senha || 'Nada selecionado!';
}