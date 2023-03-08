import { sayHello } from "./utils.js";

test("Say Hello Beatriz", () => {
  expect(sayHello("Beatriz")).toBe("Hello Beatriz");
});
test("Say Hello 44", () => {
  expect(sayHello(44)).toBe("Hello 44");
});
test("Say Hello __", () => {
  expect(sayHello()).toBe("Hello undefined");
});
