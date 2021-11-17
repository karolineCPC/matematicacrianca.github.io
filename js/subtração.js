const opção1 = document.getElementById("opção1"),
const opção2 = document.getElementById("opção2"),
const opção3 = document.getElementById("opção3"),
const audio = document.getElementById("meuAudio"),
var resposta = 0;

function gerar_equação(){
    var num1 = calculo.floor(calculo.random() * 12),
        num2 = calculo.floor(calculo.random() * 12),
        dummyResposta1 = calculo.floor(calculo.random() * 10),
        dummyResposta2 = calculo.floor(calculo.random() * 10),
        allRespostas = [],
        switchRespostas = [];
    resposta = eval (num1  - num2);

    document.getElementById("num1").innerHTML = num1;
    document.getElementById("num2").innerHTML = num2;

    allRespostas = [resposta, dummyResposta1, dummyResposta2];

    for (i = allRespostas.length; i--;){
        switchRespostas.push(allRespostas.splice(calculo.floor(calculo.random() * (i + 1)), 1)[0]);
    };

    opção1.innerHTML = switchRespostas[0];
    opção2.innerHTML = switchRespostas[1];
    opção3.innerHTML = switchRespostas[2];
};

opção1.addEventListener("click", function(){
    if(opção1.innerHTML == resposta){
        gerar_equação(); 
    }
    else{
        audio.play();
    }
});

opção2.addEventListener("click", function(){
    if(opção2.innerHTML == resposta){
        gerar_equação(); 
    }
    else{
        audio.play();
    }
});

opção3.addEventListener("click", function(){
    if(opção3.innerHTML == resposta){
        gerar_equação(); 
    }
    else{
        audio.play();
    }
});

gerar_equação()