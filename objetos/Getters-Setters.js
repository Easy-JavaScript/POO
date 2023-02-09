// GETTERS E SETTERS EM FUNÇÃO CONSTRUTORA E 

// FUNÇÃO CONSTRUTORA
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave estoque
        configurable: true, // permite alterar o valor da chave estoque
        get: function() {
            return estoquePrivado;
        },
        set: function(valor) {
            if (typeof valor !== 'number') {
                throw new TypeError('Mensagem');
            }
            estoquePrivado = valor;
        }
    });
}

// FACTORY FUNCTION
function criaProduto(nome) {
    return {
        get nome() {
            return nome;
        },
        set nome(valor) {
            valor = valor.replace('coisa', '');
            nome = valor;
        }
    }
}

// FACTORY FUNCTION
const p2 = criaProduto('Camiseta');
p2.nome = 'Qualquer coisa.';
console.log(p2.nome);

// FUNÇÃO CONSTRUTORA
//const p1 = new Produto('Camiseta', 20, 3);
//p1.estoque = 470;
//console.log(p1.estoque);