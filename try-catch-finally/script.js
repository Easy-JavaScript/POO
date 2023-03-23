/*
    O Finally sempre eh chamado na estrutura do 
    Try/Catch
*/
try {
    // Eh executado quando nao ha erros
    //console.log(a);
    console.log('Abrir um arquivo');
    console.log('Manipulei o arquivo e gerou erro');
    console.log('Fechei o arquivo');

    try {
        console.log(b);
    } catch(e) {
        console.log('Deu erro');
    } finally {
        console.log('Tambem sou finally');
    }

} catch (error) {
    // Eh executado quando ha erros
    console.log('Tratando o erro');

} finally {
    // Sempre eh executado
    console.log('FINALLY: Eu sempre sou executado');
}