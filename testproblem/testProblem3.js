" The dealer wants to know all the unique car makes in his inventory."

import {problem3} from "../problem3.js";
import {inventory} from '../data.js';

let uniqueCarMakes = problem3(inventory);
console.log(uniqueCarMakes.join(', '));