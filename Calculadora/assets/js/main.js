const display = document.getElementById('display');
const valores = document.querySelectorAll('[id*=valor]');
let valoresTeclado = [];
const operadores = document.querySelectorAll('[id*=op]');

let numeroNovo = true;

let numeroAnterior;
let operador;


const existeOperador = () =>  operador !== undefined;

const inserirNumero = evento => atualizaDisplay(evento.target.textContent);
valores.forEach(evento => evento.addEventListener('click', inserirNumero));


const calcular = () => {
    if(existeOperador()){
    const numeroAtual = parseFloat(display.value);
    numeroNovo = true;
    const resultado = eval(`${numeroAnterior}${operador}${numeroAtual}`);
    atualizaDisplay(resultado);
   }
}

const inserirOp = evento => {
    calcular();
    if(!numeroNovo ){
     numeroNovo = true;
     operador = evento.target.textContent;
     numeroAnterior = parseFloat(display.value);
  }
}

operadores.forEach(evento => evento.addEventListener('click', inserirOp));

const atualizaDisplay = texto =>{
    if(numeroNovo){
    display.value = texto;
    numeroNovo = false;
}else{
    display.value += texto;
    }    
}


const ativaIgual = () => {
    calcular();
    operador = undefined;
}
document.getElementById("res-resultado").addEventListener('click', ativaIgual);


const inverteSinal = () => display.value = display.value * -1;
document.getElementById('res-inverte-sinal').addEventListener('click', inverteSinal);

const apagaUltimoNumero = () => display.value = '';
document.getElementById('res-limpa-ultimo-numero').addEventListener('click', apagaUltimoNumero);



const apagaTudo = () => {
    display.value = '';
    numeroAnterior = undefined;
    operador = undefined;
    numeroNovo = true;
}
document.getElementById('res-limpa').addEventListener('click', apagaTudo);


const existeDecimal = () => display.value.indexOf('.') === -1;
const existeValor  = () => display.value[0];

const casaDecimal = ()=>{
    if(existeDecimal()){
    if(existeValor()){
        atualizaDisplay('.');
      }else{
        atualizaDisplay('0.');
        }
    }
}
document.getElementById('res-casa-decimal').addEventListener('click', casaDecimal);


const limpaDigito = () => display.value = display.value.slice(0, -1);
document.getElementById('res-limpa-digito').addEventListener('click',limpaDigito);


function inserirValoresTeclado (evento){
    const tecla = evento.key;
    switch (tecla) {
        case "1":
            atualizaDisplay(evento.key);
            break;
        case "2":
            atualizaDisplay(evento.key);
            break;
        case "3":
            atualizaDisplay(evento.key);
            break;
        case "4":
            atualizaDisplay(evento.key);
            break;
        case "5":
            atualizaDisplay(evento.key);
            break;
        case "6":
            atualizaDisplay(evento.key);
            break;
        case "7":
            atualizaDisplay(evento.key);
            break;
        case "8":
            atualizaDisplay(evento.key);
            break;
        case "9":
            atualizaDisplay(evento.key);
            break;
        case "Enter":
            ativaIgual();
            break;    
        
        case "Backspace":
            limpaDigito();
            break;    
        
        case "c":
            apagaTudo();
            break;    
        
        case "Escape":
            apagaUltimoNumero();
            break;    
        
        case ".":
            casaDecimal();
            break;    
        
        case "/":
            inserirOpTecla("/");
            break;    
        
        case "+":
            inserirOpTecla("+");
            break;    
        
        case "-":
           inserirOpTecla("-")
            break;    
        
        case "*":
            inserirOpTecla("*");
            break;    
        
        case "=":
            ativaIgual();
            break;    
    }
   
}

    document.addEventListener("keydown", inserirValoresTeclado)

    const inserirOpTecla = evento => {
        calcular();
        if(!numeroNovo){
            numeroNovo = true;
            operador = evento;
            numeroAnterior = parseFloat(display.value);
        }
    }
      