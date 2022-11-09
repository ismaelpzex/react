import heroes, { owners } from './data/heroes';

export const getHeroeById = (id) => heroes.find((value) => value.id === id);

console.log(getHeroeById(2));

export const getHeroesByOwner = (owner) => heroes.filter((value) => value.owner === owner);

console.log(getHeroesByOwner('DC'));


