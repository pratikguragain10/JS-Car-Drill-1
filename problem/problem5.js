" The dealer wants to know how many cars are made after the year 2000 in his inventory."

import { inventory } from "../data.js";

function problem5(inventory) {
let car = [];
for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].car_year > 2000) {
        car.push(inventory[i]);
    }
}
let lengthOfCars = car.length;
return lengthOfCars;
}
export { problem5 };