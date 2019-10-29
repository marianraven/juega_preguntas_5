const contenedorJugar= document.getElementById("jugar");
const resultadoJugar= document.getElementById("resultado");
const botonJugar= document.getElementById("btnJugar");

const preguntas = [
    {
        pregunta:"1.Cuántos países componen el continente de Oceanía?",
        respuestas: {
            a:"10",
            b:"12",
            c:"14"
        },
        acertar : "c"
    },
    {
        pregunta:"2.Cual de éstos equipos no pertenecen a Europa?",
        respuestas: {
            a:"Real Madrid",
            b:"Paris Saint-Germain",
            c:"Manchester United",
            d:"Ajax",
            e:"Juventus",
            f:"LOs Angeles Galaxy"
        },
        acertar : "f"
    },
    {
        pregunta:"3.Cuál es el volcán más activo del mundo?",
        respuestas: {
            a:"Yellowstone, Estados Unidos",
            b:"Sakurajima, Japón",
            c:"Monte Vesubio, Italia"
        },
        acertar : "a"
    },
    {
        pregunta:"4.Cuál es la capital de Eslovenia?",
        respuestas: {
            a:"Andoxia",
            b:"Eslotev",
            c:"Lausesburg",
            d:"Liubliana"
        },
        acertar : "d"
    },
    {
        pregunta:"5.Cuántos departamentos conforman el país de Francia sin contar los considerados de ultramar?",
        respuestas: {
            a:"11",
            b:"12",
            c:"13",
            d:"15"
        },
        acertar : "c"
    },
    {
        pregunta:"6.En qué año se independizó Sudán del sur?",
        respuestas: {
            a:"1999",
            b:"2001",
            c:"2005",
            d:"2011",
            e:"2015"
        },
        acertar : "d"
    },
    {
        pregunta:"7.Cual es el lago más grande de la republica Argentina? ",
        respuestas: {
            a:"Lago Nahuel Huapi",
            b:"Lago Viedma",
            c:"Lago Argentino"
        },
        acertar : "c"
    },
    {
        pregunta:"8.Cuál es el país menos poblado del mundo?",
        respuestas: {
            a:"San Marino",
            b:"Mónaco",
            c:"Islas Marshall",
            d:"Vaticano"
        },
        acertar : "d"
    },
    {
        pregunta:"9.Cuál es la verdadera capital de Bolivia?",
        respuestas: {
            a:"Bolivia",
            b:"Sucre",
            c:"La Paz"
        },
        acertar : "b"
    },
    {
        pregunta:"10.En qué país se encuentran los mayores pozos Petrolíferos del mundo?",
        respuestas: {
            a:"Arabia Saudí",
            b:"Venezuela",
            c:"Canadá",
            d:"Irán"
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