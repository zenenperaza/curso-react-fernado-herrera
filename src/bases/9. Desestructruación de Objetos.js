const persona = {
    nombre: 'Zenen',
    edad: 45,
    clave: 'Peraza',
    rango: 'general'
}

// const { nombre, edad, clave } = persona

// console.log(persona.nombre);
// console.log(persona.edad);
// console.log(persona.clave);

const useContexts = ({ clave, nombre, edad, rango = 'Teniente' }) => {
    // console.log( nombre, edad, rango);
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 12.236,
            lng: 12.369
        }
    }
}
const {nombreClave, anios, latlng:{lat, lng}} = useContexts(persona)

console.log(nombreClave, anios);
console.log(lat, lng);