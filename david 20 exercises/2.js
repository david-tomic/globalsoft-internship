// 2. kreiraj metodu toSquare(array [1,2,3,4,5,6]) => da vrati kvadrat svakog broja

function toSquare (array) {
    array.map(n => n**2)
    return array;
}

console.log(toSquare([1,2,3,4,5,6]));