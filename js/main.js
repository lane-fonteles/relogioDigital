function atualizar(){ 
var display =document.querySelector('.display');

var agora = new Date();

var horario=  corrigirHora(agora.getHours()) +":" +  corrigirHora(agora.getMinutes()) + ":" + corrigirHora(agora.getSeconds());

display.textContent= horario;

}function corrigirHora(numero){
    if(numero < 10){
        numero= '0' + numero;
    }
    return numero;

}

atualizar();
setInterval(atualizar, 1000);