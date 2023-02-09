const pessoa = {
    nome: 'Luiz',
    sobreNome: 'Otavio'
};

const chave = 'sobreNome'
//console.log(pessoa[chave]); // notação de colchete serve para passar valores dinâmicos
//console.log(pessoa.sobreNome); // notação de ponto
//----------------------------
const pessoa1 = new Object();
pessoa1.nome = 'Bruno';
pessoa1.sobreNome = 'Lima';
pessoa1.idade = 28;
pessoa1.falarNome = function() {
    return (`${this.nome} está falando seu nome.`);
};
pessoa1.getDataNascimento = function() {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
}

for (let chave in pessoa1) {
    console.log(pessoa1[chave]);
}
//console.log(pessoa1.getDataNascimento());
//pessoa1.falarNome();

// Utiliza-se um dos dois para definir como Padrões de Projetos
// Factory functions | Constructor functions | Classes
function criaPessoa(nome, sobreNome) {
    return {
        nome,
        sobreNome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobreNome}`;
        }
    }
}

const p1 = criaPessoa('Bruno', 'Lima');
//console.log(p1.nomeCompleto);

// Objeto com função construtora - a primeira letra tem que ser maiuscula.
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobreNome = sobrenome;

    Object.freeze(this);// trava o objeto

}

// a palavra new cria um objeto vazio {} e tbm pega a palavra this
const pe1 = new Pessoa('Bruno', 'Lima');
delete p1.nome;
pe1.nome = 'outra coisa';
pe1.fala = function() {console.log('Oi');};
pe1.fala();
const pe2 = new Pessoa('Jose', 'Gomes');

console.log(pe1);
console.log(pe2);