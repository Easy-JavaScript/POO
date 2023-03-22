/**
 * https://pt.wikipedia.org/wiki/ASCII
 * @param {*} min // valor da tabela ascii coluna Dec 
 * @param {*} max // valor da tabela ascii coluna Dec
 * @returns // retorna uma string criada ao usar uma sequência específica de valores Unicode.
 */

const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);
const geraMaiuscula = () => String.fromCharCode(rand(65, 91));
const geraMinuscula = () => String.fromCharCode(rand(97, 123));
const geraNumero = () => String.fromCharCode(rand(48, 58));
const simbolos = ',.;~^[]{}!@#$%*()_+=-';
const geraSimbolo = () => simbolos[rand(0, simbolos.length)];
console.log(geraSimbolo());



export default function geraSenha(qtd, maiusculas, minusculas, numeros, simbolos) {
    const senhaArray = [];
    qtd = Number(qtd);


    for (let i = 0; i < qtd; i++) {
        // a cada iteração do laço, é inserido no array senhaArray uma letra Maiuscula uma letra Minuscula, um número e um simbolo
        maiusculas && senhaArray.push(geraMaiuscula());
        minusculas && senhaArray.push(geraMinuscula());
        numeros && senhaArray.push(geraNumero());
        simbolos && senhaArray.push(geraSimbolo());
    } 

    return senhaArray.join('').slice(0, qtd);
}