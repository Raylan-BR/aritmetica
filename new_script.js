//declaração de variáveis
var numero1,numero2,answer,score = 0, type_game;
var estado_contagem = 1,tempo_total = 0,tempo = 0,cronometro, temporizador;;
const tempo_const = 60;
//objetos da tela 1
var title = document.querySelector("h2");
var tela1 = document.querySelector(".options1");
var add_btn = document.querySelector(".addition");
var sub_btn = document.querySelector(".subtraction");
var mul_btn = document.querySelector(".multiplication");
var div_btn = document.querySelector(".division");
//objetos da tela 2 
var tela2 = document.querySelector(".options2");
var just_request = document.querySelector(".just_request");
var test_velocity = document.querySelector(".test_velocity");
var time_limite = document.querySelector(".time_limite");
var back_home = document.querySelector(".back_home");
//objetos da tela 3
var tela3 = document.querySelector(".content-operation");
var n1_display = document.querySelector(".number1");
var sinal = document.querySelector(".sinal");
var n2_display = document.querySelector(".number2");
var answer_input = document.querySelector(".resposta");
var btn_verify1 = document.querySelector("#v1");
var btn_verify2 = document.querySelector("#v2");
var btn_verify3 = document.querySelector("#v3");
var score_display = document.querySelector("#score");
score_display.innerText = score;
var time = document.querySelector(".time");
var back_menu = document.querySelector(".back");
var solution = document.querySelector(".solution");
var request = document.querySelector(".operation");

//funções--------------------------------------------------------------------------------
function adicao(){
    numero1 = Math.ceil(Math.random()*10);
    numero2 = Math.ceil(Math.random()*10);
    answer = numero1+numero2;
    //visual
    title.innerText = "Adição";
    sinal.innerText = "+";
    n1_display.innerText = numero1;
    n2_display.innerText = numero2;
}
function subtracao(){
    numero1 = Math.ceil(Math.random()*10);
    numero2 = Math.ceil(Math.random()*10);
    answer = numero1-numero2;
    //visual
    title.innerText = "Subtração";
    sinal.innerText = "-";
    n1_display.innerText = numero1;
    n2_display.innerText = numero2;
}
function multiplicacao(){
    numero1 = Math.ceil(Math.random()*10);
    numero2 = Math.ceil(Math.random()*10);
    answer = numero1*numero2;
    //visual
    title.innerText = "Multiplicação";
    sinal.innerText = "x";
    n1_display.innerText = numero1;
    n2_display.innerText = numero2;
}
function divisao(){
    numero1 = Math.ceil(Math.random()*10);
    numero2 = Math.ceil(Math.random()*10);
    answer = (numero1/numero2).toFixed(2);
    //visual
    title.innerText = "Divisão";
    sinal.innerText = "/";
    n1_display.innerText = numero1;
    n2_display.innerText = numero2;
}
//retornar------------------------------------------------------------------------------------
back_menu.onclick = function(){
    tela1.style.display = "none";
    tela2.style.display = "flex";
    tela3.style.display = "none";
    answer_input.value = null;
    solution.style.display = 'none';
    request.style.display = "flex";
    btn_verify2.style.display = "flex";

    clearInterval(temporizador);
    clearInterval(cronometro);
}
back_home.onclick = function(){
    tela1.style.display = "flex";
    tela2.style.display = "none";
    tela3.style.display = "none";
    title.innerText = "Jogo de aritmética";
}
//Categoria-----------------------------------------------------------------------------------
just_request.addEventListener("click",function(){
    type_game = 1;
    title.innerText = "Treinamento";
    tela1.style.display = "none";
    tela2.style.display = "none";
    tela3.style.display = "flex";
    time.style.display = "none";

    btn_verify1.style.display = "block";
    btn_verify2.style.display = "none";
    btn_verify3.style.display = "none";
});
test_velocity.addEventListener("click",function(){
    type_game = 2;
    title.innerText = "Teste de velocidade";
    tela1.style.display = "none";
    tela2.style.display = "none";
    tela3.style.display = "flex";
    time.style.display = "flex";

    btn_verify1.style.display = "none";
    btn_verify2.style.display = "block";
    btn_verify3.style.display = "none";

    tempo = 0;
    time.innerText = tempo;
});
time_limite.addEventListener("click",function(){
    type_game = 3;
    title.innerText = "Jogar por 60s";
    tela1.style.display = "none";
    tela2.style.display = "none";
    tela3.style.display = "flex";
    time.style.display = "flex";

    btn_verify1.style.display = "none";
    btn_verify2.style.display = "none";
    btn_verify3.style.display = "block";

    tempo = tempo_const;
    time.innerText = tempo;

    score = 0;
    score_display.innerText = score;
});
//Eventos das operações------------------------------------------------------------------------
add_btn.addEventListener('click',function(){
    tela1.style.display = "none";
    tela2.style.display = "flex";
    tela3.style.display = "none";
    adicao();
});
sub_btn.addEventListener('click',function(){
    tela1.style.display = "none";
    tela2.style.display = "flex";
    tela3.style.display = "none";
    subtracao();
});

