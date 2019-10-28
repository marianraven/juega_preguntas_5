const resultadoJugar= document.getElementById("resultado");
const contenedorJugar= document.getElementById("jugar");
const botonJugar= document.getElementById("btnJugar");

const preguntas=[
    {
        pregunta:"1.Quien mato a roger rabits?",
        respuestas:{
            a:"milton casco",
            b:"sss",
            c:"jjc",
        },
        acertar:"b"
    },
];

function veamosJugar(){
    const juegoCompleto=[];
    preguntas.forEach((pActual, numPreg)=>{
        const respuestas=[];
        for(lRespuesta in pActual, respuestas){
            respuestas.push(
                  `<label>
                    <input type="radio" name="$(numPreg)" value="$(lRespuesta)"/>
                    ${lRespuesta} : ${pActual.respuestas[lRespuesta]}
                </label> `
            );
        }
        juegoCompleto.push(
           ` <div class="q">
                ${pActual.pregunta}
            </div>
            <div class="res">
                ${respuestas.join('')}
            </div>`
        
            )
    });
    contenedorJugar.innerHTML=juegoCompleto.join('');
}
veamosJugar();
function verPerformance(){
    const respuestas= contenedorJugar.querySelectorAll(`.respuestas`);
    let aciertos=0;
    preguntas.forEach((pActual, numPreg)=>{
        const listarRespuestas= respuestas[numPreg];
        const checkear= `input [name= ${numPreg}]:checked`;
        const seleccionada= (listarRespuestas.querySelector(checkear) || {}).value;//esto va por si el usuario no marco nada
        if(seleccionada=== pActual.acertar){
            aciertos ++;

     } });
        resultadoJugar.innerHTML='usted ha acertado'+ aciertos+ 'preguntas de un total de '+ preguntas.length;
        botonJugar.addEventListener(`click`, verPerformance);
}
