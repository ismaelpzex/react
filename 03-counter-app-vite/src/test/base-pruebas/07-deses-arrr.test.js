import { retornaArreglo } from "@jest/globals";

describe('Pruebas en 07-deses-arr', () => {
    test('debe de retornar un string y un numero', () => {
        const [letters, numbers] = retornaArreglo();

        expect(letters).toBe('ABC');
    })
})