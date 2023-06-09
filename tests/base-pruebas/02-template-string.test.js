import { getSaludo } from "../../src/base-pruebas/02-template-string"

describe('Pruebas en 02-template-string', () => {  //describe es un agrupador

    test('getSaludo debe retornar "hola fernando" ', () => { 

        const name="Fernando"
        const message = getSaludo(name)

        //expect estoy esperando que el mensaje sea igual que el toBe `hola ${name}`
        expect(message).toBe(`hola ${name}`)
     })
 })