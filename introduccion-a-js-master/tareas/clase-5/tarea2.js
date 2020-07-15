//TAREA: En otro archivo html (no Index) y otro archivo js (no tarea-clase-5.js),
// creá un formulario que capture el primer nombre, segundo nombre, apellido/s y edad del usuario
// también vamos a crear un <h1> que diga Bienvenido!
// vas a crear un botón de acción que una vez que lo apretás, va a
// mostrar toda la información junta en un campo de texto
// Y va a cambiar el <h1> para decir "Bienvenido, nombreDeUsuario"!

document.querySelector('#presionar').onclick = function(){
    const $nombreUsuario = document.querySelector('#nombre-usuario').value;
    const $segundoNombreUsuario = document.querySelector('#segundo-nombre-usuario').value;
    const $apellidoUsuario = document.querySelector('#apellido-usuario').value;
    const $edadUsuario = document.querySelector('#edad-usuario').value;
    const $textoBienvenidaH1 = document.querySelector('h1');
    const $campoDeTexto = document.querySelector('#campo-de-texto');
    let textoSumado = ''; // hago la string para despues sacar el largo del texto, asi puede ser infinito
    textoSumado += $nombreUsuario;
    textoSumado += $segundoNombreUsuario;
    textoSumado += $apellidoUsuario;
    textoSumado += $edadUsuario;
    $textoBienvenidaH1.innerText = `Bienvenido, ${$nombreUsuario}`;
    $campoDeTexto.size = textoSumado.length + 1;
    $campoDeTexto.value = `${$nombreUsuario} ${$segundoNombreUsuario} ${$apellidoUsuario} ${$edadUsuario}`;

    
}