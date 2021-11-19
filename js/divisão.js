var opcao1 = document.getElementById("opcao1");
var opcao2 = document.getElementById("opcao2");
var opcao3 = document.getElementById("opcao3");
var audio = document.getElementById("meuAudio");
var resposta = 0;

function gerar_equação(){
    var num1 = Math.floor(Math.random() * 10) +1,
        num2 = Math.floor(Math.random() * 10) +1,
        dummyResposta1 = Math.floor(Math.random() * 10 / 10),
        dummyResposta2 = Math.floor(Math.random() * 10),
        allRespostas = [],
        switchRespostas = [];
    resposta = eval (num1  / num2);

    document.getElementById("num1").innerHTML = num1;
    document.getElementById("num2").innerHTML = num2;

    allRespostas = [resposta, dummyResposta1, dummyResposta2];

    for (i = allRespostas.length; i--;){
        switchRespostas.push(allRespostas.splice(Math.floor(Math.random() * (i + 1)), 1)[0]);
    };

    opcao1.innerHTML = switchRespostas[0];
    opcao2.innerHTML = switchRespostas[1];
    opcao3.innerHTML = switchRespostas[2];
};
console.log(opcao1)
opcao1.addEventListener("click", function(){
    if(opcao1.innerHTML == resposta){
        gerar_equação(); 
    }
    else{
        audio.play();
    }
});

opcao2.addEventListener("click", function(){
    if(opcao2.innerHTML == resposta){
        gerar_equação(); 
    }
    else{
        audio.play();
    }
});

opcao3.addEventListener("click", function(){
    if(opcao3.innerHTML == resposta){
        gerar_equação(); 
    }
    else{
        audio.play();
    }
});

gerar_equação()