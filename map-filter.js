const input = [2,3,4,5,6];
const output= [];
for(let i = 0; i < input.length; i++){
    const element = input[i];
    const result = element*element;
    output.push(result);
}
console.log(output);



const numbers = [2,3,4,5,6];
const result = numbers.map(function(element){
    return element*element;
})
console.log(result);



const numbers = [2,3,4,5,6];
const result = numbers.map(x => x*x);
console.log(result);



const numbers = [2,3,4,5,6];
const bigger = numbers.filter(x => x < 5 );
console.log(bigger);


const numbers = [2,3,4,5,6];
const bigger = numbers.find(x => x > 5 );
console.log(bigger);

