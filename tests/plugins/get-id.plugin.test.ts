import { getUUID } from "../../src/plugins/get-id.plugin";

describe("getUUID", () => {
  test("should return a UUID", () => {
    const uuid = getUUID();
    expect(typeof uuid).toBe("string");
    expect(uuid.length).toBe(36);
  });
});
