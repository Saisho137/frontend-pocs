const personajes = ['Goku','Vegeta','Trunks'];
const [ , , p3 ] = personajes;
console.log( p3 );

const retornaArreglo = () =>{
    return ['ABC', 123];
}

const [ letras, numeros ] = retornaArreglo(); 
console.log(letras, numeros);

// Task
// 1. First value from array will be named 'name'.
// 2. Second Value will be named 'setName'

const usaEstado = ( valor ) => {
    return [ valor, ()=>{ console.log('Hola Mundo') } ];
}

const [ nombre, setNombre ] = usaEstado( 'Goku' );
console.log( nombre );
setNombre();