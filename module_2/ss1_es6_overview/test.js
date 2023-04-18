const people = [
    {name: 'Tom', age: 30},
    {name: 'John', age: 40},
    {name: 'Dillon', age: 30},
];

const results = people.filter(obj => {
    return obj.age === 30;
});

// 👇️ [{name: 'Tom', age: 30}, {name: 'Dillon', age: 30}]
console.log(results);
