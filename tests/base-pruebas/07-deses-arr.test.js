
import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr"

describe('Pruebas en 07-deses-arr', () => {
    test('debe de retornar un string y un numero', () => { 

        //destructuramos los valores de la funcion
        const [letters , numbers] = retornaArreglo()

        // expect(letters).toBe("ABC")
        expect(numbers).toBe(123)
          
        //estariamos esperando que el tipo de dato sea un "string" y "number" , con typeof nos fijamos el tipo de dato
        expect(typeof letters).toBe("string")
        expect(typeof numbers).toBe("number")
         
        //otra evalucacion es esta:
        //espera cualquier tipo de string , cualquier arreglo , cualquier booleano
        expect(letters).toEqual(expect.any(String))
    })
})