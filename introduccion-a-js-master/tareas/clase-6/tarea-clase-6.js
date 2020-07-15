/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/
const $botonNumeroDePersonas = document.querySelector('#ingreso-numero-personas');
const $botonCalcularDatos = document.querySelector('#calcular-datos');
const $botonReiniciarTodo = document.querySelector('#reset-todo');
const $listaInputs = document.querySelector('#lista-input');
const $resultadoDatos = document.querySelector('#resultado-datos');
const $inputNumeroDePersonas = document.querySelector('#numero-integrantes-familia');
let viejoNumPersonas = 0;
const NOMBRE_PARENT = '#lista-input';
$botonNumeroDePersonas.onclick = function () {
    let numPersonas = obtenerNumeroDePersonas();
    console.log(numPersonas);
    if (numPersonas > viejoNumPersonas) {
        let nuevoNumPersonas = numPersonas - viejoNumPersonas;
        generarInputField(nuevoNumPersonas);
        viejoNumPersonas = numPersonas;
    } else if (numPersonas < viejoNumPersonas) {
        limpiarInputField(NOMBRE_PARENT);
        generarInputField(numPersonas);
        viejoNumPersonas = numPersonas;
    } else {

    }
}
$botonReiniciarTodo.onclick = function () {
    limpiarInputField(NOMBRE_PARENT);
    $resultadoDatos.textContent = '';
    viejoNumPersonas = 0;
}
$botonCalcularDatos.onclick = function () {
    let edadIntegrantes = obtenerEdadIntegrantes();
    let textoResultado = calcularDatosIntegrantes(edadIntegrantes);
    $resultadoDatos.textContent = textoResultado;
}
function calcularDatosIntegrantes(edadIntegrantes) {
    let $datosEdadIntegrantes = edadIntegrantes;
    let mayorEdadIntegrantes = Number($datosEdadIntegrantes[0].value);
    let menorEdadIntegrantes = Number($datosEdadIntegrantes[0].value);
    let promedioIntegrantes = 0;
    let sumaTodosIntegrantes = Number($datosEdadIntegrantes[0].value);
    for (let i = 1; i < Number($datosEdadIntegrantes.length); i++) {
        if (mayorEdadIntegrantes < Number($datosEdadIntegrantes[i].value)) {
            mayorEdadIntegrantes = Number($datosEdadIntegrantes[i].value);
        } else if (menorEdadIntegrantes > Number($datosEdadIntegrantes[i].value)){
            menorEdadIntegrantes = Number($datosEdadIntegrantes[i].value);
        }
        sumaTodosIntegrantes = sumaTodosIntegrantes + Number($datosEdadIntegrantes[i].value);
    }
    promedioIntegrantes = sumaTodosIntegrantes / Number($datosEdadIntegrantes.length);
    /*console.log(mayorEdadIntegrantes);
    console.log(menorEdadIntegrantes);
    console.log(promedioIntegrantes);*/
    let textoResultado = [`La mayor edad es: ${mayorEdadIntegrantes} años`, ` La menor edad es: ${menorEdadIntegrantes} años`, ` El promedio de edad es: ${promedioIntegrantes} años.`];
    return textoResultado;

}
function obtenerEdadIntegrantes() {
    const $datosEdadIntegrantes = document.querySelectorAll('.integrantes');
    return $datosEdadIntegrantes;
}
function obtenerNumeroDePersonas() {
    return Number($inputNumeroDePersonas.value);
}
function generarInputField(numPersonas) {
    for (let i = 0; i < numPersonas; i++) {
        let nuevoParrafoLabel = document.createElement('p');
        let nuevoLabel = document.createElement('label');
        let contenidoNuevaLabel = document.createTextNode('Edad: ');
        let nuevoInputParaLabel = document.createElement('input');
        nuevoInputParaLabel.type = 'number';
        nuevoInputParaLabel.className = 'integrantes'; // coloco clase integrantes a todos los input
        nuevoLabel.appendChild(contenidoNuevaLabel);
        nuevoLabel.appendChild(nuevoInputParaLabel);
        nuevoParrafoLabel.appendChild(nuevoLabel);
        $listaInputs.appendChild(nuevoParrafoLabel);
    }
}
function limpiarInputField(nombreParent) {
    let todosLosInputFieldIntegrantes = document.querySelector(`${nombreParent}`);
    todosLosInputFieldIntegrantes.textContent = '';
}
/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/
