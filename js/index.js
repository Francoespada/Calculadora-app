const {log} = console;

const displayValorAnterior = document.getElementById('valor-anterior');
const displayValorActual = document.getElementById('valor-actual');
const botonesNumeros = document.querySelectorAll('.numero');
const botonesOperadores = document.querySelectorAll('.operador');
const botonBorrarValor = document.getElementById('borrarValor');
const botonBorrarTodo = document.getElementById('borrarTodo');

const display = new Display(displayValorAnterior,displayValorActual);

botonBorrarValor.addEventListener('click', () => {
    display.borrar()
})

botonBorrarTodo.addEventListener('click', () => {
    display.borrarTodo()
})

botonesNumeros.forEach(boton => {
    boton.addEventListener('click', () => display.agregarNumero(boton.innerHTML)
    )
})

botonesOperadores.forEach(boton => {
    boton.addEventListener('click', () => 
        display.computar(boton.value)
    )
})