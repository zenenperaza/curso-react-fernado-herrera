const personajes = ['goku','vegeta','trunks',]

const [ , , p2 ] = personajes

// console.log(p2);
const retornaArreglo = () =>{
    return ['ABC', 123]
}

const [letras, numeros] = retornaArreglo()
// console.log(letras, numeros);
const useState = (valor) =>{
    return [valor, ()=>{ console.log('hola mundo');}]
}

// const arr = useState()

const [nombre, setNombre] = useState('zenen')

console.log(nombre);
setNombre()
