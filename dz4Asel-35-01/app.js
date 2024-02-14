
var arithmeticNum = (array) => {
    var positiveNum = []
    for(var i=0; i < array.length; i++) {
        if(array[i] >= 0) {
            positiveNum.push(array[i])
        }
    }
    var num = 0
    for(var j=0; j < positiveNum.length; j++) {
        num += positiveNum[j]
    }
    console.log(num / positiveNum.length)
}
arithmeticNum([2, -78, 45,4,-7,-6,-10, 26, 30, 8])



function squaresNum (array){
    var newMass=[]
    var square = 0
    for (var i = 0; i < array.length; i++){
        if (array[i] % 2 === 0){
            square = array[i] * array[i]
            newMass.push(square)
        }
    }
    console.log(newMass)
}

squaresNum([1,5,7,8,6,10,12,16,15,11,18,19])


function primeNum (number) {
    if (number < 2) {
        return false;
    }
    for (let i = 2; i <=Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(primeNum(227))

//Цикл должен проходится по массиву и просто выводить среднюю арифметическую
const numbers = [10, 15, 20, 25, 30];
let average = 0;

for (let i = 0; i < numbers.length; i++) {
    average += numbers[i];
}
average = average / numbers.length;
console.log("Среднее значение в массиве:", average);

//переменную let average = 0; надо было писать вне цикла