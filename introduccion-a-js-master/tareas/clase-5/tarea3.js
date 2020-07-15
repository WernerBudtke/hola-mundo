//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.

document.querySelector('#boton-resultado').onclick = function () {
    let $videoHoras = [];
    let $videoMinutos = [];
    let $videoSegundos = [];
    $videoHoras[0] = Number(document.querySelector('#video-uno-horas').value);
    $videoMinutos[0] = Number(document.querySelector('#video-uno-minutos').value);
    $videoSegundos[0] = Number(document.querySelector('#video-uno-segundos').value);
    $videoHoras[1] = Number(document.querySelector('#video-dos-horas').value);
    $videoMinutos[1] = Number(document.querySelector('#video-dos-minutos').value);
    $videoSegundos[1] = Number(document.querySelector('#video-dos-segundos').value);
    $videoHoras[2] = Number(document.querySelector('#video-tres-horas').value);
    $videoMinutos[2] = Number(document.querySelector('#video-tres-minutos').value);
    $videoSegundos[2] = Number(document.querySelector('#video-tres-segundos').value);
    $videoHoras[3] = Number(document.querySelector('#video-cuatro-horas').value);
    $videoMinutos[3] = Number(document.querySelector('#video-cuatro-minutos').value);
    $videoSegundos[3] = Number(document.querySelector('#video-cuatro-segundos').value);
    $videoHoras[4] = Number(document.querySelector('#video-cinco-horas').value);
    $videoMinutos[4] = Number(document.querySelector('#video-cinco-minutos').value);
    $videoSegundos[4] = Number(document.querySelector('#video-cinco-segundos').value);
    let sumaHoras = 0;
    let sumaMinutos = 0;
    let sumaSegundos = 0;
    let totalHoras = 0;
    for(let i=0;i<$videoHoras.length;i++){
        sumaHoras = sumaHoras + $videoHoras[i];
        sumaMinutos = sumaMinutos + $videoMinutos[i];
        sumaSegundos = sumaSegundos + $videoSegundos[i];
    }
    
    totalHoras = sumaHoras + (sumaMinutos/60) + (sumaSegundos/3600);
    let restoHoras = totalHoras % 1;
    let restoMinutos = restoHoras * 60
    let restoSegundos = (restoMinutos % 1) * 60;
    restoHoras = totalHoras - restoHoras;
    /*console.log(restoTiempo);
    console.log(totalHoras);
    console.log(restoTiempoSegundos);*/
    document.querySelector('#texto-resultado').innerText = `Horas: ${restoHoras} Minutos: ${restoMinutos} Segundos: ${restoSegundos}`;
}