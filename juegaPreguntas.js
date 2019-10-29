
const contenedorJugar= document.getElementById("jugar");
const resultadoJugar= document.getElementById("resultado");
const botonJugar= document.getElementById("btnJugar");
//creo un objeto que tiene una propiedad llamada pregunta
const preguntas = [
    {
        pregunta:"1.Cuántas temporadas tuvo 'The walking dead'?",
        //creo un objeto dentro de otro que contiene tres propiedades que manejo como opciones
        respuestas: {
            a:"8",
            b:"9",
            c:"10"
        },
        //creo otra propiedad que tendra la respuesta correcta de cada objeto
        acertar : "c"
    },
    //cada pregunta será un nuevo objeto con las propiedades del anterior
    {
        pregunta:"2.Cuál es el nombre real de Marilyn Monroe?",
        respuestas: {
            a:"Johanna",
            b:"Norma",
            c:"Emily"
        },
        acertar : "b"
    },
    {
        pregunta:"3.Quién es el director de Piratas del Caribe ,la maldición del perla negra?",
        respuestas: {
            a:"Ted Elliot",
            b:"Terry Rossio",
            c:"Hans Zimmer",
            d:"Gore Verbinski"
        },
        acertar : "d"
    },
    {
        pregunta:"4.Como se llama el actor, compañero de John Travolta en Pulp Fiction?",
        respuestas: {
            a:"Martin Laurence",
            b:"Samuel L. Jackson",
            c:"Johnny Depp",
            d:"Denzel Washigton"
        },
        acertar : "b"
    },
    {
        pregunta:"5.De qué compañia es la película Las Crónicas de Narnia: el león, la bruja y el ropero?",
        respuestas: {
            a:"Dreamworks",
            b:"Walt Disney Pictures",
            c:"Warner Bros."
        },
        acertar : "b"
    },
    {
        pregunta:"6.En qué año se lanzo la primera pelicula de Matrix?",
        respuestas: {
            a:"1998",
            b:"1997",
            c:"2000",
            d:"2001",
            e:"1999"
        },
        acertar : "e"
    },
    {
        pregunta:"7.Qué profesión no tuvo Arnold Schwarzenegger ",
        respuestas: {
            a:"Fisicoculturista",
            b:"Político",
            c:"Director de Finanzas",
            d:"Gobernador",
            e:"Director de tv"
        },
        acertar : "c"
    },
    {
        pregunta:"8.Cómo se llamaba la hermana de Michael Corleone en el padrino?",
        respuestas: {
            a:"Constanza",
            b:"Coraline",
            c:"Caroline"
        },
        acertar : "a"
    },
    {
        pregunta:"9.A que dedicaba el papel de Julia Roberts en mujer bonita?",
        respuestas: {
            a:"Reportera",
            b:"Estrella de cine",
            c:"Prostituta",
            d:"Abogada"
        },
        acertar : "c"
    },
    {
        pregunta:"10.En qué pelicula de 'Rápido y Furioso' muere rodando Paul Walker?",
        respuestas: {
            a:"7",
            b:"8",
            c:"9"
        },
        acertar : "a"
    },
];



//creo la funcion que inyectará en el html lo que tiene este archivo js
function veamosJugar(){
    //declaro un array donde iré metiendole en "jugar" con el html ,las respuestas correctas y demás 
    const juegoCompleto=[];
    //creo un forEach para recorrer mi array, irá recorriendo la pregunta actual y su numero de pregunta
    preguntas.forEach((pActual, numPreg)=>{
        //ahora creo un array sólo para las respuestas, y como tiene opciones le pongo un bucle dentro de otro bucle para que lo recorra
        const respuestas = [];
        for(lRespuesta in pActual.respuestas){
            //creo el html con los distintos valores, donde tomo el numero de pregunta y la letra de la respuesta
            //comparo la letra de la respuesta con la pregunta actual.repuestas y la letra de la respuestas propiamente dicho
            respuestas.push(
                  `<label>
                    <input type="radio" name="${numPreg}" value="${lRespuesta}"/>
                    ${lRespuesta} : ${pActual.respuestas[lRespuesta]}
                </label> `
            );
        }
        //acá tomo el objeto completo, donde tomo la pregunta actual por cada iteración y la coloco en un div, hago lo mismo con las respuestas
        juegoCompleto.push(
           ` <div class="preg">
                ${pActual.pregunta}
            </div>
            <div class="respuestas">
                ${respuestas.join('')}
            </div>`
        
            );
    });
    //opmitimizo mi código con la función join para que quede más limpio
    contenedorJugar.innerHTML=juegoCompleto.join('');
}
veamosJugar();

//creo una función que compruebe las respuestas por el checkbox marcado
function verPerformance(){
    //capturo el div que cree por su clase ".respuestas"
    const respuestas = contenedorJugar.querySelectorAll(".respuestas");
    let aciertos=0;//contador para obtener el resultado, armo el bucle que recorre la pregunta actual y su numero de pregunta
    preguntas.forEach((pActual, numPreg)=>{
        //aca guardo todas las respuestas y las recorro una a una, luego checkeo el nombre y el numero del indice
        const listarRespuestas= respuestas[numPreg];
        const checkear= `input[name='${numPreg}']:checked`;
        //aca guardo la pregunta elegida y compuebo cual se selecciono
        const seleccionada = (listarRespuestas.querySelector(checkear) || {}).value;//esto va por si el usuario no marco nada
        //compruebo la casilla elegida con la pregunta actual y su respuesta correcta y de ser valida la sumo como acierto
        if(seleccionada === pActual.acertar){
            aciertos++;
         respuestas[numPreg].style.color='green';
     } else{
         respuestas[numPreg].style.color='yellow';
     }

    });
    resultadoJugar.innerHTML = 'Cantidad de aciertos:  ' + aciertos + 'preguntas de un total de: '+ preguntas.length;
}
 botonJugar.addEventListener('click', verPerformance);

