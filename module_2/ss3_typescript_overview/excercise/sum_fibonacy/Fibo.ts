function fibonacci(num: number): number {
    return num < 1 ? 0 : num <= 2 ? 1 :  fibonacci(num - 1) + fibonacci(num - 2);
}

let sum = 0;
for (let i = 0; i < 10; i++) {
    sum += fibonacci(i);
    console.log(fibonacci(i));
}
console.log(sum);
