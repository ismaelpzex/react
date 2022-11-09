const activo = true;

let mensaje = '';
let mensaje2 = '';

mensaje = activo ? 'activo' : 'inactivo';
mensaje2 = activo && 'activo';

console.log(mensaje);
console.log(mensaje2);