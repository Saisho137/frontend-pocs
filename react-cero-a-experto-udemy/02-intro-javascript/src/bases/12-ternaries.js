const activo = true;

/* Traditional Control Flow
if ( !activo ) {
    mensaje = 'Activo';
} else {
     mensaje = 'Inactivo';
} 
*/

/* Traditional Ternary
const mensaje = ( activo ) ? 'Activo' : 'Inactivo';
/* One option tradional Ternary
const mensaje = ( activo ) ? 'Activo' : null;  
*/

//One way control Flow, if 'activo' === true, then return "Activo".
const mensaje = activo && 'Activo';

console.log(mensaje);