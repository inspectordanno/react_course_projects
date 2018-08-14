// arguments object - no longer bound with arrow functions

//this keyword

const user = {
    name: 'dan',
    cities: ['philly', 'ny', 'dublin'],
    printPlacesLived() {
        return this.cities.map(city => this.name + ' has lived in ' + city);
    }
};

console.log(user.printPlacesLived());

//challenge area

const multiplier = {
    //numbers -- array of numbers
    numbers: [1,2,3],
    //multiplyBy - single number
    multiplyBy: 2,
    // multiply - return a new array where the numbers have been multiplied
    multiply() {
        return this.numbers.map(number => number * this.multiplyBy);
    }
};

console.log(multiplier.multiply()); //[1,2,3] 2 [2,4,6]