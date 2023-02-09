/*
    Object.keys   - retorna as chaves.
    Object.freeze - congela o objeto.
    Object.defineProperties - define várias propriedades para uma chave do objeto.
    Object.defineProperty   - define uma propriedade.
    --
    Spred operator - cria uma copia do objeto original sem altera-lo.
    Object.assign(destino, algum-objeto)   - copia o objeto principal e adiciona mais objetos dentro. faz a mesma coisa que o spred operator. so que é mais verboso.
    Object.getOwnPropertyDescriptor() - retorna os valores das propriedades do Object.defineProperty
    Object.values  - retorna os valores do objeto.
    Object.entries - retorna chave e valor em array ai pode fazer um destructure se quiser.

*/
const produto = { nome: 'Produto', preco: 1.8 };
produto.nome = 'Outro nome';
const caneca = { 
    ...produto, // espalha o objeto original dentro do objeto caneca.
    material: 'porcelana'
}; 

// const caneca = { nome: produto.nome, preco: produto.preco} - Outra forma de criar um objeto pegando outro objeto como referencia.
// const caneca = Object.assign({}, produto, { material: 'porcelana'});

Object.defineProperty(produto, 'nome', {
    writable: false,
    configurable: false,
    value: 'Qualquer outra coisa'
});
//console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));

for(let valor of Object.entries(produto)) {
    console.log(valor[0], valor[1]);
}
