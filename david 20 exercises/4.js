// 4. Ako je dan niz [1,2,3,4,5,6,7,8,9,10] ispiši min, max, sum

function minMaxSum (arr) {
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    let sum = 0
    arr.forEach(element => {sum += element});
    console.log(`Min: ${min}
Max: ${max}
Sum: ${sum}`);
}

minMaxSum([1,2,3,4,5,6,7,8,9,10]);