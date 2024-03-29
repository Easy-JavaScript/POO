// 705.484.450-52 070.987.720-03
// Class é a mesma coisa de função construtora "new"
export default class ValidaCPF {
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            enumerable: true, // exibe a propriedade 'cpfLimpo' dentro do objeto.
            configurable: false,
            value: cpfEnviado.replace(/\D+/g, '')
        });
    }

    éSequência() {
        return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;
    }

    geraNovoCpf() {
        const cpfSemDigitos = this.cpfLimpo.slice(0, -2);
        const digito1       = ValidaCPF.geraDigito(cpfSemDigitos);
        const digito2       = ValidaCPF.geraDigito(cpfSemDigitos + digito1);
        this.novoCPF        = cpfSemDigitos + digito1 + digito2;
    }

    // quando não tem nenhum "this" sendo usado dentro do método, ele pode virá um método static
    static geraDigito(cpfSemDigitos) {
        let total = 0;
        let reverso = cpfSemDigitos.length + 1;

        for (let stringNumerica of cpfSemDigitos) {
            total += reverso * Number(stringNumerica);
            reverso--;
        }

        const digito = 11 - (total % 11);

        return digito <= 9 ? String(digito)  : '0';
    } 

    valida() {
        if(!this.cpfLimpo) return false; // Se não existir cpfLimpo retorna falso.
        if(typeof this.cpfLimpo !== 'string') return false;
        if(this.cpfLimpo.length !== 11) return false;
        if(this.éSequência()) return false;
        this.geraNovoCpf();

        return this.novoCPF === this.cpfLimpo;
    }
}