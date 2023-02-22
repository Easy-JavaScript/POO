// validando CPF
/*
    058.746.093-85 - 705.484.450-52

    0x 5x 8x 7x 4x 6x 0x 9x 3x      - 7x 0x 5x 4x 8x 4x 4x 5x 0x 5x 2x
    10 9  8  7  6  5  4  3  2
    --------------------------
    0 + 45 + 64 + 49 + 24 + 30 + 0 + 27 + 6 = 245
    11 - ( resultado % 11 )
    // Achando o primeiro digito
    11 - ( 245 % 11 ) primeiro digito: -8

    0x 5x 8x 7x 4x 6x 0x 9x 3x 8x
    11 10 9  8  7  6  5  4  3  2
    -----------------------------
    0  50 72 56 28 36 0  36 9  16 = 303
    11 - ( resultado % 11 )
    // Achando o segundo digito
    11 - ( 303 % 11 ) segundo digito: -5

*/

function ValidaCPF(cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {
        enumerable: true,
        get: function() {
            return cpfEnviado.replace(/\D+/g, '');
        }
    });
}

ValidaCPF.prototype.valida = function() {
    if(typeof this.cpfLimpo === 'undefined') return false;
    if(this.cpfLimpo.length !== 11) return false; // Se o tamanho do CPF for diferente de 11 digitos, retorne false
    if(this.isSequencia()) return false;

    const cpfParcial = this.cpfLimpo.slice(0, -2);
    const digito1    = this.criaDigito(cpfParcial);
    const digito2    = this.criaDigito(cpfParcial + digito1);
    const novoCpf    = cpfParcial + digito1 + digito2;
    
    return novoCpf === this.cpfLimpo;
};

ValidaCPF.prototype.criaDigito = function(cpfParcial) {
    const cpfArray = Array.from(cpfParcial);
    let regressivo = cpfArray.length + 1;
    const total = cpfArray.reduce((ac, val) => {
        ac += (regressivo * Number(val));
        regressivo--;
        return ac;
    }, 0);
    const digito = 11 - (total % 11);
    return digito > 9 ? '0' : String(digito);
}

// Verifica se o CPF é uma sequencia de digitos. 111.111.111-11
ValidaCPF.prototype.isSequencia = function() {
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
    return sequencia === this.cpfLimpo;
};

const cpf = new ValidaCPF('058.746.093-85');

if ( cpf.valida() ) {
    console.log('CPF VÁLIDO');
} else {
    console.log('CPF INVÁLIDO');    
}