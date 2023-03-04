class ValidaFormulario {
    constructor() {
        this.formulario = document.querySelector('.formulario'); // Pega o formulario
        this.eventos();
    }

    // Método de evento ja sendo carregado ja no construtor
    eventos() {
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e);
        });
    }

    // Método de envio
    handleSubmit(e) {
        e.preventDefault();
        
        const camposValidos = this.camposSaoValidos();
        const senhasValidas = this.senhasSaoValidas();

        // Verifica os campos e senhas, caso ambos os metodos retornem true sera feito o submit
        if(camposValidos && senhasValidas) {
            alert('Formulário enviado');
            this.formulario.submit();
        }
    }

    senhasSaoValidas() {
        let valid = true;

        const senha = this.formulario.querySelector('.senha');
        const repetirSenha = this.formulario.querySelector('.repetir-senha');

        if(senha.value !== repetirSenha.value) {
            valid = false;
            this.criaErro(senha, 'Campos senha e repetir senha precisa ser iguais');
            this.criaErro(repetirSenha, 'Campos senha e repetir senha precisa ser iguais');            
        }

        if(senha.value.length < 6 || senha.value.length > 12) {
            valid = false;
            this.criaErro(senha, 'Senha precisa estar entre 6 e 12 caracteres');
        }
        return valid;
    }

    camposSaoValidos() {
        /*
            Iniciamos com a variavel "valid" como tru, o codigo abaixo vai ser executado e caso a variavel não vire false
            será retornado no final como true.

            Toda vez que um campo da um erro, a variavel "valid" recebe o valor false
        */  
        let valid = true; 

        // Para cada erro dos campos ermove a class .error-text | vai exibir apenas uma unica vez
        for(let errorText of this.formulario.querySelectorAll('.error-text')) {
            errorText.remove();
        }

        for(let campo of this.formulario.querySelectorAll('.validar')) {
            const label = campo.previousElementSibling.innerText; // Pega o elemento anterior "labels" de cada input

            // Se existir algum campo vazio - invoca o metodo criaErro()
            if(!campo.value) {
                this.criaErro(campo, `Campo ${label} não pode estar em branco`);
                valid = false;
            }

            // Verifica apenas o campo do USUARIO
            if(campo.classList.contains('usuario')) {
                if(!this.validaUsuario(campo)) valid = false;
            }

            // Verifica apenas o campo do CPF
            if(campo.classList.contains('cpf')) {
                if(!this.validaCPF(campo)) valid = false;
            }
        }

        // Caso essa variavel não mude o valor para false no código acima, irá retorna true.
        return valid;
    }

    validaUsuario(campo) {
        const usuario = campo.value;
        let valid = true;
        
        if(usuario.length < 3 || usuario.length > 12) {
            this.criaErro(campo, 'Usuario precisa ter entre 3 e 12 caracteres.');
            valid = false;
        }

        if(!usuario.match(/^[a-zA-Z0-9]+$/g)) {
            this.criaErro(campo, 'Nome de usuario precisa conter apenas letras e/ou números.');
            valid = false;
        }

        return true;
    }

    validaCPF(campo) {
        const cpf = new ValidaCPF(campo.value);

        if(!cpf.valida()) {
            this.criaErro(campo, 'CPF inválido');
            return false;
        }

        return true;
    }

    criaErro(campo, msg) {
        const div = document.createElement('div'); // Cria uma div
        div.innerHTML = msg; // Joga uma mensagem na div criada
        div.classList.add('error-text'); // add uma class na div criada
        campo.insertAdjacentElement('afterend', div); // adiciona a div criada depois do campo
    } 

}

const valida = new ValidaFormulario();