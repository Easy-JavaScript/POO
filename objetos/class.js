class Pessoa {
    
    // metódo especial que é executado sempre que a classe é criada
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    // O metódo falar já é setado no prototype global automaticamente
    falar() {
        console.log(`${this.nome} está falando.`);
    }

}

// Função construtora
function Pessoa2(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

// Setando o metódo falar no prototype global
Pessoa2.prototype.falar = function() {
    console.log(`${this.nome} está falando.`);
}
const p1 = new Pessoa('Bruno', 'Lima');
const p2 = new Pessoa2('geni', 'Lima');

