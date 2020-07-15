/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/
const $botonAgregarCampo = document.querySelector('#agregar-input');
const $botonQuitarCampo = document.querySelector('#quitar-input');
const $botonCalcularDatos = document.querySelector('#calcular-datos');
const $listaInput = document.querySelector('#lista-input');
const $resultadoOutput = document.querySelector('#resultado-output');

$botonAgregarCampo.onclick = function () {
    generarCampo($listaInput, 'salario-anual', 'number', 'Salario anual: ');
}
$botonQuitarCampo.onclick = function () {
    borrarCampo($listaInput);
}
$botonCalcularDatos.onclick = function () {
    const salariosAnuales = obtenerSalariosAnuales();
    //let resultadoDatos = calcularTarea(salariosAnuales);
    let resultadoDatos = calcularTareaFiltrada(filtrarListaObjeto());
    $resultadoOutput.textContent = resultadoDatos;
    //filtrarListaObjeto();
}
function generarCampo(nodoParent, className = 'defaultclass', newInputType = 'number', textoLabel = 'Default: ') {
    const $listaInputs = nodoParent;
    let nuevoParrafoLabel = document.createElement('p');
    let nuevoLabel = document.createElement('label');
    let contenidoNuevaLabel = document.createTextNode(`${textoLabel}`);
    let nuevoInputParaLabel = document.createElement('input');
    nuevoInputParaLabel.type = `${newInputType}`;
    nuevoInputParaLabel.className = `${className}`; // coloco clase integrantes a todos los input
    nuevoLabel.appendChild(contenidoNuevaLabel);
    nuevoLabel.appendChild(nuevoInputParaLabel);
    nuevoParrafoLabel.appendChild(nuevoLabel);
    $listaInputs.appendChild(nuevoParrafoLabel);
    return;
}
function borrarCampo(nombreParent) {
    nombreParent.removeChild(nombreParent.lastChild);
    return;
}
function obtenerSalariosAnuales() {
    const $salariosAnuales = document.querySelectorAll('.salario-anual');
    return $salariosAnuales;
}
function filtrarListaObjeto() { // funcion para filtrar un query de todos los items pertenecientes a clase salario-anual
    const $salariosAnuales = document.querySelectorAll('.salario-anual');
    let arrayFiltroTest = [];
    for(let i = 0; i < Number($salariosAnuales.length); i++){
        arrayFiltroTest[i] = Number($salariosAnuales[i].value);
    }
    let filtered = arrayFiltroTest.filter(function (value, index, arr) { return value > 0; }); // filtro todos los valores que no sean un numero mayor a 0
    return filtered;
}

function calcularTareaFiltrada(salarioAnual) {
    const salariosAnuales = salarioAnual;
    let mayorSalarioAnual = salariosAnuales[0];
    let menorSalarioAnual = salariosAnuales[0];
    let promedioSalariosAnuales = 0;
    let promedioSalariosMensuales = 0;
    const MESES_ANIO = 12;
    let sumaSalarios = salariosAnuales[0];
    for (let i = 1; i < Number(salariosAnuales.length); i++) {
        if (mayorSalarioAnual < salariosAnuales[i]) {
            mayorSalarioAnual = salariosAnuales[i];
        } else if (menorSalarioAnual > salariosAnuales[i]){
            menorSalarioAnual = salariosAnuales[i];
        }
        sumaSalarios = sumaSalarios + salariosAnuales[i];
    }
    promedioSalariosAnuales = sumaSalarios / Number(salariosAnuales.length);
    promedioSalariosMensuales = promedioSalariosAnuales / MESES_ANIO;
    let textoResultado = [`El mayor salario anual es: ${mayorSalarioAnual}`, ` El menor salario anual es: ${menorSalarioAnual}`, ` El promedio de salario anual es: ${promedioSalariosAnuales}`, ` El promedio de salario mensual es: ${promedioSalariosMensuales}.`];
    return textoResultado;
}
/*var array = [0, 1, null, 2, "", 3, undefined, 3,,,,,, 4,, 4,, 5,, 6,,,,];
var filtered = array.filter(function (el) {
    return el != null;
  });

  console.log(filtered);*/
  /*function calcularTarea(salarioAnual) {
    const salariosAnuales = salarioAnual;
    let mayorSalarioAnual = salariosAnuales[0];
    let menorSalarioAnual = salariosAnuales[0];
    let promedioSalariosAnuales = 0;
    let promedioSalariosMensuales = 0;
    const MESES_ANIO = 12;
    let sumaSalarios = salariosAnuales[0];
    for (let i = 1; i < Number(salariosAnuales.length); i++) {
        if (mayorSalarioAnual < salariosAnuales[i]) {
            mayorSalarioAnual = salariosAnuales[i];
        } else if (menorSalarioAnual > salariosAnuales[i])
            menorSalarioAnual = salariosAnuales[i];
        sumaSalarios = sumaSalarios + salariosAnuales[i];
    }
    promedioSalariosAnuales = sumaSalarios / Number(salariosAnuales.length);
    promedioSalariosMensuales = promedioSalariosAnuales / MESES_ANIO;
    let textoResultado = [`El mayor salario anual es: ${mayorSalarioAnual}`, ` El menor salario anual es: ${menorSalarioAnual}`, ` El promedio de salario anual es: ${promedioSalariosAnuales}`, ` El promedio de salario mensual es: ${promedioSalariosMensuales}.`];
    return textoResultado;
}*/