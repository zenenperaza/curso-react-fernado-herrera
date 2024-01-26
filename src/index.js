// import { heroes } from './data/heroes'

import { heroes } from "./data/heroes";

// import {heroes} from './data/heroes'

// const getHeroeById = (id) => {
//     return heroes.find( (heroe) =>{
//         if(heroe.id === id){
//             return true
//         } 
//     })
// }
const getHeroeById = (id) => heroes.find( (heroe) => heroe.id === id)

// console.log(getHeroeById(2));

const getHeroesByOwner = ( owner ) => heroes.filter( (heroe) => heroe.owner === owner)

console.log(getHeroesByOwner('DC'));