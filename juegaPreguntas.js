
const contenedorJugar= document.getElementById("jugar");
const resultadoJugar= document.getElementById("resultado");
const botonJugar= document.getElementById("btnJugar");
//creo un objeto que tiene una propiedad llamada pregunta
const preguntas=[
    {
        pregunta:"1.Quien mato a roger rabits?",
        //creo un objeto dentro de otro que contiene tres propiedades que manejo como opciones
        respuestas:{
            a:"milton casco",
            b:"sss",
            c:"jjc",
        },
        //creo otra propiedad que tendra la respuesta correcta de cada objeto
        acertar:"b"
    },
];
//cada pregunta será un nuevo objeto con las propiedades del anterior

//creo la funcion que inyectará en el html lo que tiene este archivo js
function veamosJugar(){
    //declaro un array donde iré metiendole en "jugar" con el html ,las respuestas correctas y demás 
    const juegoCompleto=[];
    //creo un forEach para recorrer mi array, irá recorriendo la pregunta actual y su numero de pregunta
    preguntas.forEach((pActual, numPreg)=>{
        //ahora creo un array sólo para las respuestas, y como tiene opciones le pongo un bucle dentro de otro bucle para que lo recorra
        const respuestas=[];
        for(lRespuesta in pActual, respuestas){
            //creo el html con los distintos valores, donde tomo el numero de pregunta y la letra de la respuesta
            //comparo la letra de la respuesta con la pregunta actual.repuestas y la letra de la respuestas propiamente dicho
            respuestas.push(
                  `<label>
                    <input type="radio" name="${numPreg}" value="${lRespuesta}"/>
                    ${lRespuesta} : ${pActual.respuestas[lRespuesta]}
                </label> `
            );
        }
        //acá tomo el objeto completo, donde tomo la pregunta actual por cada iteración, hago lo mismo con las respuestas
        juegoCompleto.push(
           ` <div class="q">
                ${pActual.pregunta}
            </div>
            <div class="res">
                ${respuestas.join('')}
            </div>`
        
            );
    });
    //opmitimizo mi código con la función join para que quede más limpio
    contenedorJugar.innerHTML=juegoCompleto.join("\n");
}
veamosJugar();

//creo una función que compruebe las respuestas por el checkbox marcado
function verPerformance(){
    //capturo el div que cree y me da un array
    const respuestas= contenedorJugar.querySelectorAll(".respuestas");
    let aciertos=0;//contador para obtener el resultado
    //armo el bucle que recorre la pregunta actual y su numero de pregunta
    preguntas.forEach((pActual, numPreg)=>{
        //aca guardo todas las respuestas y las recorro una a una, luego checkeo el nombre y el numero del indice
        const listarRespuestas= respuestas[numPreg];
        const checkear= `input [name= '${numPreg}']:checked`;
        //aca guardo la pregunta elegida y compuebo cual se selecciono
        const seleccionada= (listarRespuestas.querySelector(checkear) || {}).value;//esto va por si el usuario no marco nada
        //compruebo la casilla elegida con la pregunta actual y su respuesta correcta y de ser valida la sumo como acierto
        if(seleccionada=== pActual.acertar){
            aciertos ++;
        
     } 

    });
    resultadoJugar.innerHTML='Tus aciertos son:'+ aciertos+ 'preguntas de un total de: '+ preguntas.length;
}
 botonJugar.addEventListener('click', verPerformance);

