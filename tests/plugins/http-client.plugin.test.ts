import { httpClientPlugin } from "../../src/plugins/http-client.plugin";

describe("httpClientPlugin", () => {
  test("method get should return data", async () => {
    const data = await httpClientPlugin.get(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    expect(data).toEqual({
      userId: expect.any(Number),
      id: expect.any(Number),
      title: expect.any(String),
      completed: expect.any(Boolean),
    });
  });

  test("post, put, and delete should have a function", async () => {
    expect(httpClientPlugin.post).toEqual(expect.any(Function));
    expect(httpClientPlugin.put).toEqual(expect.any(Function));
    expect(httpClientPlugin.delete).toEqual(expect.any(Function));
  });
});
