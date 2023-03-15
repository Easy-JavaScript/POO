/*
    Exportando diretamente na declaração de variaveis, funções e class
*/

export const nome = 'Bruno';
export const sobrenome = 'Lima';
export const idade = 28;


export function soma(x, y) {
    return x + y;
}

export class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}