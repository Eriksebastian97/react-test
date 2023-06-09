import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";


//describe el test en el cual estamos trabajando
describe("Pruebas en 05-funciones", () => {
  test("getUser debe retornar", () => {
    const testUser = {
      uid: "ABC123",
      username: "El_Papi1502",
    };

    const user = getUser();

    //cuando tenemos 2 objetos , si sus propidades son las mismas ocupan espacio en memoria y se debe usar para objetos el toEqual o toStrictEqual
    expect(testUser).toEqual(user);
  });

  test("getUsuarioActivo debe retornar un objeto", () => {

    //la funcion toma un nombre en este caso la tomamos con name
    // llamamos la funcion getUsuarioActivo(name) , console.log(user ) te va a indicar :  "susername:erik"

    //hacemos la validacion del test con expect y llamamamos la funcion.

    const name = "erik";
    const user = getUsuarioActivo(name);

    //comprobamos la sesion
    expect(user).toStrictEqual({
      uid: "ABC567",
      username: name,
    });
  });
});
