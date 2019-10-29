const contenedorJugar= document.getElementById("jugar");
const resultadoJugar= document.getElementById("resultado");
const botonJugar= document.getElementById("btnJugar");

const preguntas = [
    {
        pregunta:"1.Quién fue el primer presidente de la Argentina?",
        respuestas: {
            a:"Hipolito Yrigoyen",
            b:"Bartolome Mitre",
            c:"Bernardino Rivadavia", 
            d:"Cornelio Saavedra"
        },
        acertar : "c"
    },
    {
        pregunta:"2.Cuántos paises liberto San Martín?",
        respuestas: {
            a:"3",
            b:"4",
            c:"5",
            d:"6",
            e:"7"
        },
        acertar : "b"
    },
    {
        pregunta:"3.En qué año sucedió la primera guerra mundial?",
        respuestas: {
            a:"1914",
            b:"1918",
            c:"1920",
            d:"1921"
        },
        acertar : "a"
    },
    {
        pregunta:"4.DE qué manera murió Napoleón bonaparte?",
        respuestas: {
            a:"Peste negra",
            b:"Fusilamiento",
            c:"Guillotina",
            d:"Úlcera péptica"
        },
        acertar : "d"
    },
    {
        pregunta:"5.Cuantas millas marinas le corresponden a Argentina por ley?",
        respuestas: {
            a:"200",
            b:"201",
            c:"350",
        },
        acertar : "c"
    },
    {
        pregunta:"6.En qué año se independizó Brasil?",
        respuestas: {
            a:"1816",
            b:"1822",
            c:"1824",
        
        },
        acertar : "b"
    },
    {
        pregunta:"7.DE qué nacionalidad es el dueño del lago escondido? ",
        respuestas: {
            a:"Estadounidense",
            b:"Canadiense",
            c:"Alemán",
            d:"ESpañol"
        },
        acertar : "a"
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