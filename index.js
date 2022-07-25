import { choice,remove } from "./helpers";
import {foods} from './foods';



const RANDOMFRUIT = choice(foods);

console.log(`"I'd like one ${RANDOMFRUIT} please"`);

console.log(`Here you go: ${RANDOMFRUIT}`);

console.log('Delicious! May I have another?');

let foods_left = remove(foods,RANDOMFRUIT);

console.log(`I'm sorry, we're all out.  We have ${foods_left} left`);