function range(min, max) {
    min *= 1000;
    max *= 1000;

    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            
            if(typeof msg !== 'string') {
                reject(false);
                return;
            }

            resolve(msg.toUpperCase() + ' - Passei na promise'); 
        }, tempo);
    });  
}

/*
*   Promise.all Promise.race Promise.resolve Promise.reject
*/ 

function baixaPagina() {
    const emCache = true;

    if(emCache) {
        return Promise.resolve('Página em cache'); // .reject - ja dispara o then()
        //return Promise.reject('Página em cache'); // .reject - ja dispara o catch()
    } else {
        return esperaAi('Baixei a página', 3000);
    }
}

baixaPagina()
    .then(dadosPagina => {
        console.log(dadosPagina);
    })
    .catch(e => console.log('Erro:', e));

const  promises  = [
    
    esperaAi('Promise 1', range(1, 5)),
    esperaAi('Promise 2', range(1, 5)),
    esperaAi(1000, range(1, 5)),
    
];


/*
 *   all() : Resolve todas as promises, se alguma der erro, todas param de ser executadas.
 *   caso alguma promise retorne um erro o metodo catch é invocado exibindo o erro
*/
Promise.all(promises)
    .then(function(valor) {
        console.log(valor);
    })
    .catch(function(erro) {
        console.log(erro);
    });

/**
 * race() : percorre todas as promessas e retorna a primeira promise que carregar.
 */
Promise.race(promises)
    .then(function(valor) {
        console.log(valor);
    })
    .catch(function(erro) {
        console.log(erro);
    });