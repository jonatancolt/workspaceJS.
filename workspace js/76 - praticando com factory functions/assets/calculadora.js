function criaCalculadora() {
    return {
        display: document.querySelector('.display'),
        
        inicia() {
            this.cliqueBotoes();
            this.pressionaEnter();
        },

        pressionaEnter() {
            this.display.addEventListener('keyup', (e) => {
                if (e.key === 'Enter') {
                    this.realizaConta();
                }
            });
        },
        
        apagarDisplay() {
            this.display.value = this.display.value.slice(0, -1);
        },

        clearDisplay() {
            this.display.value = '';
        },

        realizaConta() {
            let conta = this.display.value;

            try {
                conta = eval(conta);

                if (conta === undefined) {
                    alert('Conta inválida');
                    return;
                }
                this.display.value = String(conta);
            } catch (e) {
                alert('Conta inválida');
            }
        },

        cliqueBotoes() {
            // 'this' é a calculadora
            document.addEventListener('click', (e) => {
                const el = e.target;

                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }

                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if (el.classList.contains('btn-del')) {
                    this.apagarDisplay();
                }

                if (el.classList.contains('btn-eq')) {
                    this.realizaConta();
                }
            });
        },

        btnParaDisplay(valor) {
            this.display.value += valor;
        }
    };
}

const calculadora = criaCalculadora();
calculadora.inicia();
