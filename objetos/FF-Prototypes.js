/*
    Factory Funcitons + Prototypes
*/
/*
NAO DEFINA METODOS DESSA FORMA.
function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        
            Não defina os métodos dentro da função pois afeta a performance.
            Se criar 10 objetos os métodos se repetirão, para resolver isso, basta definir os métodos no prototype Pai.
         
        falar() {
            console.log(`${this.nome} está falando.`);
        },
        comer() {
            console.log(`${this.nome} está comendo.`);
        },
        beber() {
            console.log(`${this.nome} está bebendo.`);
        }
    };
}*/

// DESACOPLANDO OS METODOS DE DENTRO DA FUNÇÃO criaPessoa()
// CHAMAMOS ISSO DE COMPOSIÇÃO/MIXIN - COMPOMOS UM OJETO COM VARIOS OUTROS OBJETOS
const falar = {
    falar() {
        console.log(`${this.nome} está falando.`);
    },
}
const comer = {
    comer() {
        console.log(`${this.nome} está comendo.`);
    },
}
const beber = {
    beber() {
        console.log(`${this.nome} está bebendo.`);
    },
}

// Definindo os métodos no Prototype Object Global
// const pessoaPrototype = { ...falar, ...comer, ...beber } // Com spread operator
const pessoaPrototype = Object.assign({}, falar, comer, beber); // Com Object.assign() - faz uma copia

function criaPessoa(nome, sobrenome) {
   
    // Retorna um objeto novo com os métodos no prototype e as chaves nome, sobrenome.
    return Object.create(pessoaPrototype, {
        nome: { value:nome },
        sobrenome: { value:sobrenome }
    });
}

// Criando um objeto pessoa. Os métodos foram acoplados no prototype GLOBAL, então posso criar vários objetos pessoas sem afetar a performance
const p1 = criaPessoa('Bruno', 'Lima'); // Não tem o nome "new" pois é uma factory function
const p2 = criaPessoa('Maria', 'Sousa');
console.log(p2);


/* 
    OBS: ESCOLHA UM PADRAO DE PROJETO PARA TRABALHAR EM UM PROJETO REAL
    - Factory Function - não usa o "new"
    - Constructor Function
    - Classes
*/