
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
const printresult = document.querySelector('.result');
const operation = document.querySelectorAll('.operation-botton');
const equals = document.querySelector('.equals-botton');


let firstNumber = '';
let secondNumber = '';
let operator = '';
let isSecondNumber = false;


numbers.forEach((button) => {
    button.addEventListener('click', () =>{
        if(isSecondNumber){
            secondNumber += button.textContent;
            painel.innerHTML = secondNumber;
        }else{
            firstNumber += button.textContent;
            painel.innerHTML = firstNumber;
        }
    })
})

operation.forEach((bottonOperator) =>{
    bottonOperator.addEventListener('click', () =>{
        operator = bottonOperator.innerHTML;
        painel.innerHTML = '';
        isSecondNumber = true;
    })
})

equals.addEventListener('click', () =>{
    let result 

    switch (operator){
        case "+":
            result = somar(parseFloat(firstNumber), parseFloat(secondNumber));
        break; 
        case "-": 
            result = subtrair(parseFloat(firstNumber), parseFloat(secondNumber));
        break; 
        case "x" || "*": 
            result = multiplicar(parseFloat(firstNumber), parseFloat(secondNumber));
        break; 
        case "/":
            result = dividir(parseFloat(firstNumber), parseFloat(secondNumber));
        break; 
    }

    painel.innerHTML = '';
    result === 'NaN' ? printresult.innerHTML = '' : printresult.innerHTML = result;
    firstNumber = result.toString();
    secondNumber = '';
    operator = '';
    isSecondNumber = false;

})



    





