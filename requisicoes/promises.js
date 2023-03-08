function range(min, max) {
    min *= 1000;
    max *= 1000;

    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {

    // resolve: retornou com sucesso resolve ai pra mim
    // reject: deu erro no retorno, rejeita ai pra mim
    return new Promise((resolve, reject) => {

        if(typeof msg !== 'string') reject(new Error('ERRO'));
        
        setTimeout(() => {
            resolve(msg); // Chamou o método resolve(), o método then() será usado. Chamou o método reject(), o método catch() será usado.
        }, tempo);
    });  
}

esperaAi('Conexão com o DB', range(1, 3))
    .then(resposta => {
        console.log(resposta);
        return esperaAi('Buscando dados da BASE', range(1, 3));
    })
    .then(resposta => {
        console.log(resposta);
        return esperaAi(22222, range(1, 3));
    }).then(resposta => {
        console.log(resposta);
    }).then(() => {
        console.log('EXIBE OS DADOS NA TELA!');
    }) // catch é erro, ao usar promise ou try catch
    .catch(e => {
        console.log('Erro', e);
    });

console.log('Isso aqui será exibido antes de qualquer promise');

