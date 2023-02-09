// Declaração de função (Function Hoisting)
falaOi();

function falaOi() {
    console.log('Oie');
}

// Firt-class objects (Objetos de primeira classe)
// Function expression
const souUmDado = function () {
    console.log('Sou um dado');
}

function executaFuncao(funcao) {
    console.log('Vou executar sua função abaixo: ');
    funcao();
}
executaFuncao(souUmDado);

// Arrow Function
const funcaoArrow = () => {
    console.log('Sou uma arrow function');
}
funcaoArrow();

// Dentro de um objeto
const obj = {
    
    falar() {
        console.log('Estou falando 2...');
    }
};
obj.falar();

// Funciona apenas para funções que utilizam a palavra "function".
// Não funciona para arrow function 
// variavel global "arguments" sustenta todos os argumentos enviados
function funcao(a, b, c) {
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }
    console.log(total, a, b);
}
funcao(1,2,3,4,5);

function soma(a, b = 2, c = 4) {
    console.log(a + b + c);
}
soma(2, undefined, 10);

function teste([valor1, valor2, valor3]) {
    console.log(valor1, valor2, valor3);
}
teste(['Bruno Lima', 'Jose', 30]);

// rest operation
const conta = (...args) => {
    // for (let numero of numeros) {
    //     if (operador === '+') acumulador += numero;
    //     if (operador === '-') acumulador -= numero;
    //     if (operador === '/') acumulador /= numero;
    //     if (operador === '*') acumulador *= numero;
    // }
    console.log(args);
}
conta('+', 1, 20,30,40,50);

function soma(a,b) {
    return a + b;
}

// document.addEventListener('click', function() {
//     document.body.style.backgroundColor = 'red';
// });

function criaPessoa(nome, sobrenome) {
    return {
        nome: nome, sobrenome: sobrenome
    }
}

const p1 = criaPessoa('Luiz', 'Otavio');
const p2 = {
    nome: 'Joao',
    sobrenome: 'Oliveira'
};

console.log(typeof p1);
console.log(typeof p2);



// Exemplo de função clousure
function criaMultiplicador(multiplicador) {
    // multiplicador
    return function(n) {
        return n * multiplicador;
    };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadruplica = criaMultiplicador(4);



console.log(duplica(2));
console.log(triplica(2));
console.log(quadruplica(2));


// Exemplo escopo léxico
const nome = 'Bruno';

function falaNome() {
    console.log(nome);
}

function usaFalaNome() {
    const nome = 'Lima';
    falaNome();
}

usaFalaNome();


// Clousure é a habilidade que a função tem em acessar seu escopo lexico. 
function retornaFuncao(nome) {
    return function () {
        return nome;
    }
} 

const funcaoA = retornaFuncao('Bruno');
const funcaoB = retornaFuncao('Jose');
console.dir(funcaoA);
console.dir(funcaoB);

console.log(funcaoA(), funcaoB());

// Gera um número aleatório entre 1000 a 3000
function rand(min = 1000, max = 3000) {
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}

function f1(callback) {
    setTimeout(function() {
        console.log('f1');
        if (callback) callback();
    }, rand());
}

function f2() {
    setTimeout(function(callback) {
        console.log('f2');
        if (callback) callback();
    }, rand());
}

function f3() {
    setTimeout(function() {
        console.log('f3');
        if (callback) callback();
    }, rand());
}
// callback hell - inferno do callback
// f1(function() {
//     f2(function() {
//         f3(function() {
//             console.log('Olá mundo!');
//         });
//     });
// });

f1(f1Callback);

function f1Callback() {
    f2(f2Callback);
}

function f2Callback() {
    f3(f3Callback);
}

function f3Callback() {
    console.log('Olá mundo!');
}

// IIFE 
(function(idade, peso, altura) {
    // tudo que for escrito aqui dentro, não afetará o escopo global

    const sobrenome = 'Miranda';
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }

    function hi() {
        console.log(criaNome('Luiz'));
    }

    hi();
    console.log(idade, peso, altura);

})(30, 80, 1.80);

const name = 'Qualquer coisa';

// Funções fábrica - Factury Functions
// a factury function e a construct functions fazem a mesma coisa, voce so precisa decidir qual usar.
function criaPessoa(nome, sobrenome, a, p) {
    return {
        nome, 
        sobrenome,
        
        // Getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },
        
        // Setter
        set nomeCompleto(valor) {
           valor = valor.split(' ');
           this.nome = valor.shift();
           this.sobrenome = valor.join(' ');
        },

        fala(assunto) {
            return `${this.nome} está ${assunto}`;
        },
        altura: a,
        peso: p,
        
        // Getter
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
        
    };
}

