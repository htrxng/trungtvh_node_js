const inventory = [
    {type: "machine", value: 5000},
    {type: "machine", value: 650},
    {type: "duck", value: 10},
    {type: "furniture", value: 1200},
    {type: "machine", value: 77}
];
const initValue = 0;
let totalMachineValue = (inventory.filter(obj => {
    return obj.type === "machine";
})).reduce(
    (accumulator, currentValue) => accumulator + currentValue.value, initValue);

console.log(totalMachineValue);
