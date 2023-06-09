describe('Pruebas en <DemoComponent />', () => { 

    test("esta prueba no debe de fallar ", ()=>{
   //1. Inicializacion
      const message1 = "hola Mundo"
   //2.Estimulo
     const messaege2 = message1.trim()
   //3.Obervar el comportamiento...
expect(message1).toBe(messaege2)
})

})