const q1 = criaPessoa('Luiz', 'Otávio', 1.8, 80);
q1.nomeCompleto = 'Bruno Lima';
console.log(q1.nome);
console.log(q1.sobrenome);
console.log(q1.fala('falando sobre algo'));



// As duas são apenas um molde para criar objetos
// Função construtora -> objetos
// Função fabrica -> objetos
// Construtora -> Camel Case - usa New para criar objetos

function Pessoa(nome, sobrenome) {

    // São utilizados apenas aqui dentro da função construtora. 
    // Não precisa está acessivel fora da função construtora.
    // Atributos ou métodos Privados - Podem ser (variaveis, metodos, etc)  
    const ID  = 123456;
    
    const metodoInterno = function() {};

    // Podem ser utilizados fora da função construtora com o .
    // Atributos ou métodos públicos 
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function() {
        console.log(this.nome + ': Sou um método');
    };
}

const p4 = new Pessoa('Bruno', 'Lima');
const p5 = new Pessoa('Jose', 'Zenio');
p5.metodo();
console.log(p5.nome);

// -------CALCULADORA----------

// Factury Function
function criaCalculadora() {
    return {
        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),
        
        inicia() {
            this.cliqueBotoes();
            this.pressionaEnter();
        },

        pressionaEnter() {
            this.display.addEventListener('keyup', e => {
                
                // Press Enter
                if (e.keyCode === 13) {
                    this.realizaConta();
                }
            });
        },

        clearDisplay() {
            this.display.value = '';
        },

        apagaUm() {
            this.display.value = this.display.value.slice(0, -1);
        },

        realizaConta() {
            let conta = this.display.value;

            // tratando erros nas operações
            try {
                conta = eval(conta);
                
                // verifica se os valores são válidos. Caso não seja exiba um alerta.
                if(!conta) {
                    alert('Conta inválida');
                    return;
                }

                // caso seja válido, exibe o resultado como string
                this.display.value = String(conta);

            } catch(e) {
                alert('Conta inválida');
                return;
            }
        },

        
        cliqueBotoes() {

            // Com arrow function não precisa do .bind()
            //document.addEventListener('click', e => {
            document.addEventListener('click', function(e) {
                const el = e.target;

                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }

                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if (el.classList.contains('btn-del')) {
                    this.apagaUm();
                }

                if (el.classList.contains('btn-eq')) {
                    this.realizaConta();
                }

                // Use o .bind para dizer ao document que o this dentro do if pertence a ele e não ao objeto global.
            }.bind(this));
        },

        btnParaDisplay(valor) {
            this.display.value += valor;
        }

    };
}
const calculadora = criaCalculadora();
calculadora.inicia();

// Constructor Function
function Calculadora() {

    // Atributos
    this.display  = document.querySelector('.display');
    this.btnClear = document.querySelector('.btn-clear'); 

    // Métodos
    this.inicia = () => {
        this.cliqueBotoes();
        this.pressionaEnter();
    };
    this.pressionaEnter = () => {
        document.addEventListener('keyup', e => {
            if(e.keyCode === 13) this.realizaConta();
        });
    };
    this.clearDisplay = () => {
        this.display.value = '';
    };
    this.apagaUm = () => {
        this.display.value = this.display.value.slice(0, -1);
    };
    this.realizaConta = () => {
        
        try {
            let conta = eval(this.display.value);

            if(!conta) {
                alert('Conta inválida');
                return;
            }

            this.display.value = String(conta);

        } catch (e) {
            alert('Conta inválida');
            return;
        }
    };
    this.cliqueBotoes = () => {
        document.addEventListener('click', e => {
            const el = e.target;
            if (el.classList.contains('btn-num')) {
                this.btnParaDisplay(el.innerText);
                this.display.focus();
            }  
            if (el.classList.contains('btn-clear')) this.clearDisplay();
            if (el.classList.contains('btn-del'))   this.apagaUm();
            if (el.classList.contains('btn-eq'))    this.realizaConta();
        });
    };
    this.btnParaDisplay = valor => this.display.value += valor;
}

const calc = new Calculadora();
calc.inicia();


