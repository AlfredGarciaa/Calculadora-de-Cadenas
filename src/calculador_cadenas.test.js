import calculador from "./calculador_cadenas.js";

describe("!!! CALCULA CADENAS !!!", () => {
  it("deberia retornar 0 al ingresar una cadena vacia '' ", () => {
    expect(calculador("")).toEqual(0);
  });

  it("deberia retornar 1 al ingresar la cadena 1 ", () => {
    expect(calculador("1")).toEqual(1);
  });
});