mul_btn.addEventListener('click',function(){
    tela1.style.display = "none";
    tela2.style.display = "flex";
    tela3.style.display = "none";
    multiplicacao();
});
div_btn.addEventListener('click',function(){
    tela1.style.display = "none";
    tela2.style.display = "flex";
    tela3.style.display = "none";
    divisao();
});
//just request------------------------------------------------------------------------------------------
btn_verify1.onclick = function(){
    if(answer == answer_input.value){
        solution.innerText = `correto: ${n1_display.innerText} ${sinal.innerText} ${n2_display.innerText} = ${answer}`;
        solution.style.display = 'block';
        solution.style.color = "#499c70";
        score = score+1;
        score_display.innerText = score;
    }
    else{
        solution.innerText = `errado: ${n1_display.innerText} ${sinal.innerText} ${n2_display.innerText} = ${answer}`;
        solution.style.display = 'block';
        solution.style.color = "#f44e3f";
    }
    numero1 = Math.ceil(Math.random()*10);
    numero2 = Math.ceil(Math.random()*10);

    n1_display.innerText = numero1;
    n2_display.innerText = numero2;

    switch(sinal.innerText){
        case "+":
            answer = numero1+numero2;
            break;
        case "x":
            answer = numero1*numero2;
            break;
        case "-":
            answer = numero1-numero2;
            break;
        case "/":
            answer = (numero1/numero2).toFixed(2);
            break;
    }
    answer_input.value = null;
}
document.addEventListener("keypress",function(e){
    if(e.key === 'Enter'){
        switch(type_game){
            case 1:
                btn_verify1.onclick();
                break;
            case 2:
                btn_verify2.onclick();
                break;
            case 3:
                btn_verify3.onclick();
                break;
        }
        answer_input.value = null;
    }

});
//testar velocidade---------------------------------------------------------
function contar(){
    cronometro = setInterval(()=>{
      tempo++;
      time.innerText = tempo;
    }, 10);
  }
function pausar(){
    clearInterval(cronometro);
}
btn_verify2.onclick = function(){
        if(answer == answer_input.value){
            if(estado_contagem == 1){
            contar();
        }
            else {
                pausar();
                tempo_total = tempo_total + tempo;
                tempo = 0;
                if(estado_contagem == 5){
                    alert(`Media: ${(tempo_total/((estado_contagem-1)*100)).toFixed(2)} s`);
                    tempo_total = 0;
                    estado_contagem = 0;
                    tempo = 0;
                }
                else{
                    contar();
                }
            }
            numero1 = Math.ceil(Math.random()*10);
            numero2 = Math.ceil(Math.random()*10);

            n1_display.innerText = numero1;
            n2_display.innerText = numero2;

            switch(sinal.innerText){
                case "+":
                    answer = numero1+numero2;
                    break;
                case "x":
                    answer = numero1*numero2;
                    break;
                case "-":
                    answer = numero1-numero2;
                    break;
                case "/":
                    answer = (numero1/numero2).toFixed(2);
                    break;
            }
            answer_input.value = null;
            estado_contagem++;
        }
    }
//time limite------------------------------------------------------------------
function crescer(){
    temporizador = setInterval(()=>{
        tempo--;
        if(tempo == 0){
            clearInterval(temporizador);
            estado_contagem = 1;
            tempo = tempo_const;
            alert(`Fim de jogo! Pontuação: ${score}`);
            score = 0;
            score_display.innerText = score;
        }
        if(tempo < 10){
            time.innerText = `0${tempo}`;
        }
        else {
            time.innerText = tempo;
        }
    }, 1000);
  }
btn_verify3.onclick = function(){
    if(answer == answer_input.value){
        solution.innerText = `correto: ${n1_display.innerText} ${sinal.innerText} ${n2_display.innerText} = ${answer}`;
        solution.style.display = 'block';
        solution.style.color = "#499c70";
        score = score+1;
        score_display.innerText = score;
        if(estado_contagem == 1){
            crescer();
        }
    numero1 = Math.ceil(Math.random()*10);
    numero2 = Math.ceil(Math.random()*10);

    n1_display.innerText = numero1;
    n2_display.innerText = numero2;

    switch(sinal.innerText){
        case "+":
            answer = numero1+numero2;
            break;
        case "x":
            answer = numero1*numero2;
            break;
        case "-":
            answer = numero1-numero2;
            break;
        case "/":
            answer = (numero1/numero2).toFixed(2);
            break;
    }
    answer_input.value = null;
    estado_contagem++;
    }
    else{
        solution.innerText = "errado";
        solution.style.display = 'block';
        solution.style.color = "#f44e3f";
    }
}