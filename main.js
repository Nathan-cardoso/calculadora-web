
function somar(a=0,b=0){
    return a + b;
}

function subtrair(a=0,b=0){
    return a - b;
}

function multiplicar(a=0,b=0){
    return a * b;
}

function dividir(a,b){

    if(b === 0){
        return 'NaN';
    }else{
        return parseFloat(a / b)
    }
}


const numbers = document.querySelectorAll('.number-botton');
const painel = document.querySelector('.calc');
const operation = document.querySelectorAll('.operation-botton');
const equal = document.querySelector('.equals-botton');





    





