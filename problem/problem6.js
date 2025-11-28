" The dealer wants to know all the Audi and BMW cars in his inventory."

import {inventory} from '../data.js';

function problem6(inventory) {
let car = [];
for ( let i = 0; i < inventory.length; i++ ) {
    if (inventory[i].car_make == 'Audi' || inventory[i].car_make == 'BMW') {
        car.push(inventory[i]);
    }
}
const jsonArray = JSON.stringify(car);
return jsonArray;
}
export { problem6 };