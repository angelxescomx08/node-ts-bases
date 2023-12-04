import { getAge } from "../../src/plugins/get-age.plugin";

describe("getAge", () => {
  test("should return the age of a person", () => {
    const birthdate = "1990-01-01";
    const age = getAge(birthdate);
    expect(age).toBe(34);
  });

  test("should return current age", () => {
    const birthdate = "1990-01-01";
    const age = getAge(birthdate);
    const calculateAge =
      new Date().getFullYear() - new Date(birthdate).getFullYear();
    expect(age).toBe(calculateAge);
  });

  test("should return 0", () => {
    const spy = jest.spyOn(Date.prototype, "getFullYear").mockReturnValue(1998);
    const birthdate = "1998-01-01";
    const age = getAge(birthdate);
    expect(age).toBe(0);
    expect(spy).toHaveBeenCalledWith();
  });
});
