" The dealer wants to know how many cars are made after the year 2000 in his inventory."

import {problem5} from "../problem5.js";
import {inventory} from '../data.js';

let lengthOfCars = problem5(inventory);
console.log("There are " + lengthOfCars + " cars made after the year 2000 in the inventory.");