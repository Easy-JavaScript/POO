/*
*   Utilizamos a função setInterval() quando queremos trabalhar com um intervalo de tempo.
    para que uma função seja executada em um determinado tempo.
*/

function mostraHora() {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

const timer = setInterval(function() {
    console.log(mostraHora());
}, 1000);

// setTimeout Só executa uma vez
setTimeout(function() {
    clearInterval(timer); // Para o timer do setInterval
}, 3000);

setTimeout(function() {
    console.log('Olá mundo!');
}, 5000);