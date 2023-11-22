import { emailTemplate } from "../../src/js-foundation/01-template";

describe("01-template Tests", () => {
  test("Should contain {{name}}", () => {
    expect(emailTemplate).toMatch(/{{name}}/);
  });
  test("Should contain Hi", () => {
    expect(emailTemplate).toContain("Hi,");
  });
});
