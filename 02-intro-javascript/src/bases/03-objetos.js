

const persona = {
    nombre: 'Ismael',
    apellido: 'de la Poza',
    edad: 32,
    direccion: {
        ciudad: 'Jaén',
        cp: 23007,
        lat: 14.444,
        long: 34.44444,
    }
};

console.log({ persona });

const persona2 = { ...persona };

persona2.nombre = 'Ismae';

console.log({ persona2 });