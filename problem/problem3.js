" The dealer wants to know all the unique car makes in his inventory."

import {inventory} from '../data.js';

function problem3(inventory) {
let car = []
for ( let i = 0 ; i < inventory.length ; i++ ) {
    car.push(inventory[i].car_make)
}
car.sort()
let uniqueCarMakes = [...new Set(car)]
return uniqueCarMakes;
}

export { problem3 };