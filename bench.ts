function sumUsingForOf(arr: number[]) {
    let sum = 0;
    for (const num of arr) {
        sum += num;
    }
    return sum;
}

function sumUsingForLoop(arr: number[]) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

const largeArray = Array.from({ length: 100000 }, (_, i) => i);

Deno.bench({
    name: "Array forEach",
    fn() {
        sumUsingForOf(largeArray);
    },
})

Deno.bench({
    name: "Array forLoop",
    fn() {
        sumUsingForLoop(largeArray);
    },
})