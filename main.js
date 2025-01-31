
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

function calculo(){

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

    return result
}

const numbers = document.querySelectorAll('.number-botton');
const painel = document.querySelector('.calc');
const printresult = document.querySelector('.result');
const operation = document.querySelectorAll('.operation-botton');
const equals = document.querySelector('.equals-botton');
const clear = document.querySelector('.clear');
const deleteNumber = document.querySelector('.deleteOneNumber');

let firstNumber = '';
let secondNumber = '';
let operator = '';
let isSecondNumber = false;


numbers.forEach((button) => {
    button.addEventListener('click', () =>{

        value = button.textContent;

        if(printresult.innerHTML !== ''){ printresult.innerHTML = ''}

        if (value === "." && ((isSecondNumber && secondNumber.includes(".")) || (!isSecondNumber && firstNumber.includes(".")))) {
            return; 
        }
        if(isSecondNumber){
            secondNumber += button.textContent;
            painel.innerHTML = firstNumber + " " + operator + " " + secondNumber;
        }else{
            firstNumber += button.textContent;
            painel.innerHTML = firstNumber;
        }
    })
})

operation.forEach((bottonOperator) =>{
    bottonOperator.addEventListener('click', () =>{
        if(!isSecondNumber){
        operator = bottonOperator.innerHTML;
        isSecondNumber = true;
        painel.innerHTML = firstNumber + " " + operator;

    }else{
        let result = calculo();

        operator = bottonOperator.innerHTML;

        firstNumber = result.toString();
        secondNumber = ''
        isSecondNumber = true;

        painel.innerHTML = firstNumber + " " + operator;

    }
    })
})

equals.addEventListener('click', () =>{

    
    let result = calculo();

    painel.innerHTML = '';
    result === 'NaN' ? printresult.innerHTML = '' : printresult.innerHTML = result;
    firstNumber = '';
    secondNumber = '';
    operator = '';
    isSecondNumber = false;

})

clear.addEventListener('click', () =>{
    firstNumber = '';
    secondNumber = '';
    isSecondNumber = '';
    operator = '';
    painel.innerHTML = '';
    printresult.innerHTML = '0';
})

deleteNumber.addEventListener('click', () => {
    if (isSecondNumber && secondNumber !== '') {
        
        secondNumber = secondNumber.slice(0, -1);
        painel.innerHTML = firstNumber + " " + operator + " " + secondNumber;
    } else if (!isSecondNumber && operator) {
        
        operator = '';
        isSecondNumber = false;
        painel.innerHTML = firstNumber;
    } else if (!isSecondNumber && firstNumber !== '') {
        
        firstNumber = firstNumber.slice(0, -1);
        painel.innerHTML = firstNumber || '0'; 
    }
});


