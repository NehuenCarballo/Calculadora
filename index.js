const app = document.getElementById('app'); 

//Uso 3 variables que van a dar uso en cuanto al guardar el valor "clickeado"
var num1;
var num2;
var operacion;

function borrar() { // elimina el valor cuando se selecciona el signo para realizar la operacion
    resultado.textContent = ""
}

function resetear() { // resetea el resultado dejandolo vacio y pone en 0 las variables que van a ser usadas
    resultado.textContent = ""
    num1 = 0;
    num2 = 0;
    operacion = 0;
}

function resolver() { // realiza la operacion dependiendo del operador utilizado
    resFinal = 0
    switch (operacion) { // elegi como metodo el switch para que se ejecute dependiendo de las condiciones establecidas en los case 
        case "+":
            resFinal = parseFloat(num1) + parseFloat(num2)
            break;
        case "-":
            resFinal = parseFloat(num1) - parseFloat(num2)
            break;
        case "*":
            resFinal = parseFloat(num1) * parseFloat(num2)
            break;
        case "/":
            resFinal = parseFloat(num1) / parseFloat(num2)
            break;
    }
    resetear();
    resultado.textContent = resFinal;
}

const container = document.createElement('div') // genero un nodo hijo de "app" que va a ser el contenedor para el div
app.appendChild(container)

var resultado = document.createElement('h1')  // otro nodo hijo pero del "div" que va a ser el resultado
container.appendChild(resultado)


// a partir de este punto comienza la creacion de los botones en su respectivo orden 
const boton7 = document.createElement('button')
boton7.textContent = 7
container.appendChild(boton7)
boton7.onclick = function(event) {
    resultado.textContent = resultado.textContent + "7"
}

const boton8 = document.createElement('button')
boton8.textContent = 8
container.appendChild(boton8)
boton8.onclick = function(event) {
    resultado.textContent = resultado.textContent + "8"
}

const boton9 = document.createElement('button')
boton9.textContent = 9
container.appendChild(boton9)
boton9.onclick = function(event) {
    resultado.textContent = resultado.textContent + "9"
}

const botonDividir = document.createElement('button')
botonDividir.textContent = '/'
container.appendChild(botonDividir)
botonDividir.onclick = function(event) {
    num1 = resultado.textContent
    operacion = "/"
    borrar()
}

const boton4 = document.createElement('button')
boton4.textContent = 4
container.appendChild(boton4)
boton4.onclick = function(event) {
    resultado.textContent = resultado.textContent + "4"
}

const boton5 = document.createElement('button')
boton5.textContent = 5
container.appendChild(boton5)
boton5.onclick = function(event) {
    resultado.textContent = resultado.textContent + "5"
}

const boton6 = document.createElement('button')
boton6.textContent = 6
container.appendChild(boton6)
boton6.onclick = function(event) {
    resultado.textContent = resultado.textContent + "6"
}

const botonMultiplicar = document.createElement('button')
botonMultiplicar.textContent = '*'
container.appendChild(botonMultiplicar)
botonMultiplicar.onclick = function(event) {
    num1 = resultado.textContent
    operacion = "*"
    borrar()
}

const boton1 = document.createElement('button')
boton1.textContent = 1
container.appendChild(boton1)
boton1.onclick = function(event) {
    resultado.textContent = resultado.textContent + "1"
}

const boton2 = document.createElement('button')
boton2.textContent = 2
container.appendChild(boton2)
boton2.onclick = function(event) {
    resultado.textContent = resultado.textContent + "2"
}

const boton3 = document.createElement('button')
boton3.textContent = 3
container.appendChild(boton3)
boton3.onclick = function(event) {
    resultado.textContent = resultado.textContent + "3"
}

const botonResta = document.createElement('button')
botonResta.textContent = '-'
container.appendChild(botonResta)
botonResta.onclick = function(event) {
    num1 = resultado.textContent
    operacion = "-"
    borrar()
}

const botonC = document.createElement('button')
botonC.textContent = 'C'
container.appendChild(botonC)
botonC.onclick = function(event) {
    resetear()
}

const boton0 = document.createElement('button')
boton0.textContent = 0
container.appendChild(boton0)
boton0.onclick = function(event) {
    resultado.textContent = resultado.textContent + "0"
}

const botonIgual = document.createElement('button')
botonIgual.textContent = '='
container.appendChild(botonIgual)
botonIgual.onclick = function(event) {
    num2 = resultado.textContent
    resolver()
}

const botonSuma = document.createElement('button')
botonSuma.textContent = '+'
container.appendChild(botonSuma)
botonSuma.onclick = function(event) {
    num1 = resultado.textContent
    operacion = "+"
    borrar()
}


