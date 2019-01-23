const arr = [10,18,5,3,5]


const newArr = arr.reduce((a,b) => a + b, 0 )

function sumArr(arr) {
    let total = 0;
    for(let i = 0; i < arr.length; i++) {
        console.log(total +=arr[i])
    }
    return total;
}