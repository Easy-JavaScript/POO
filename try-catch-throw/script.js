/*
    O uso do try/catch/throw eh uma especie de if, mas para tratar
    erros.

    try {
        console.log(naoExisto);
    } catch(e) {
        console.log('naoExisto nao existe');
        console.log(e);
    }


    Para lançar seu proprio erro, basta adicionar um dos dois:
    throw new Error('sua msg');
    throw new ReferenceError('sua msg);
    throw new TypeError('Sua msg');

*/



function soma(x, y) {
    if( typeof x !== 'number' || typeof y !== 'number' ) {
        //throw new Error('x e y precisam ser numeros');
        throw new Error('x e y precisam ser numeros');
        
    }

    return x + y;
}

try {
    console.log(soma(1,2));
    console.log(soma('1',2));
} catch (error) {
    //console.log(error);
    console.log('Error: Alguma coisa mais amigavel para o usuario');
}
