// kreiraj metodu printEvenNumbers(array [1,2,3,4,5,6]) => ispis : Parni brojevi su : [2,4,6] ukupno ih je 3 


function isEven(number) {
    return number % 2 === 0;
}

function printEvenNumbers(array) {
    for (var i = 0; i < array.length; i++) {
        if(!(array[i]%2===0)){
            array.splice(i, 1);
        }
    }
    console.log(`parni brojevi su : ${array} ukupno ih je ${array.length}`);
}

printEvenNumbers([1,2,3,4,5,6]);