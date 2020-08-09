// const students = [
//     {id: 12, name:"jack"},
//     {id: 13, name:"tom"},
//     {id: 14, name:"junior"},
//     {id: 15, name:"justin"}
// ];
// const output = [];

// for(let i = 0; i < students.length ; i++){
//     const element = students[i];
//     output.push(element.name);
// }

// console.log(output);




const students = [
        {id: 12, name:"jack"},
        {id: 13, name:"tom"},
        {id: 14, name:"junior"},
        {id: 15, name:"justin"}
];

// const result = students.map(s => s.id > 13);
// const result = students.filter(s => s.id > 13);
const result = students.find(s => s.id > 13);
console.log(result);