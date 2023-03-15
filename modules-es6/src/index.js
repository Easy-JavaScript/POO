
// Tudo que é importado sem usar {} é o default do export
import * as nameModulo from './modulo3'; // retorna um objeto com tudo dentro
//console.log(nameModulo);

// tudo que é importado sem { } ele vai buscar o export default no arquivo module3
import multiplica, { name, lastName2, age, adicao } from './modulo3';

console.log(multiplica(5, 40));
console.log(name, lastName2, age, adicao(4,4));



// Utilizamos 'as' para renomeiar variaveis quando vamos importar
// renomei a variavel nome que veio do arquivo exportado como: nome2
import { name as nome2, sobrenome as lastname, idade, soma, Pessoa as Humano } from './modulo1';

// pois agora a variavel nome está recebendo um novo valor aqui dentro desse arquivo
const nome = 'Jose';
const sobrenome = 'Gomes';

console.log(nome, nome2, lastname, sobrenome, idade, soma(5,5));


const p1 = new Humano('JavaScript', 'Node js');

console.log(p1);


/* Resumindo o uso de modules do ES6

    Podemos importar o arquivo do modulo como um todo, vai ser retornado um objeto.
    Podemos importar os elementos utilizando { elem1, elem2, elem3 ...}
    Podemos importar o elemento padrão, não utilizamos as {}.
    ex: import exemploDefault, { elem1, elem2 ...}

*/