class StopWatch {
    constructor() {
        this._startTime = Date.now();
        console.log(this.startTime);
        this._endTime;
    }

    start() {
        this._startTime = Date.now();
    }

    stop() {
        this._endTime = Date.now();
    }

    getElapsedTime() {
        return this._endTime - this._startTime;
    }

    get startTime() {
        return this._startTime;
    }
}

let stopWatch = new StopWatch();
stopWatch.start();

function selectionSort(arr) {
    let currentValueNewIndex;
    for (let i = 0; i < arr.length; i++) {
        currentValueNewIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[currentValueNewIndex] > arr[j]) {
                currentValueNewIndex = j;
            }
        }
        if (i !== currentValueNewIndex) {
            let temp = arr[i];
            arr[i] = arr[currentValueNewIndex];
            arr[currentValueNewIndex] = temp;
        }
    }

    return arr;
}

const arr = [];
for (let i = 0; i < 100000; i++) {
    arr.push(Math.floor(Math.random() * 100000 + 1));
}
console.log(selectionSort(arr));
stopWatch.stop();
console.log("Thời gian đã trôi qua: " + stopWatch.getElapsedTime());
