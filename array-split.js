const numbers = [1,2,3,4,5,6,7,8];
const part = numbers.slice(3,6);
const remove=numbers.splice(2,2 , 10,20);

console.log(numbers);
console.log(part);
console.log(remove);


const together = numbers.join(" ");
console.log(together);