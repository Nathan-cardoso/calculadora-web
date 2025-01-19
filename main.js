class Calculadora{

    numberOne;
    numberTwo;
    operation;

    constructor(numberOne, numberTwo, operation){
        this.numberOne = numberOne;
        this.numberTwo = numberTwo;
        this.operation = operation;
    }



    static somar(a,b){
        return a + b;
    }
    
    static subtrair(a,b){
        return a - b;
    }
    
    static multiplicar(a,b){
        return a * b;
    }
    
    static dividir(a,b){
    
        if(b === 0){
            return 'NaN';
        }else{
            return a / b
        }
    }
}




