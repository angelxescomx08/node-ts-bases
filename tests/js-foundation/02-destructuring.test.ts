import { characters } from "../../src/js-foundation/02-destructuring";

describe("02-destructuring Tests", () => {
  test("Should contain Superman, Flash", () => {
    expect(characters).toContain("Flash");
    expect(characters).toContain("Superman");
  });
  test("Should be Flash and Superman in first and second position", () => {
    const [flash, superman] = characters;
    expect(flash).toBe("Flash");
    expect(superman).toBe("Superman");
  });
});
