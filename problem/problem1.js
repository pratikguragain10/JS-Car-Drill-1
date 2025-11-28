" The dealer wants to know the details of a car with an id of 33 on his lot."

import { inventory } from '../data.js';

function problem1(inventory) {
    let car = null;
    for (let i = 0; i < inventory.length; i++) {
        car = inventory[i];
        if (inventory[i].id == 33) {
            return 'Car 33 is a ' + car.car_make + ' ' + car.car_model
        }
    }
}
export { problem1 };
