// Tarea 1:
// Preguntarle al usuario su nombre.
// Si el nombre del usuario es el mismo que  el  de ustedes
// Imprimir "Hola, Tocayo! Yo también me llamo " y su nombre.
// Elijan otro nombre, puede ser de un pariente, amigo, conocido.
// Si el nombe del usuario es el mismo que el que nombre que eligieron
// Imprimir "Hola " y el nombre, " te llamás igual que mi ..."
// Si no, simplemente imprimir "Hola " + nombre!
let nombreUsuario = (prompt('Ingrese su nombre:', 'Juancito') || '').toLowerCase().trim();
const NOMBRE_DEV = 'federico';
const NOMBRE_PAPADEV = 'alberto';
if (nombreUsuario === NOMBRE_DEV) {
    console.log(`Hola, tocayo! Yo también me llamo ${NOMBRE_DEV}`);
} else if (nombreUsuario === NOMBRE_PAPADEV) {
    console.log(`Hola ${nombreUsuario}, te llamás igual que mi papá`);
} else if (nombreUsuario.length === 0) {
    console.log('No ingresaste un nombre.');
} else {
    console.log(`Hola ${nombreUsuario}!`);
}
//Tarea 2:
// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.
const edadUsuario = Number(prompt(`${nombreUsuario} por favor ingrese su edad.`) || 0);
const EDAD_DEV = 24;
if (edadUsuario > EDAD_DEV) {
    console.log(`${nombreUsuario} sos más grande que ${NOMBRE_DEV}`);
} else if (edadUsuario < EDAD_DEV) {
    console.log(`${nombreUsuario} sos más chico que ${NOMBRE_DEV}`);
} else if (EDAD_DEV === edadUsuario) {
    console.log(`${nombreUsuario} tenes la misma edad que ${NOMBRE_DEV}`);
} else {
    console.log('Esa no es una edad.');
}
//Tarea 3:
// Preguntarle al usuario si tiene documento, y que conteste con "si" o "no".
// Si dice si, preguntarle la edad.
// Si la edad es mayor a 18, dejarlo entrar al bar.
// Si la edad es menor a 18, no dejarlo entrar al bar.
// Si no tiene documento, no dejarlo entrar al bar.
// Si no entendemos la respuesta, le decimos que no entendimos la respuesta.
// Punto bonus: SI, NO, Si, No, si, no.
let documentoUsuario = (prompt('Posee documento? Si/No') || '').toLowerCase();

if (documentoUsuario === 'si') {
    let edadUsuario = prompt('Cual es su edad?');
    if (edadUsuario >= 18) {
        console.log(`${nombreUsuario} puedes ingresar al bar.`);
    } else if (edadUsuario < 18) {
        console.log(`${nombreUsuario} no puedes entrar al bar.`);
    } else {
        console.log('Eso no es una edad.');
    }


} else if (documentoUsuario === 'no') {
    console.log('Sin documento no puede entrar al bar')
} else {
    console.log('No entiendo la respuesta.');
}