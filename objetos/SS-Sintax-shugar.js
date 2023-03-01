// Sintax Shugar
// Imagina vc fazer um sistema para um dono de ecommerce
// O que que vai ser vendido? ex: Camisa, caneca - Tudo isso é um produto
// O que é que cada coisa tem em cumum?
// O produto terá - Aumento e Desconto


function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;

    // O prototype dessa função está sendo o Object
}

// Os métodos ficam dentro do prototype do Produto
Produto.prototype.aumento = function(quantia) {
    this.preco += quantia;
};

Produto.prototype.desconto = function(quantia) {
    this.preco -= quantia;
}

// Linkando as duas funções
// A função Camiseta vai funcionar igual a função do Produto
// Camiseta é uma especialização de produto. Camiseta herda tudo que o produto tem mas pode ter suas coisas próprias também.
function Camiseta(nome, preco, cor) {
    // Passa nos parametros, "this Camiseta", nome, preco
    Produto.call(this, nome, preco);
    this.cor = cor;

    // O prototype dessa função é o Produto
}

// Definindo o prototype do objeto Camiseta
Camiseta.prototype = Object.create(Camiseta.prototype);
Camiseta.prototype.construtor = Camiseta; // Definindo o construtor do objeto Camiseta
Camiseta.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
}

// cria o objeto Caneca
function Caneca(nome, preco, material, estoque) {
    // Herda as propriedades de Produto
    Produto.call(this, nome, preco);
    this.material = material;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function() {
            return estoque;
        },
        set: function(valor) {
            if( typeof valor !== 'number') return;
            
            estoque = valor;
        }
    });
}

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.construtor = Caneca;
// cada função construtora tem sua própria propriedade prototype

const produto = new Produto('Gen', 111);
const camiseta = new Camiseta('Regata', 7.5, 'Preta');
const caneca  = new Caneca('Caneca', 13, 'Plastico', 5);
caneca.estoque = 100; // usando o setter

console.log(caneca.estoque); // usando o getter
console.log(caneca);
console.log(camiseta);
console.log(produto);
