class DispositivoEletronico {

    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {

        if(this.ligado) {
            console.log(this.nome + ' já ligado');
            return;
        }

        this.ligado = true;
    }

    desligar() {
        
        if(!this.ligado) {
            console.log(this.nome + ' já desligado');
            return;
        }

        this.ligado = false;
    }
}

// Não faça muitas hierarquias para não ficar complexo
class Smarthphone extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
        super(nome); // pega só o nome da classe PAI. chama o construtor da class pai e executa todo o codigo dele dentro do construtor da class Smarthphone
        
        // atributos especificos da class Smarthphone
        this.cor = cor;
        this.modelo = modelo;
    }
}

class Tablet extends DispositivoEletronico {
    constructor(nome, temWifi) {
        super(nome);

        this.temWifi = temWifi;
    }

    ligar() {
        console.log('Olha, você alterou o método ligar.');
    }

    falaOi() {
        console.log('Oi');
    }
}


const s1 = new Smarthphone('Samsung', 'Preto', 'Galaxy S1O');
console.log(s1);

const t1 = new Tablet('Ipad', true);
t1.ligar(); // Se não existir o método ligar() dentro da class Tablet, ele vai para a classe PAI invocar o método de la.s
t1.falaOi();