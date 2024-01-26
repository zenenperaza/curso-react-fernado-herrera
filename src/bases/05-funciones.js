// funciones en JS
const saludar = function (nombre){
    return `Hola, ${ nombre }`
}


const saludarFlecha = (nombre) => {
    return `Hola, ${ nombre }`
}

const saludarFlecha2 = (nombre) => `Hola, ${ nombre }`


const saludarFlecha3 = () => `Hola  mundo`

// saludar = 30;

// console.log(saludar('Zenen'));
console.log(saludarFlecha('Alexis'));
console.log(saludarFlecha2('Alexis Peraza'));
console.log(saludarFlecha3());

const getUser = () => ({
    uid: '123456',
    username: 'zenenperaza'
})

const user = getUser();
console.log(user);

const usuarioActivo = ( nombre) => ({
    
        uid: '12c365',
        username: nombre,
    
})
// const usuarioActivo = getUserActivo('Zenen')
console.log(usuarioActivo('Zenen'));