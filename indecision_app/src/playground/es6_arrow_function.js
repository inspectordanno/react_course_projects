// const square = function(x) {
//     return x*x;
// }

// const squareArrow = x => x * x;

// console.log(square(8));
// console.log(squareArrow(4));

// const fullName = 'Dan Danno';

const getFirstName = (fullName) => {
    return fullName.split(' ')[0];
}

console.log(getFirstName('Hello Moto'));

const getLastName = fullName => fullName.split(' ')[1];

console.log(getLastName('Shit Turgidson'));


// const getFirstName = (fullName) => fullName.split(' ');
// console.log(getFirstName());