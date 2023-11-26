import { buildMakePerson } from "../../src/js-foundation/05-factory";

describe("05-factory.ts Test", () => {
  const getAge = () => 50;
  const getUUID = () => "12345";
  test("buildMakePerson Should return a function", () => {
    const makePerson = buildMakePerson({ getAge, getUUID });
    expect(typeof makePerson).toBe("function");
  });
  test("buildMakePerson Should return a person", () => {
    const makePerson = buildMakePerson({ getAge, getUUID });
    const johnDoe = makePerson({ name: "John Doe", birthdate: "23-04-1998" });
    expect(johnDoe).toEqual({
      id: "12345",
      name: "John Doe",
      birthdate: "23-04-1998",
      age: 50,
    });
  });
});
