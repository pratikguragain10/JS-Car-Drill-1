" The dealer can't recall the information for a car with an id of 33 on his lot."

import { inventory } from "../data.js";

function problem2(inventory) {
    let car = inventory[inventory.length - 1];
    return 'The last car in the inventory is a ' + car.car_make + ' ' + car.car_model;
}
export { problem2};