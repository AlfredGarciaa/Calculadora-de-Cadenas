import calculador from "./calculador_cadenas.js";

describe("!!! CALCULA CADENAS !!!", () => {
  it("deberia retornar 0 al ingresar una cadena vacia '' ", () => {
    expect(calculador("")).toEqual(0);
  });
});