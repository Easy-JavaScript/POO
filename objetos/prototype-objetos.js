// new Object -> Object.prototype
// Objeto Literal
const objA = {
    chaveA: 'A'
    // __proto__: Object.prototype
};
// Objeto Literal
const objB = {
    chaveB: 'B'
    // __proto__: Object.prototype
};

Object.setPrototypeOf(objB, objA);
console.log(objB);

// Contrutor de Objeto
const objC = new Object();
objC.chaveC = 'C';  

// Altera o prototypo do objeto C
// O [[prototype]] do objeto C agora é o Objeto B e o PAI dos 2 objetos é o Prototype Object
Object.setPrototypeOf(objC, objB);

//console.log(objA);

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100));
};

Produto.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
};

const p1 = new Produto('Camiseta', 50);
//p1.desconto(100);
//p1.aumento(100);

// Literal
const p2 = {
    nome: 'Caneca',
    preco: 15
};

Object.setPrototypeOf(p2, Produto.prototype);
p2.desconto(50);

            // Criando Objeto e definindo o prototype no objeto p3
const p3 = Object.create(Produto.prototype, {
    // Atributos e suas configurações
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 99
    },
    tamanho: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 42
    },
});

p3.aumento(10);
console.log(p3);
