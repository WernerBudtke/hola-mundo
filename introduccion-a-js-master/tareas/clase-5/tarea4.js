//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

//console.log(document.querySelectorAll('li'));
let listaOrdenada = document.querySelectorAll('li');
console.log(listaOrdenada);
//console.log(listaOrdenada[2].innerText);
let numMasGrande = Number(listaOrdenada[0].innerText);
let numMasChico = Number(listaOrdenada[0].innerText);
let sumTotal = Number(listaOrdenada[0].innerText);
let promedioTotal = 0;
for (let i = 1; i < listaOrdenada.length; i++) {
    if (Number(listaOrdenada[i].innerText) > numMasGrande) {
        numMasGrande = Number(listaOrdenada[i].innerText);
    }
    if (Number(listaOrdenada[i].innerText) < numMasChico) {
        numMasChico = Number(listaOrdenada[i].innerText);
    }
    sumTotal = sumTotal + Number(listaOrdenada[i].innerText);
}
let numConMasRepeticiones = obtenerNumeroMasRepetido(listaOrdenada);
console.log(obtenerNumeroMasRepetido(listaOrdenada));
promedioTotal = sumTotal / listaOrdenada.length;
console.log(promedioTotal);
console.log(numMasGrande);
console.log(numMasChico);
document.querySelector("#texto-promedio").textContent = String(promedioTotal);
document.querySelector("#texto-numero-mayor").textContent = String(numMasGrande);
document.querySelector("#texto-numero-menor").textContent = String(numMasChico);
document.querySelector("#texto-numero-repetido").textContent = String(numConMasRepeticiones);
function obtenerNumeroMasRepetido(numeros) {
    let numeroComparacion = 0
    let cantidadRepeticionesActual = 0
    let mayorCantidadRepeticiones = 0
    let numeroMasRepetido = 0
    for (let i = 0; i < Number(numeros.length); i++) {
        numeroComparacion = numeros[i].innerText;
        for (let i = 0; i < Number(numeros.length); i++) {
            if (numeroComparacion === numeros[i].innerText) {
                cantidadRepeticionesActual++
            }
        }
        if (cantidadRepeticionesActual > mayorCantidadRepeticiones) {
            mayorCantidadRepeticiones = cantidadRepeticionesActual;
            numeroMasRepetido = numeroComparacion;
        }
        cantidadRepeticionesActual = 0
    }
    return numeroMasRepetido;
}
