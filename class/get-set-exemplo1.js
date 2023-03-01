const _velocidade = Symbol('velocidade'); // criando uma chave privada chamada velocidade

class Carro {
    constructor(nome) {
        this.nome = nome;
        this[_velocidade] = 55;
    }

    set velocidade(valor) {
        console.log('SETTER');
        if(typeof valor !== 'number') return;
        if(valor >= 100 || valor <= 0) return;
        this[_velocidade] = valor;
    }

    // O get é quando você pede pra acessar o valor
    get velocidade() {
        console.log('GETTER');
        return this[_velocidade];
    }

    acelerar() {
        if(this[_velocidade] >= 100) return;
        this[_velocidade]++;
    }

    freiar() {
        if(this[_velocidade] <= 0) return;
        this[_velocidade]--;
    }
}

const c1 = new Carro('Fusca');

// for(let i = 0; i <= 200; i++) {
//     c1.acelerar();
// }

c1.velocidade = 99; // settando o valor no metodo set
console.log(c1.velocidade); // chamando o metódo get