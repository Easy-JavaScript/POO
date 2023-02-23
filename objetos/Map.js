/*
    Utilizando MAP
    O método map() cria uma nova matriz 
    preenchida com os resultados da chamada de uma função 
    fornecida em cada elemento da matriz de chamada.
    
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
*/

const pessoas = [
    { id: 3, nome: 'Bruno' },
    { id: 2, nome: 'Lima'  },
    { id: 1, nome: 'Jose'  },
];

// const novasPessoas = {};
// for ( const pessoa of pessoas ) {
//     const { id } = pessoa;
//     novasPessoas[id] = { ...pessoa };
// }

const novasPessoas = new Map();
for (const pessoa of pessoas) {
    const { id } = pessoa;
    novasPessoas.set(id, { ...pessoa });
}

// for ( const pessoa of pessoas.values() ) {
//     console.log(pessoas);
// }
novasPessoas.delete(2);
console.log(novasPessoas);