import { getUserById } from "../../src/js-foundation/03-callbacks";

describe("03-callbacks Test", () => {
  test("getUserById Should return an error if user doesn't exist", (done) => {
    const id = 10;
    getUserById(id, (err, user) => {
      expect(err).toBe(`User not found with id ${id}`);
      expect(user).toBeUndefined();
      done();
    });
  });
});
