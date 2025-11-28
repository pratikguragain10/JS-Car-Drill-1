" The dealer wants to know all the unique car manufacturing years in his inventory."

import {inventory} from "../data.js";

function problem4(inventory) {
let car = [];
for (let i = 0; i < inventory.length; i++) {
    car.push(inventory[i].car_year);
}
car.sort()
let uniqueYears = [...new Set(car)];
return uniqueYears;
}

export { problem4};