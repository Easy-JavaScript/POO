
/*
    Cuidado ao fazer isso!
    Evite, utilize métodos static dentro da class
*/
function teste() {
    console.log(this); // esse this é do objeto global do node
}

class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
        teste();
    }

    // método de instancia
    aumentarVolume() {
        this.volume += 2;        
    }
    
    // método de instancia
    diminuirVolume() {
        this.volume -= 0;
    }

    // método estático - NÃO TEM ACESSO AOS DADOS DA INSTANCIA/CONSTRUTOR
    static soma(x, y) {
        console.log(this);
        console.log('executando o método static - referente a class');
        //console.log(this.volume); // vai dar undefined, pois "this.volume" é uma propriedade do construtor. 
    }
}

const controle1 = new ControleRemoto('LG'); // instancia do objeto
controle1.aumentarVolume(); // método de instancia
controle1.aumentarVolume(); // método de instancia
controle1.aumentarVolume(); // método de instancia
console.log(controle1);

// quando não usamos a palavra new para instaciar a classe o metodo constructor não funcionar
ControleRemoto.soma(); // esse método é referente a classe
console.log(ControleRemoto.soma(4,4));
/*
    exemplo:
    Aqui utilizamos um método de static - o método random() é referente a class Math
*/ 
console.log(Math.random());
