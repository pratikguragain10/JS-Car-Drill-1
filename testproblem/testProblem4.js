" The dealer wants to know all the unique car manufacturing years in his inventory."

import {problem4} from "../problem4.js";
import {inventory} from '../data.js';

let uniqueYears = problem4(inventory);

console.log(uniqueYears.join(', '));