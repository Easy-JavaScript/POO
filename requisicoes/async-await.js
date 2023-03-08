/*
*   Funções para simular um delay de requisição
*/

function range(min = 0, max = 3) {
    min *= 1000;
    max *= 1000;

    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {

    // Promise
    /**
     * Pending: Fica aguardando o retorno da requisição.
     * Fulfil: Requisição completa
     * Reject: Requisição rejeitada por algum erro.
     */
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

/*  FORMATO 01

esperaAi('Fase 1', range())
    // o then() retorna o valor da Promise Fase 1
    .then(valor => {
        console.log(valor);
        return esperaAi('Fase 2', range());
    // o then() retorna o valor da Promise Fase 2
    }).then(valor => {
        console.log(valor);
        return esperaAi('Fase 3', range());
    // o then() retorna o valor da Promise Fase 3
    }).then(valor => {
        console.log(valor);
        return valor;
    }).then(valor => {
        console.log('Terminamos na fase:', valor);
    }).catch(erro => console.log(erro));
*/

/**
 *  OTIMIZANDO O FORMATO 01 COM ASYNC - AWAIT
 */

// Quando especificamos a palavra "async" podemos utilizar dentro da função o "await"    
async function executa() {
    try {
        // a constante fase1 recebe o retorno do await
        const fase1 = await esperaAi('Fase 1', range());
        console.log(fase1);

        const fase2 = await esperaAi('Fase 2', range());
        console.log(fase2);

        const fase3 = await esperaAi(22, range());
        console.log(fase3);

        console.log('Terminamos na fase: '. fase3);
        
    } catch (e) {
        console.log(e);
    }
    
}

executa();