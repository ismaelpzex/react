const persona = {
    nombre: 'ISmael',
    edad: 45,
    clave: 'hombrelobo',
}

const { nombre, edad, clave } = persona;

console.log(nombre);
console.log(edad);
console.log(clave);

const userContext = ({ nombre, apellido = 'de la Poza', clave, edad: años }) => {
    console.log(clave, apellido, clave, años);
}
