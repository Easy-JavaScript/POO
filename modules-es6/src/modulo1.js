const nome = 'Bruno';
const sobrenome = 'Lima';
const idade = 28;


function soma(x, y) {
    return x + y;
}


// Exportando diretamente na declaração da class
export class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}

// Podemos utilizar o 'as' no export também.
// exportamos a variavel nome como name
export { nome as name, sobrenome, idade, soma }