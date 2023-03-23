function retornaHora(data) {

    // Se o parametro data nao eh uma instacia do objeto Date, vai dar erro.
    if( data && !(data instanceof Date)) {
        throw new TypeError('Esperando instancia de Date.');
    }

    if( !data ) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}

try {
    const data = new Date('01-01-1970 12:58:12');
    const hora = retornaHora(data);
    console.log(hora);
} catch(e) {
    // Tratar erro
    console.log(e);
} finally {
    console.log('Tenha um bom dia.');
}
