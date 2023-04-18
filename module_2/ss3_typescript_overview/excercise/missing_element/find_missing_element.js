var numbers = [0, 2, 3, 5, 7, 8, 9, 10];
var emptyArr = [];
var count = -1;
while (count++ < 11) {
    if (numbers.indexOf(count) == -1) {
        emptyArr.push(count);
    }
}
console.log(emptyArr);
