import { getHeroeById } from "../../src/base-pruebas/08-imp-exp";


describe('Pruebas en 08-impor-expo', () => { 
    
    test('getHeroeById debe retornar un heroe por id', () => { 

        const id = 1;
        const hero = getHeroeById( id )
        console.log(hero) 

        expect(hero).toEqual({id:1, name:"Batman" , owner:"DC"})
     });

     test('getHeroeById debe retornar underfined si no existen', () => { 

        const id = 100;
        const hero = getHeroeById( id )
        console.log(hero) 

       expect(hero).toBeFalsy()
     })
 })

 //tarea:
 //getHeoresByOwner
 //debe retonrar un arreglo con los heroes de DC
 //lenght === 3
 //toEqual al arreglo filtrado

 //debe de retornar un arreglo con los heroes de marvel
 //lenght === 2
 describe('first', () => { second })