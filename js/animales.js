const contenedorJugar= document.getElementById("jugar");
const resultadoJugar= document.getElementById("resultado");
const botonJugar= document.getElementById("btnJugar");

const preguntas = [
    {
        pregunta:"1.Cuántos téntaculos tiene un pulpo?",
        respuestas: {
            a:"10",
            b:"8",
            c:"6"
        },
        acertar : "b"
    },
    {
        pregunta:"2.Cuál es el mamífero más pequeño del mundo?",
        respuestas: {
            a:"auricario",
            b:"murcielago japones",
            c:"topito ruso",
            d:"musaraña"
        },
        acertar : "d"
    },
    {
        pregunta:"3.Cuántos viven los orangutanes?",
        respuestas: {
            a:"de 15 a 35 años",
            b:"de 35 a 45 años",
            c:"de 45 a 55 años"
        },
        acertar : "a"
    },
    {
        pregunta:"4.Cuál es el pez más grande del mundo?",
        respuestas: {
            a:"El tiburón ballena blanco",
            b:"La ballena azul",
            c:"El calamar colosal",
            d:"La medusa melena de león gigante"
        },
        acertar : "d"
    },
    {
        pregunta:"5.Cómo se comunican las abejas?",
        respuestas: {
            a:"Por sus feromónas",
            b:"Por el zumbido de sus alas",
            c:"Por un lenguaje particlar de su especie"
        },
        acertar : "a"
    },
    {
        pregunta:"6.Cuál de los siguientes animales sobreviviría a la caida de un avión?",
        respuestas: {
            a:"Gato",
            b:"Hamster",
            c:"Leopardo"
        },
        acertar : "b"
    },
    {
        pregunta:"7.Cuál es el animal más venenoso del mundo? ",
        respuestas: {
            a:"Escorpión palestino amarillo",
            b:"Cobra real ",
            c:"Avispa de mar",
            d:"Araña brasileña bananera",
            e:"Rana venenosa de Malasia"
        },
        acertar : "c"
    },
    {
        pregunta:"8.Cuál de los siguientes animales esta en peligro de extinción?",
        respuestas: {
            a:"Oso polar",
            b:"Tigre de bengala",
            c:"Mono tikiriyaki",
            d:"Papagayo de papua"
        },
        acertar : "a"
    },
    {
        pregunta:"9.Cuál de los siguientes es considerado el animal más lento del planeta?",
        respuestas: {
            a:"Estrella de mar",
            b:"Caracol de jardín",
            c:"Tortuga",
            d:"Perezoso"
        },
        acertar : "b"
    },
    {
        pregunta:"10.Cuántas crías puede tener un caballito de mar a la vez?",
        respuestas: {
            a:"de 100 a 500",
            b:"hasta 1500",
            c:"de 50 a 100",
            d:"de 500 a 1000"
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