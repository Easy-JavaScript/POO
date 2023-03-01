class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    // Ao usar "get" em um metódo ele deixa de ser um metódo e vira uma propriedade do objeto.
    get nomeCompleto() {
        return this.nome + ' ' + this.sobrenome;
    }

    set nomeCompleto(valor) {
        valor = valor.split(' '); // transforma a string em um array [ 'Bruno', 'Lima', 'Gomes' ]
        this.nome = valor.shift(); // remove o primeiro elemento do array "Bruno"
        this.sobrenome = valor.join(' '); // junta todos os elementos de um array em uma string e retorna essa string
    }
}

const p1 = new Pessoa('Bruno', 'Lima');
p1.nomeCompleto = 'Bruno Lima Gomes';
console.log(p1.nome);
console.log(p1.nomeCompleto); // acessando a propriedade "nomeCompleto"