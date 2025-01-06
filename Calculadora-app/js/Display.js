class Display {
    constructor(displayValorAnterior, displayValorActual){
        this.displayValorAnterior = displayValorAnterior;
        this.displayValorActual = displayValorActual;
        this.calculador = new Calculadora();
        this.tipoOperacion = undefined;
        this.valorActual = '';
        this.valorAnterior = '';
        this.signos = {
            sumar: '+',
            restar: '-',
            dividir: '/',
            multiplicar: '*'
        }
    }


    borrar(){
        this.valorActual = this.valorActual.toString().slice(0,-1);
        this.imprimirValores();    
    }

    borrarTodo(){
        this.valorActual = '';
        this.valorAnterior = '';
        this.tipoOperacion = undefined;
        this.imprimirValores()
    }

    computar(tipo){
        this.tipoOperacion !== 'igual' && this.calcular();
        this.tipoOperacion = tipo;
        this.valorAnterior = this.valorActual || this.valorActual;
        this.valorActual = '';
        this.imprimirValores();
    }

    agregarNumero(numero){
        if(numero === '.' && this.valorActual.includes('.')) return;
        this.valorActual = this.valorActual.toString() + numero;
        this.imprimirValores();
    }

    imprimirValores(){
        const formatearNumero = (numero) => {
            if (!numero) return '';
            const partes = numero.toString().split('.');
            partes[0] = partes[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');
            return partes.join(',');
        };

        const formatoActual = formatearNumero(this.valorActual);
        const formatoAnterior = formatearNumero(this.valorAnterior);

        this.displayValorActual.textContent = formatoActual;
        this.displayValorAnterior.textContent = `${formatoAnterior} ${this.signos[this.tipoOperacion] || ''}`;
    }

    calcular(){
        const valorAnterior = parseFloat(this.valorAnterior);
        const valorActual = parseFloat(this.valorActual);

        if( isNaN(valorActual) || isNaN(valorAnterior)) return;
        this.valorActual = this.calculador[this.tipoOperacion](valorAnterior, valorActual);
    }
}