import { getHeroeById } from "./bases/12.import-export";

// const promesa = new Promise( (resolve, reject) => {
//     setTimeout( () => {

//         const p1 = getHeroeById(2)
//         // console.log(heroe);
//         // resolve( heroe )
//         reject('no se pudo encontrar el heroe')
//     }, 2000)
// })

// promesa.then((heroe)=>{
//     console.log('heroe', heroe);
// })
// .catch( err => console.warn(err))
const getHeroeByIdAsync = ( id ) => {

    return new Promise( (resolve, reject) => {
        setTimeout( () => {
    
            const p1 = getHeroeById(id)
            // console.log(heroe);
            if(p1){
                resolve( p1 )
            } else {
                reject('no se pudo encontrar el heroe')
            }
           
        }, 2000)
    })    
}
getHeroeByIdAsync(1)
.then( console.log)
.catch( console.warn)