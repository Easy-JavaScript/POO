const a1 = [1,2,3];
const a2 = [4,5,6];
//const a3 = a1.concat(a2, [7,8,9], 'Bruno');
// concatenando
// ... rest -> ... spread operator - espalha o array literal
const a3 = [...a1, 'Bruno', ...a2, ...[7,8,9]];
//console.log(a3);

/*
    Filter - Filtra o array - Sempre retorna um array com a mesma quantidade de elementos ou menos.
    Map    - Modifica o array - Altera os valores e retorna um array do mesmo tamanho do array original.
    Reduce - Reduzir o array - Reduz o array em um unico elemento.

    obs: nenhuma das funções altera o valor original do array
*/

// Retorne os números maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numeroPares = numeros
.filter(valor => valor % 2 === 0) // [50, 80, 2, 8, 22] pares
.map(valor => valor * 2) // [ 100, 160, 4, 16, 44] dobro
.reduce((ac, valor) => ac + valor); // 324 soma dos valores do array

//console.log(numeroPares);

const numerosEmDobro = numeros.map(valor => valor * 2 );
const total = numeros.reduce(function(acumulador, valor){
    if(valor % 2 !== 0) {
        acumulador += valor;
    }
    return acumulador;
    
}, 0);
//console.log(total);


const numerosFiltrados = numeros.filter(valor => valor > 10);

//console.log(numerosFiltrados);

// USANDO FILTER
// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com a  
//--
// USANDO MAP
// Para cada elemento:
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave "nome" do objeto.
// Adicione uma chave ID em cada objeto 
//--
// USANDO REDUCE
// Retorne a pessoa mais velha
const pessoas = [
    { nome: 'Bruno', idade: 50 },
    { nome: 'Jose', idade: 54 },
    { nome: 'Lima', idade: 60 },
    { nome: 'Gomes', idade: 40 },
];




const maisVelha = pessoas.reduce(function(acumulador, valor) {
    if(acumulador.idade > valor.idade) return acumulador;

    return valor;

});
//console.log(maisVelha);

const nomes = pessoas.map(obj => obj.nome );
const idades = pessoas.map(obj => ({ idade: obj.idade }));

const comIds = pessoas.map(function(obj, indice) {
    // utiliza o spread operator para não alterar o array de objetos original.
    const newObj = { ... obj };
    newObj.id = indice;
    return newObj;

});
//console.log(comIds);

//console.log(pessoas);


//const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 5);
//const pessoasComMaisDeCiquentaAnos = pessoas.filter(obj => obj.idade > 50);
//const nomeTerminaComA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'));

//console.log(pessoasComNomeGrande);
//console.log(pessoasComMaisDeCiquentaAnos);
//console.log(nomeTerminaComA);


// Foreach - para iterar os arrays
// for of
// for in
// for
// while - do while - utiliza pra quando nao sabemos quantas iterações vamos ter
const a11 = [10,20,30];


let t = 0;
a11.forEach(valor => {
    t += valor;
});
console.log(t);