const personajes = ['personaje1', 'personaje2', 'personaje3'];

const [, vejeta, trunks] = personajes;

console.log(vejeta, trunks);

const retornaArreglo = () => {
    return ['abc', 123];
};

const [letras, numeros] = retornaArreglo();

console.log(letras, numeros);

const userState = (valor) => {
    return [valor, () => { console.log('hola mundo') }];
}

const arr = userState('goku');

const [nombre, setNombre] = userState('goku');

console.log(nombre);
setNombre();



