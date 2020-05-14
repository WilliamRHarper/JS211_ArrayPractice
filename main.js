let cars = ["Ford", "BMW", "Lexus", "Honda"];
console.log(cars.length);

let moreCars = ["Chevrolet", "Subaru", "Mazda", "Honda"];
let totalCars = cars.concat(moreCars);
console.log(totalCars);

console.log(totalCars.indexOf("Honda"));

console.log(totalCars.lastIndexOf("Honda"));

let stringOfCars = totalCars.join(",");
console.log(stringOfCars);

totalCars = stringOfCars.split(",");
console.log(totalCars);

let carsInReverse = totalCars.reverse();
console.log(carsInReverse);

carsInReverse.sort();
// alert(carsInReverse.indexOf('BMW'));
console.log(carsInReverse);

let removedCars = carsInReverse.slice(2,5);
console.log(removedCars);

carsInReverse.splice(1, 2, "Ford", "Honda");
console.log(carsInReverse);

carsInReverse.push("Chevrolet", "Ford");
console.log(carsInReverse);

let poppedCar = carsInReverse.pop();
console.log(poppedCar);

let shiftedCar = carsInReverse.shift();
console.log(shiftedCar);

carsInReverse.unshift("Toyota");
console.log(carsInReverse);

let numbers = [23, 45, 0, 2];

for (let i = 0; i < numbers.length; i++) {
    numbers[i] += 2;
}
console.log(numbers);

const numbers1 = [23, 45, 0 , 2, 8, 44, 100, 1, 3, 91, 34];
numbers1.forEach(element => console.log(element +=2));
