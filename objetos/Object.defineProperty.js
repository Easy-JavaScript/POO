// Utiliza-se defineProperty e defineProperties para ter o maior controle de cada chave do objeto.
// Usa defineProperty apenas para controlar uma chave.
// Usa defineProperties para controlar várias chaves.
function Produto(nome, preco, estoque) {

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave estoque
        value: estoque, // valor
        writable: false, // permite alterar o valor de value
        configurable: true // permite alterar o valor da chave estoque
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true, 
            value: nome,
            writable: true,
            configurable: true
        },
        preco: {
            enumerable: true,
            value: preco,
            writable: true,
            configurable: true
        },
    });

   
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);

for (let chave in p1) {
    console.log(chave);
}