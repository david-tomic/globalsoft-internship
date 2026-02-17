// 3. kreiraj istu metodu ko u 1 printEven koristeći filter

function isEven(number) {
    return number % 2 === 0;
}

function printEvenNumbers(array) {
    array = array.filter(isEven);
    console.log(`parni brojevi su : ${array} ukupno ih je ${array.length}`);
}

printEvenNumbers([1,2,3,4,5,6]);