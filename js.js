/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente
la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente,
 borrando los inputs ya creados (investigar cómo en MDN).
*/


/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/

function borrarEdadesDeIntegrantes() {
    let edades = document.querySelectorAll('li');
    let padre = document.querySelector('#pedir-edades')

    for (let i = 0; i < edades.length; i++) {
        document.querySelectorAll('li')[0].remove();
    }

}

function calcularPromedio(edades) {
    let suma = 0;

    for (let i = 0; i < edades.length; i++) {

        suma += Number(edades[i].value);

    }

    return suma / edades.length
}

function calcularMayor(edades) {
    let mayor = 0;

    for (let i = 0; i < edades.length; i++) {

        if (mayor < edades[i].value) {
            mayor = edades[i].value
        }

    }

    return mayor
}

function calcularMenor(edades) {
    let menor;

    for (let i = 0; i < edades.length; i++) {

        if (!menor) {
            menor = edades[i].value
        }

        if (edades[i].value < menor) {
            menor = edades[i].value
        }
    }

    return menor
}

function mostrarInputsEdades(cantidadFamiliares) {
    let $pedirEdades = document.querySelector('#pedir-edades');

    for (let i = 0; i < cantidadFamiliares; i++) {
        let li = document.createElement('li')
        let label = document.createElement('label')
        let input = document.createElement('input')

        label.innerText = `${i + 1}) Ingrese edad: `
        input.id = 'edad'

        $pedirEdades.appendChild(li)
        li.appendChild(label)
        li.appendChild(input)
    }

    $pedirEdades.className = ''
    document.querySelector('#calcular').className = ''

}

function ocultarCampoInputsEdades() {
    document.querySelector('#pedir-edades').className = 'oculto'
    document.querySelector('#calcular').className = 'oculto'
};

function mostrarAnalisis() {
    document.querySelector('#analisis').className = ''
}

function rellenarAnalisis() {

    document.querySelector('#promedio-edad').textContent = calcularPromedio(document.querySelectorAll('#edad'));
    document.querySelector('#mayor-edad').textContent = calcularMayor(document.querySelectorAll('#edad'));
    document.querySelector('#menor-edad').textContent = calcularMenor(document.querySelectorAll('#edad'));

}

document.querySelector('#adelante').onclick = function (e) {
    let cantidadFamiliares = document.querySelector('#cantidad-de-familiares').value;
    let pedidoDeEdades = document.querySelector('#edad')


    if (!pedidoDeEdades && cantidadFamiliares > 0) {
        console.log('opciones')
        mostrarInputsEdades(cantidadFamiliares);
    }
    e.preventDefault();
};


document.querySelector('#calcular').onclick = function () {
    ocultarCampoInputsEdades();
    mostrarAnalisis();
    rellenarAnalisis();
}


document.querySelector('#reset').onclick = function () {

    document.querySelector('#analisis').className = 'oculto';

    borrarEdadesDeIntegrantes();

}