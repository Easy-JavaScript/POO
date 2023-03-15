const name = 'Bruno';
const lastName2 = 'Lima';
const age = 28;
const cpf  = '05874609385';


// No modulo, so podemos exportar apenas 1 coisa como 'default'
function adicao(x, y) {
    return x + y;
}

// Exportando uma arrow function
export default (x, y) => x * y;

export { name, lastName2, age, adicao };