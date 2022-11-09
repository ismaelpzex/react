import { getHeroeById } from "./bases/08-export";


const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const heroe = getHeroeById(id);
            if (heroe !== undefined) resolve(heroe);
            else reject('no se puede encontrar el heroe')
        }, 2000);
    });
}

getHeroeByIdAsync(2)
    .then(console.log)
    .catch(console.error);