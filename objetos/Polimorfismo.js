/* 
    Fazer metodos se comportarem de forma diferentes em classes/funções filhas de um mesmo pai
    caracteriza-se como polimorfismo. 
*/ 

// Superclass - função construtora
function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

// Metodo sacar
Conta.prototype.sacar = function(valor) {
    if(valor > this.saldo) {
        console.log(`Saldo insuficiente: ${this.saldo}`);
        return;
    }

    this.saldo -= valor;
    this.verSaldo();
}

// Metodo depositar
Conta.prototype.depositar = function(valor) {
    this.saldo += valor;
    this.verSaldo();
}

// Metodo ver saldo
Conta.prototype.verSaldo = function() {
    console.log(
        `Ag/c: ${this.agencia}/${this.conta} | ` + 
        `Saldo: R$${this.saldo.toFixed(2)}`
    );
}

// ESPECIALIZANDO
function CC(agencia, conta, saldo, limite) {
    // Fazendo a herança
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}

// Definindo o prototype da função CC
CC.prototype = Object.create(Conta.prototype);
CC.prototype.constructor = CC;

// Sobrescrevendo o metodo sacar da superclass
CC.prototype.sacar = function(valor) {
    if(valor > (this.saldo + this.limite)) {
        console.log(`Saldo insuficiente: ${this.saldo}`);
        return;
    }

    this.saldo -= valor;
    this.verSaldo();
}

// ESPECIALIZANDO
function CP(agencia, conta, saldo) {
    // Fazendo a herança
    Conta.call(this, agencia, conta, saldo);
}

// Definindo o prototype da função CP
CP.prototype = Object.create(Conta.prototype);
CP.prototype.constructor = CP;

/*
    Objeto Conta Corrente utilizando o metodo:
    depositar() da superclass e o metodo sacar() sobrescrito.
*/

const cc = new CC(11, 22, 0, 100);
cc.depositar(10);
cc.sacar(110);
cc.sacar(1);

console.log();

/*
    Objeto Conta Poupança utilizando os metodos:
    - depositar()
    - sacar()
    da superclass
*/
const cp = new CP(12, 33, 0);
cp.depositar(10);
cp.sacar(110);
cp.sacar(1);
console.log(cp);

