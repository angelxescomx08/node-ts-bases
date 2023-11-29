import { getPokemonById } from "../../src/js-foundation/06-promises";

describe("06-promises tests", () => {
  test("should return a pokemon name", async () => {
    const pokemon = await getPokemonById(1);

    expect(pokemon).toBe("bulbasaur");
  });

  test("should return a pokemon name", async () => {
    const id = 1000000;
    try {
      await getPokemonById(id);
    } catch (error) {
      expect(error).toBe(`Pokemon con id: ${id} no existe`);
    }
  });
});
