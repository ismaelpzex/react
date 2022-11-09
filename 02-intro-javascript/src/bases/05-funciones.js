

const saludar = function (nombre) {
    return `Hola ${nombre}`
};

const saludar2 = (nombre) => `Hola ${nombre}`;

console.log(saludar2('Ismael'));

const getUser = () => ({ uid: '1234', username: 'grd' });

//tarea

function getUsuarioActivo(nombre) {
    return {
        uid: 'ASD',
        username: nombre,
    };
}

const usuarioActivo = getUsuarioActivo('Ismael');

const getUsuarioActivo2 = (nombre) => ({ uid: 'ASD', username: nombre });

console.log(getUsuarioActivo2('Ismael'));
