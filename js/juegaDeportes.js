
const contenedorJugar= document.getElementById("jugar");
const resultadoJugar= document.getElementById("resultado");
const botonJugar= document.getElementById("btnJugar");

const preguntas = [
    {
        pregunta:"1.Cuántos títulos lleva ganados como dt Marcelo Gallardo en River?",
        respuestas: {
            a:"8",
            b:"9",
            c:"10"
        },
        acertar : "c"
    },
    {
        pregunta:"2.En qué equipo no jugó Slatan Ibrahimovic  ?",
        respuestas: {
            a:"Real Madrid",
            b:"Paris Saint-Germain",
            c:"Manchester United",
            d:"Ajax",
            e:"Juventus",
            f:"LOs Angeles Galaxy"
        },
        acertar : "a"
    },
    {
        pregunta:"3.En que deporte destaca internacionalmente el argentino Luis Scola?",
        respuestas: {
            a:"Handball",
            b:"Tennis",
            c:"Basquet",
            d:"Natación"
        },
        acertar : "c"
    },
    {
        pregunta:"4.Quién ganó el mundial de futbol de 1982?",
        respuestas: {
            a:"Alemania",
            b:"España",
            c:"Mexico",
            d:"Francia",
            e:"Italia"
        },
        acertar : "e"
    },
    {
        pregunta:"5.Cuántos torneos internacionales ganaron las leonas?",
        respuestas: {
            a:"15",
            b:"17",
            c:"20",
            d:"25"
        },
        acertar : "d"
    },
    {
        pregunta:"6.En qué año gano Racing su ultimo torneo?",
        respuestas: {
            a:"2000",
            b:"2001",
            c:"2002",
            d:"2003",
            e:"2005"
        },
        acertar : "c"
    },
    {
        pregunta:"7.Cual de los siguientes no es o fue un Nadador/a destacado de la selección Argentina ",
        respuestas: {
            a:"Cecilia Biagioli",
            b:" José Meolans",
            c:"Joaquín Pastorillo",
            d:" Pilar Geijo"
        },
        acertar : "c"
    },
    {
        pregunta:"8.Cuantos títulos consiguió Juan Manuel Fangio?",
        respuestas: {
            a:"5",
            b:"7",
            c:"3",
            d:"4"
        },
        acertar : "a"
    },
    {
        pregunta:"9.Cuántos minutos dura un partido de básquet de la NBA?",
        respuestas: {
            a:"4 tiempos de 10 minutos",
            b:"4 tiempos de 12 minutos",
            c:"4 tiempos de 15 minutos",
            d:"4 tiempos de 20 minutos"
        },
        acertar : "b"
    },
    {
        pregunta:"10.En qué categoría del boxeo es Andy Ruiz Jr. actual campeón mundial?",
        respuestas: {
            a:"peso semi_mosca",
            b:"peso pesado",
            c:"peso crucero", 
            d:"Peso superwélter"
        },
        acertar : "b"
    },
];


function veamosJugar(){
    const juegoCompleto=[];
    preguntas.forEach((pActual, numPreg)=>{
        const respuestas = [];
        for(lRespuesta in pActual.respuestas){
            
            respuestas.push(
                  `<label>
                     <div> 
                     <input type="radio" name="${numPreg}" value="${lRespuesta}"/>
                     ${lRespuesta} : ${pActual.respuestas[lRespuesta]}
                     </div>
                 </label> `
             );
         }
         
         juegoCompleto.push(
            ` <div>---------------------------------------------------------------------------------</div>
                <div class="preg">
                       ${pActual.pregunta}
                </div>
            
                <div class="respuestas">
                       ${respuestas.join('\n')}
                </div>`
         
             );
     });
     contenedorJugar.innerHTML=juegoCompleto.join('');
 }
 veamosJugar();
 
function verPerformance(){
    const respuestas = contenedorJugar.querySelectorAll(".respuestas");
    let aciertos=0;
    preguntas.forEach((pActual, numPreg)=>{
        const listarRespuestas= respuestas[numPreg];
        const checkear= `input[name='${numPreg}']:checked`;
        const seleccionada = (listarRespuestas.querySelector(checkear) || {}).value;
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